import { useRef } from "react";
import toast from "react-hot-toast";
    
    export default function Register(){
    const namBox = useRef();
    const mailBox = useRef();
    const phoneBox = useRef();
    const genBox = useRef();
    const bdBox = useRef();

    const dregister=(event)=>{

         event.preventDefault();
          const info ={
            name : namBox.current.value,
            mobile : phoneBox.current.value,
            email : mailBox.current.value,
            gender : genBox.current.value,
            bloodGroup : bdBox.current.value, 
          }
          fetch("http://localhost:8989/noauth/register",{
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
                }
                else{
                    toast.error(result.msg)
                }
         })    
    }
    return<>
    <form onSubmit={dregister}>
    <section className="vh-100 gradient-custom" 
    // style={{ background: 'linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))' }}
    style={{ backgroundImage: "url('./img/reg bk.jpg')"}}>
   <div className="container py-5 h-100">
     <div className="row justify-content-center align-items-center h-100">
       <div className="col-12 col-lg-9 col-xl-7">
         <div className="card shadow-2-strong card-registration" style={{borderRadius:"15px"}}>
           <div className="card-body p-4 p-md-5">
             <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 text-center">Registration Form</h3>
             
 
               <div className="row">
                 <div className="col-md-6 mb-4">
 
                   <div data-mdb-input-init className="form-outline">
                     <input type="text" id="firstName" className="form-control form-control-lg" ref={namBox} required/>
                     <label className="form-label" for="firstName">Name</label>
                   </div>
 
                 </div>
                 <div className="col-md-6 mb-4">
 
                   <div data-mdb-input-init className="form-outline">
                     <input type="tel" className="form-control form-control-lg" ref={phoneBox} minLength={10} maxLength={10} required/>
                     
                     <label className="form-label" for="lastName">Mobile</label>
                   </div>
 
                 </div>
               </div>
 
               <div className="row">
                 <div className="col-md-6 mb-4">
 
                   <div data-mdb-input-init className="form-outline">
                     <input type="email" id="firstName" className="form-control form-control-lg" ref={mailBox} required/>
                     <label className="form-label" for="firstName">Email</label>
                   </div>
 
                 </div>
                 <div className="col-md-6 mb-4">
 
                   <div data-mdb-input-init className="form-outline">
                   <select className="form-control form-control-lg" ref={genBox} required>
               <option value="" className="text-center">Select Gender</option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               </select>
                     <label className="form-label" for="lastName">Gender</label>
                   </div>
 
                 </div>
               </div>
               
 
               <div className="row">
 
                 <div className="">
 
                   <div data-mdb-input-init className="form-outline">
             <select className="form-control form-control-lg" ref={bdBox} required>
               <option value="" className="text-center">Blood Group</option>
               <option value="A+">A+</option>
               <option value="A-">A-</option>
               <option value="B+">B+</option>
               <option value="B-">B-</option>
               <option value="AB+">AB+</option>
               <option value="AB-">AB-</option>
               <option value="O+">O+</option>
               <option value="O-">O-</option>
             </select>
             <label className="form-label" for="emailAddress">Select BloodGroup</label>
                   </div>
 
                 </div>
               </div>
 
               
               <div className="mt-4 pt-2 text-center">
                 <input data-mdb-ripple-init className="btn btn-secondary btn-lg" type="submit" value="Submit" />
               </div>
 
             
           </div>
         </div>
       </div>
     </div>
   </div>
 </section>
        </form></>
}
    