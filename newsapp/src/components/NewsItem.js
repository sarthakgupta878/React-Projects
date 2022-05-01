import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description,imageUrl,newsUrl} = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{width:"18rem"}}>
                    <img src={imageUrl?imageUrl:"https://images.hindustantimes.com/img/2022/05/01/1600x900/b8a9c14e-c2f5-11ec-96fe-8f3150f6bc16_1650781931067_1651389178886.jpg"} className="card-img-top" alt="..."/>

                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem