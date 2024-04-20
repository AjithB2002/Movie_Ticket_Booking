import React, { Fragment, useState } from 'react';
import '../LoginandSignup/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';



function Login() {


  const [signups, setSignups] = useState(false);


  const handleSighup= () => {
    setSignups(!signups);
  };



  return (
    <>
      <section className="pt-4">
        <Fragment>
          {!signups ? (
            <div className="d-flex justify-content-center align-items-center ">

              <form>
                <div className="form-outline mb-2">
                  <label className="form-label" htmlFor="form3Example3">Email</label>
                  <input type="email" id="form3Example3" className="form-control fs-6 form-control-lg"
                    placeholder="Enter a email address" />

                </div>


                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="form3Example4">Password</label>
                  <input type="password" id="form3Example4" className="form-control fs-6 form-control-lg"
                    placeholder="Enter password" />

                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <a href="#!" className="text-primary link-primary">Forgot password?</a>
                </div>

                <div className="text-center text-lg-start mt-3 pt-2">
                  <button type="button" className="btn text-light btn-lg loginbutton" >Login</button>

                  <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account?
                    <a className="link-primary" onClick={() => { handleSighup(true) }} > Register</a></p>
                </div>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>

                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start mb-3 " >
                  <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                  <button type="button" className="btn facebook btn-floating mx-1" >
                    <FontAwesomeIcon icon={faFacebook} />
                  </button>

                  <button type="button" className="btn google  btn-floating mx-1">
                    <FontAwesomeIcon icon={faGoogle} />
                  </button>

                  <button type="button" className="btn twitter btn-floating mx-1">
                    <FontAwesomeIcon icon={faTwitter} />
                  </button>
                </div>


              </form>

            </div>
          ) : null}
        </Fragment>



        <Fragment>

          {signups ? (<div className="d-flex justify-content-center align-items-center ">

            <form>

              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="form3Example1">Name</label>
                <input type="text" id="form3Example1" className="form-control fs-6 form-control-lg"
                  placeholder="Enter a name" />
              </div>




              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="form3Example3">Email</label>
                <input type="email" id="form3Example3" className="form-control fs-6 form-control-lg"
                  placeholder="Enter a email address" />
              </div>


              <div className="form-outline mb-3">
                <label className="form-label" htmlFor="form3Example4">Password</label>
                <input type="password" id="form3Example4" className="form-control fs-6 form-control-lg"
                  placeholder="Enter password" />

              </div>

              <div className="text-center text-lg-start mt-3 pt-2">
               
                <button type="button" className="btn text-light btn-lg loginbutton" >Signup</button>
              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start mb-3">
                <p className="lead fw-normal mb-0 me-3">Sign up with</p>
                <button type="button" className="btn facebook btn-floating mx-1" >
                    <FontAwesomeIcon icon={faFacebook} />
                  </button>

                  <button type="button" className="btn google  btn-floating mx-1">
                    <FontAwesomeIcon icon={faGoogle} />
                  </button>

                  <button type="button" className="btn twitter btn-floating mx-1">
                    <FontAwesomeIcon icon={faTwitter} />
                  </button>
                
              </div>


            </form>

          </div>
): null}
    </Fragment >
</section >
    </>
  )
}

export default Login;