import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Shimmer from './Shimmer'

export default class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  
  async updateNews(pageNo){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.API_KEY}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url)
    let parsedData = await data.json()
    
    this.setState({articles:parsedData.articles, totalResults:parsedData.totalResults, loading:false})
  }

  async componentDidMount(){
    this.updateNews()
  }

  handlePreClick = async () => {
    this.setState({page: this.state.page - 1 })
    this.updateNews()
  }

  handleNextClick = async () => {
    this.setState({page: this.state.page + 1 })
    this.updateNews()
    
  }

  render() {
    return (
      <div className='container mt-5'>
        <h2 className='text-center' style={{marginTop:"70px", marginBottom:"30px"}}>MS News - Top Headlines from {this.props.category}</h2>
        { this.state.loading && <Shimmer /> }
            <div className='row'>
            {! this.state.loading && this.state.articles.map((element)=>{
              return <div className='col-md-3' key={element.url}>
              <NewsItem title={element.title?element.title.slice(0, 42):''} description={element.description?element.description.slice(1, 80):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:"Unknown"} date={element.publishedAt} source={element.source.name}/>
              </div>
            })}
            </div>

            <div className="d-flex justify-content-between">
              <button type='button' disabled={this.state.page<=1} onClick={this.handlePreClick} className='btn btn-dark'>&larr;Previous</button>
              <button type='button' disabled= {this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleNextClick} className='btn btn-dark'>Next&nbsp; &rarr;</button>
            </div>
      </div>
    )
}
}
