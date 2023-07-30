import React, { Component } from "react";

export default class Shimmer extends Component {
  render() {
    return (
      <div className="container my-3">
        <div className="row">
        {Array.from({ length:8 }).map((el, i)=>{
            return <div key={i} className="col-md-3">
            <div className="card mb-4" style={{height:"23rem", backgroundColor: "#d2d2d4" }}>
              <div className="card-body">
              </div>
            </div>
            </div>
        })}
          
        </div>
      </div>
    );
  }
}
