import { Component } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useRef } from "react";
import toast from "react-hot-toast";
import { loginData } from "./reduxconfig/DataSlice";
import { useDispatch } from "react-redux";

export default function Login() {

 const dispatch = useDispatch();
 const navigate = useNavigate();
  const mailBox = useRef();
  const passBox = useRef();

  const logregister=(event)=>{

      
        const info ={
          email : mailBox.current.value,
          password : passBox.current.value
        }
        console.log(info)
        fetch("http://localhost:8989/noauth/login",{
          method : "POST",
          headers :{
              'Content-Type' : 'application/json'
          },
          body : JSON.stringify(info)
          
       }).then(res=>res.json()).then(result=>{
          if(result.status)
              {
                event.target.reset()
                toast.success(result.msg)
                dispatch(loginData(result.data))
                navigate(`/donor/home`)
              }
              else{
                  toast.error(result.msg)
              }
       }) 
       
       event.preventDefault();   
  }

	return<>
    <form onSubmit={logregister}>
    <section className="vh-100" style={{ backgroundImage: "url('./img/reg bk.jpg')",Height : "100rem"}}> 
    {/* //style={{ background: 'linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))' }} */}
  <div className="container py-5 h-40 ">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-9">
        <div className="card" style={{borderRadius :"1rem"}}>
          <div className="row g-1">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src="./img/logo.jpg"
                alt="login form" className="img-fluid" style={{borderRadius: "1rem 0 0 1rem",height:"33rem"}} />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">
                  <div className="d-flex align-items-center justify-content-center">
                    <i className="fas fa-cubes fa-2x me-1" style={{color: "#CC0000"}}></i>
                    <div className="h1 fw-bold mb-2">Pulse Donor</div>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3 text-center">Sign into your account</h5>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="email" id="form2Example17" className="form-control form-control-lg" ref={mailBox} required/>
                    <label className="form-label" for="form2Example17">Email address</label>
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="password" id="form2Example27" className="form-control form-control-lg" ref={passBox} required />
                    <label className="form-label" for="form2Example27">Password</label>
                  </div>

                  <div className="pt-1 mb-4 text-center">
                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-lg btn-block" type="submit" required>Login</button>
                  </div>

                  <p className="mb-5 text-center" style={{color: "#393f81"}}>Don't have an account? <a href="#!"
                      style={{color: "#393f81"}}>
                        <Link to="/register">Register here</Link></a></p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </form>
    </>

    
}
