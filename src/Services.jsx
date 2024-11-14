import {Component} from "react"
export default function Services()
{
  return(
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center mt-3 mb-3">
          <div className="col-lg-12 col-xl-12">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card h-100 border-danger">
                  <img src="" className="card-img-top" alt="..."/>
                  <div className="card-body text-danger">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 border-danger">
                  <img src="./img/blood1.webp" className="card-img-top" alt="..."/>
                  <div className="card-body text-danger">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 border-danger">
                  <img src="./img/blood1.webp" className="card-img-top" alt="..."/>
                  <div className="card-body text-danger">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>)
}