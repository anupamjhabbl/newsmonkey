import React, {Component} from 'react';

export default class Spinner extends Component{
    render(){
        return(
            <div className="SpinnerImage">
                <img src={require(`./spinning-loading.gif`)} alt=""/>
            </div>
        )
    }
}