import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Shimmer from './Shimmer'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from 'react-top-loading-bar'

const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoding] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const [progress, setProgress] = useState(10)          // for top progress bar.

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.API_KEY}&page=${page}&pageSize=${props.pageSize}`;
    setLoding(true)
    setProgress(20)
    let data = await fetch(url)
    setProgress(40)
    let parsedData = await data.json()
    setArticles(parsedData.articles)
    setProgress(60)
    setTotalResults(parsedData.totalResults)
    setProgress(100)
    setLoding(false)
  }

  useEffect(() => {
    updateNews()
  }, []);


  // const handlePreClick = async () => {
  //   setPage(page - 1)
  //   updateNews()
  // }

  // const handleNextClick = async () => {
  //   setPage(page + 1)
  //   updateNews()

  // }

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.API_KEY}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    let data = await fetch(url) 
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  }

  return (
    <>
      <h2 className='text-center' style={{ marginTop: "70px", marginBottom: "30px" }}>MS News - Top Headlines from {props.category}</h2>
      {loading && <Shimmer />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner/>}
      >
        <div className="container">
        <div className='row'>
          {articles.map((element) => {
            return <div className='col-md-3' key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 42) : ''} description={element.description ? element.description.slice(1, 80) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name} />
            </div>
          })}
        </div>
        </div>

      </InfiniteScroll>

      {/* Top loding bar */}
      <div>
        <LoadingBar
          color='#f11946'
          progress={progress}
          height={3}
          onLoaderFinished={() => setProgress(0)}
        />
      </div>
    </>
  )
}

News.defaultProps = {
  country: 'in',
  pageSize: 6,
  category: 'general'
}

export default News;