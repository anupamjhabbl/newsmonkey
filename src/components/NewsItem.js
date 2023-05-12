import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { imageUrl, title, content, newsUrl, author, publishedAt, source, color} = this.props;
        return (
            <div className="card newsitem" style={{ width: "18rem" }}>
                <img src={imageUrl} className="card-img-top newsitemImg" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>
                    <p style={{color:"green"}}>from {author} on {publishedAt}</p>
                    <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-${color}`}>
                        {source}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    <a href={newsUrl} className="btn btn-primary">Read more</a>
                </div>
            </div>
        )
    }
}