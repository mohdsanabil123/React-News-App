import React, { Component } from "react";

export default class Shimmer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
        {Array.from({ length:8 }).map((el, i)=>{
            return <div key={i} className="col-md-3">
            <div className="card mb-4 border-0" style={{height:"400px", backgroundColor: "#e1e2e3" }}>
              <div className="card-body">
                <div className="card-img-top" style={{height:"134px", backgroundColor: "#bbbdbf"}}></div>
                <div className="card-img-top my-3 mt-5" style={{height:"16px", backgroundColor: "#bbbdbf"}}></div>
                <div className="card-img-top my-3" style={{height:"16px", backgroundColor: "#bbbdbf"}}></div>
                <div className="card-img-top my-3" style={{height:"16px", backgroundColor: "#bbbdbf"}}></div>
                <div className="card-img-top my-3" style={{height:"16px", backgroundColor: "#bbbdbf"}}></div>
                <div className="btn mt-3" style={{ backgroundColor: "#bbbdbf", padding:"15px 40px"}}></div>
              </div>
            </div>
            </div>
        })}
          
        </div>
      </div>
    );
  }
}
