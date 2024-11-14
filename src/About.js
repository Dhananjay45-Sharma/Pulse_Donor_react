import {Component} from "react"
export default function About()
{
	return(
		<>
			<div classname="container-fluid">
			  <div classname="row d-flex justify-content-center">
			    <div classname="col-lg-12 col-xl-12">
			      <section classname="py-5">
			          <div classname="container-fluid border border-danger rounded-5">
			              <div classname="row gx-4 p-4 align-items-center justify-content-between">
			                  <div classname="col-md-5 order-2 order-md-1">
			                      <div classname="mt-3 p-2 mt-md-0 rounded-3" >
			                          <span classname="text-center">Our Story</span>
			                          <h2 classname="display-5 fw-bold">About Us</h2>
			                          <p classname="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .</p>
			                          <p classname="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
			                      </div>
			                  </div>
			                  <div classname="col-md-6 offset-md-1 order-1 order-md-2">
			                      <div classname="row gx-2 gx-lg-3">
			                          <div classname="col-6">
			                              <div classname="mb-2"><img classname="img-fluid rounded-3" src="./img/blood1.webp"/></div>
			                          </div>
			                          <div classname="col-6">
			                              <div classname="mb-2"><img classname="img-fluid rounded-3" src="./img/blood1.webp"/></div>
			                          </div>
			                          <div classname="col-6">
			                              <div classname="mb-2"><img classname="img-fluid rounded-3" src="./img/blood1.webp"/></div>
			                          </div>
			                          <div classname="col-6">
			                              <div classname="mb-2"><img classname="img-fluid rounded-3" src="./img/blood1.webp"/></div>
			                          </div>
			                      </div>
			                  </div>
			              </div>
			          </div>
			      </section>
			    </div>
			  </div>
			</div>
		</>)
}