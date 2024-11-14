import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { loginData } from "./reduxconfig/DataSlice"

export default function Verify()
{ 
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const dobRef =useRef();
    const passRef =useRef();
    const location=useLocation()
    const basic=new URLSearchParams(location.search)
    const token=basic.get('token')
    console.log(token);



    const verify = (event)=>{
        event.preventDefault();
        const data = {
          DOB : dobRef.current.value,
          password : passRef.current.value
        }
        fetch(`http://localhost:8989/noauth/email/verification/${token}`,{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(data)
        }).then(res=>res.json()).then(result=>{
            console.log(result)
          if(result.status){
               event.target.reset()
               toast.success(result.msg)

             dispatch(loginData(result.data));
                Navigate(`/${result.data.role}`)
          } else{
            toast.error(result.msg)
          }           
        })

     }

    
    return <>
     <div className="container-xxl py-5">
            <div className="container">
                <div className="bg-light rounded">
                    <div className="row g-0">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="h-100 d-flex flex-column justify-content-center p-5">
                                <h1 className="mb-4">Email verification form</h1>
                                <form onSubmit={verify}>
                               
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="Date" className="form-control border-0" id="gname" placeholder="DOB" ref={dobRef}  required/>
                                                <label for="gname" className="text-dark" >Date of Birth </label>
                                            </div>
                                        </div>
                                    
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="password" className="form-control border-0" id="gmail" placeholder="password" ref={passRef}  required/>
                                                <label for="gmail" className="text-dark">Password</label>
                                            </div>
                                        </div>

                                        {/* <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="password" className="form-control border-0" id="gmail" placeholder="password"   required/>
                                                <label for="gmail" className="text-dark">Location</label>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="password" className="form-control border-0" id="gmail" placeholder="password"   required/>
                                                <label for="gmail" className="text-dark">Location</label>
                                            </div>
                                        </div> */}
                                       
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Login</button>
                                            {/* New here? <Link to="/register" className="register-link">Register now</Link> */}

                                            <div className="login-footer">
                 </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                   
                    </div>
                </div>
            </div>
        </div>
    </>
}

// import React, { useEffect, useState } from "react";

// export default function Verification() {
//   const [token, setToken] = useState("");

//   useEffect(() => {
//     const basic = new URLSearchParams(window.location.search);
//     const fetchedToken = basic.get("token");
//     setToken(fetchedToken);
//   }, []);

//   return (
//     <div>
//       <h1>Verification Page</h1>
//       <p>Token: {token}</p>
//     </div>
//   );
// }
