import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
    constructor(){
        super();
        console.log("constructor of news component")
        this.state ={

        }
    }
    render() {
        return (
            <div className="container my-3">
                <h2>NewsTak - Top Headlines</h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="tile" description="desc" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="tile" description="desc" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="tile" description="desc" />
                    </div>
                </div>

            </div>
        )
    }
}

export default News