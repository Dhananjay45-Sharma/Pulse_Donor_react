export default function Footer()
{
	return(
		<>
	
<footer className="text-center text-lg-start bg-body-tertiary text-muted">
   
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom ">
 <div className="d-flex">

      </div> 
      <div className="container-fluid">
        <div className="d-flex justify-content-center">
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook "></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
      </div>

    </section>
    <section className="">
    <div class="container-fluid  p-4">
    <div class="row" style={{marginLeft:"20rem"}}>
      <div class="col-3 mb-4 mb-md-0">
        <h6 class="text-uppercase fw-bold mb-3">
             Products
           </h6>
           <p>
             <a href="#!" class="text-reset">Angular</a>
           </p>
           <p>
             <a href="#!" class="text-reset">React</a>
           </p>
           <p>
             <a href="#!" class="text-reset">Vue</a>
           </p>
           <p>
             <a href="#!" class="text-reset">Laravel</a>
           </p>
        
      </div>
      <div class="col-3 mb-3 mb-md-0">
           
           <h6 class="text-uppercase fw-bold mb-3">
             Products
           </h6>
           <p>
             <a href="#!" class="text-reset">Angular</a>
           </p>
           <p>
             <a href="#!" class="text-reset">React</a>
           </p>
           <p>
             <a href="#!" class="text-reset">Vue</a>
           </p>
           <p>
             <a href="#!" class="text-reset">Laravel</a>
           </p>
         
     </div>

      <div class="col-3 mb-4 mb-md-0">

        {/* <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4"> */}
            
            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
            <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
            <p>
              <i class="fas fa-envelope me-3"></i>
              info@example.com
            </p>
            <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
            <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
          {/* </div> */}
      </div>
    </div>
  </div>

  <div class="text-center p-3">
    © 2024 Copyright:
    <a class="text-body" href="#"> It Stack Solutions</a>
  </div>
  </section>
  </footer>
		</>)


}