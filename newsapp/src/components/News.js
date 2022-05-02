import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,

    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    articles = [];
    constructor(props) {
        super(props);
        // console.log("constructor of news component")
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            totalResults:0
        }
        document.title=`NewsTak Latest News - ${this.capitalizeFirstLetter(this.props.category)}`
    }
    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2859da7387a14fb99a820e5fffb7a43a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })

    }
    async componentDidMount() {
        this.updateNews();
    }
    handlePreviousClick = async () => {
        this.setState({
            page: this.state.page - 1
        }, () => {

            this.updateNews();
        });

    }
    handleNextClick = async () => {
        this.setState({
            page: this.state.page + 1
        }, () => {

            this.updateNews();
        });

    }

    fetchMoreData = async () =>{
        this.setState({page: this.state.page +1},async ()=>{

            const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2859da7387a14fb99a820e5fffb7a43a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true, })
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults, loading: false, })
        })

    }
    render() {
        return (
            <>

                <h1 style={{ margin: "30px 0px" }} className="text-center">NewsTak - Top Headlines from {this.capitalizeFirstLetter(this.props.category)}</h1>
                {this.state.loading && <Spinner />}
                {/* {this.state.articles.map((element)=>{console.log(element)})} */}
                {/* <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <NewsItem source={element.source.name} title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 100) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                        </div>
                    })}
                </div> */}


                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader ={<Spinner/>}
                >
                    <div className="container">

                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <NewsItem source={element.source.name} title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 100) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                        </div>
                    })}
                </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / (this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

                </div> */}

            </>
        )
    }
}

export default News