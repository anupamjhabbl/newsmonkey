import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import '../App.css'
// import InfiniteScroll from 'react-infinite-scroll-component'

export default class News extends Component {
    static defaultProps = {
        country: "in",
        category: "sports"
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            data: {
                articles: []
            },
            loading: true,
            page: 1,
            avlPages: 1
        }                                     /*ye bhi thik hai*/
        // this.setState({
        //     articles : this.articles,
        //     loading : true
        // })
    }

    async componentDidMount() {
        let { country, category, setProgress } = this.props;
        setProgress(10);
        let link = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=560f9ab186d14673947ac91c9b092e59`;
        let data = await fetch(link);
        let parsedData = await data.json();
        console.log(parsedData);
        let k = Math.floor(parsedData.totalResults / 20);
        if (parsedData.totalResults % 20 === 0) {
            this.setState({
                data: parsedData,
                loading: false,
                avlPages: k
            });
        }
        else {
            this.setState({
                data: parsedData,
                loading: false,
                avlPages: k + 1
            });
        }
        setProgress(100);
    }

    nextPage = async () => {
        let { country, category, setProgress} = this.props;
        this.setState({ loading: true })
        setProgress(10);
        let link = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=560f9ab186d14673947ac91c9b092e59&page=${this.state.page + 1}`;
        let data = await fetch(link);
        let parsedData = await data.json();
        this.setState({
            data: parsedData,
            page: this.state.page + 1,
            loading: false
        })
        setProgress(100);
    }

    previousPage = async () => {
        let { country, category,setProgress } = this.props;
        setProgress(10);
        this.setState({ loading: true })
        let link = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=560f9ab186d14673947ac91c9b092e59&page=${this.state.page - 1}`;
        let data = await fetch(link);
        let parsedData = await data.json();
        this.setState({
            data: parsedData,
            page: this.state.page - 1,
            loading: false
        })
        setProgress(100);
    }

    fetchData = async () => {
        let { country, category } = this.props;
        this.setState({ loading: true })
        let link = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=560f9ab186d14673947ac91c9b092e59&page=${this.state.page + 1}`;
        let data = await fetch(link);
        let parsedData = await data.json();
        parsedData.artilces = parsedData.articles.concat(this.state.data.articles);
        this.setState({
            data: parsedData,
            page: this.state.page + 1,
            loading: false
        })
    }

    render() {
        let { color } = this.props;
        return (
            // this.state.loading ? <Spinner/> :
            <>
                {/* <InfiniteScroll
                    dataLength={this.state.data.articles.length} //This is important field to render the next data
                    next={this.fetchData}
                    hasMore={this.state.data.articles.length!==this.state.data.totalResults}
                    loader={<Spinner/>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                    // below props only if you need pull down functionality
                    // refreshFunction={this.refresh}
                    // // pullDownToRefresh
                    // pullDownToRefreshThreshold={50}
                    // pullDownToRefreshContent={
                    //     <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                    // }
                    // releaseToRefreshContent={
                    //     <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
                    // }
                > */}
                    {this.state.loading ? <Spinner/> :
                    <div>
                        <h1>News Monkey: Top Headlines</h1>
                        <div className='news'>
                            {
                                this.state.data.articles.map((elements) => {
                                    return <div key={elements.url}>
                                        <NewsItem source={elements.source.name === null ? "" : elements.source.name} author={elements.author === null ? "unknown" : elements.author} publishedAt={elements.publishedAt} imageUrl={elements.urlToImage === null ? "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?auto=compress&cs=tinysrgb&w=600" : elements.urlToImage} title={elements.title.substring(0, 60) + "..."} content={elements.content === null || elements.content === "" ? elements.description : elements.content} newsUrl={elements.url} color={color} />
                                    </div>
                                })
                            }
                        </div>
                        <div className="mybuttons">
                            <button type="button" disabled={this.state.page === 1} className="btn btn-primary" onClick={this.previousPage}>Previous</button>
                            <button type="button" disabled={this.state.page === this.state.avlPages} className="btn btn-primary" onClick={this.nextPage}>&nbsp; Next &nbsp;</button>
                        </div>

                    </div>
    }
                {/* </InfiniteScroll> */}
            </>
        )
    }
}