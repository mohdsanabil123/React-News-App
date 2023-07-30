import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props
        return (
            <div>
                <div className="card mb-4" style={{}}>
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"89%", zIndex:"1"}}>{this.props.source}</span>
                    <img src={imageUrl?imageUrl:"https://placehold.co/600x400.png"} style={{height:"134px"}} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-title"><b>{title}</b>...</p>
                            <p className="card-text fs-6">{description}...</p>
                            <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}.</small></p>
                            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}
