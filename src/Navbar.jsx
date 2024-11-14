import { Link, Navigate } from "react-router-dom";
import { logoutData } from "./reduxconfig/DataSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Navbar()
{
  const user = useSelector(store=>store.user.value);
	return(
		<>    

		<nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
          <div className="container-fluid">
           <div className="navbar-brand" href="#">
            <img src="data:image/jpeg;base64,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" height="95" width="110" alt=""/>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {user.islogin?<DonorMenu/>:<HomeMenu/>}
                      {/* <Link to="/blogs" classNameName="nav-item nav-link">Blogs</Link>
                      <Link to="/footer" classNameName="nav-item nav-link">Footer</Link>
					  <Link to="/login" classNameName="nav-item nav-link">Login</Link> */}
          </div>
      
      </nav>
			{/* <nav classNameName="navbar navbar-expand-lg">
			  <div classNameName="container-fluid">
			    <img src="./img/logo.png" height="150px" classNameName="ms-5"/>
			    <a classNameName="navbar-brand text-danger" href="#"></a>
			    <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			      <span classNameName="navbar-toggler-icon"></span>
			    </button>
			    <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
				<div classNameName="navbar-nav mx-auto">
                      <Link to="/" classNameName="nav-item nav-link active">Carousel</Link>
                      <Link to="/ser" classNameName="nav-item nav-link">Services</Link>
                      <Link to="/blogs" classNameName="nav-item nav-link">Blogs</Link>
                      <Link to="/footer" classNameName="nav-item nav-link">Footer</Link>
					  <Link to="/login" classNameName="nav-item nav-link">Login</Link>
				</div> 
			    </div>
			  </div>
			</nav> */}
		</>)
}

const HomeMenu=()=>{
  return<>
                  <div className="collapse navbar-collapse justify-content-center " id="navbarSupportedContent">
            <div className="navbar-nav me-2 mx-auto mb-2 mb-lg-0 fs-5 fw-medium px-5 d-flex align-items-center">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {/* <div className="navbar-nav mx-auto animated slideInDown"> */}
                    <Link to="/" className="nav-item nav-link active me-5">Home</Link>
                    <Link to="/service" className="nav-item nav-link me-5">Services</Link>                    
                    <Link to="/contact" className="nav-item nav-link me-5">Contact Us</Link>
                    <Link to="/register" className="nav-item nav-link me-5">Register</Link>
                    {/* <Link to="/reg" className="nav-item nav-link me-5">NewRegister</Link>
                    <Link to="/log" className="nav-item nav-link me-5">Newlogin</Link> */}
                &nbsp;
                <Link to="/login" className="btn btn-danger" style={{borderRadius :".5rem"}}>Login<i className="fa fa-arrow-right ms-3"></i></Link>
                </div>
            </div>            
            </div>
  </>
}

const DonorMenu=()=>{
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return<>
  <div className="collapse navbar-collapse justify-content-center " id="navbarSupportedContent">
  <div className="navbar-nav me-2 mx-auto mb-2 mb-lg-0 fs-5 fw-medium px-5 d-flex align-items-center">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <div className="navbar-nav mx-auto animated slideInDown"> */}
          <Link to="/donor/home" className="nav-item nav-link active me-5">Home</Link>
          <Link to="/donor/request" className="nav-item nav-link me-5">Request</Link>                    
          <Link to="/donor/profile" className="nav-item nav-link me-5">Profile</Link>
      <b to="/login" onClick={()=>{dispatch(logoutData()) 
        navigate("/login")}} className="btn btn-danger" style={{borderRadius :".5rem"}}>Logout<i className="fa fa-arrow-right ms-3"></i></b>
      </div>
  </div>            
  </div>
  </>
  
}