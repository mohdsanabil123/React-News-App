import React from "react";

const Shimmer = () => {
    return (
      <div className="container">
        <div className="row">
        {Array.from({ length:8 }).map((el, i)=>{
            return <div key={i} className="col-md-3">
            <div className="card mb-4 border-0" style={{height:"400px", backgroundColor: "#f2f2f2" }}>
              <div className="card-body">
                <div className="card-img-top" style={{height:"134px", backgroundColor: "#d9d9d9"}}></div>
                <div className="card-img-top my-3 mt-5" style={{height:"16px", backgroundColor: "#d9d9d9"}}></div>
                <div className="card-img-top my-3" style={{height:"16px", backgroundColor: "#d9d9d9"}}></div>
                <div className="card-img-top my-3" style={{height:"16px", backgroundColor: "#d9d9d9"}}></div>
                <div className="card-img-top my-3" style={{height:"16px", backgroundColor: "#d9d9d9"}}></div>
                <div className="btn mt-3" style={{ backgroundColor: "#d9d9d9", padding:"15px 40px"}}></div>
              </div>
            </div>
            </div>
        })}
          
        </div>
      </div>
    ); 
}

export default Shimmer