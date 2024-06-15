import React, { Fragment, useState } from 'react';
import '../LoginandSignup/Login.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
function Login() {

  const [signups, setSignups] = useState(false);
  // ----------------------------
  const [customername, setCustomername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ----------------------------
  const navigate = useNavigate();
  // ----------------------

  const handleSighup = () => {
    setSignups(!signups);
  };
  // -------------------------
  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/v1/customer/save", {
        customername: customername,
        email: email,
        password: password,
      });
      alert("Your Registation Successfully");
    } catch (err) {
      alert(err);
    }
  }
  // -----------------------
  async function login(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/v1/customer/login", {
        email: email,
        password: password,
      }).then((res) => {
        console.log(res.data);

        if (res.data.message == "Email not exits") {
          alert("Email not exits");
        }
        else if (res.data.message == "Login Success") {

          navigate('/Movie_Ticket_Booking/');
        }
        else {
          alert("Incorrect Email and Password not match");
        }
      }, fail => {
        console.error(fail); // Error!
      });
    }

    catch (err) {
      alert(err);
    }

  }
  //-----------------------------------
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
                    placeholder="Enter a email address"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>

                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="form3Example4">Password</label>
                  <input type="password" id="form3Example4" className="form-control fs-6 form-control-lg"
                    placeholder="Enter password" 
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    />
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <a href="#!" className="text-primary link-primary">Forgot password?</a>
                </div>

                <div className="text-center mt-3 pt-2">
                  <button type="submit" className="btn text-light btn-lg loginbutton" onClick={login}>Login</button>
                 
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

          {signups ? (

            <div className="d-flex justify-content-center align-items-center ">
              <form>

                <div className="form-outline mb-2">
                  <label className="form-label" htmlFor="form3Example1">Name</label>
                  <input type="text" id="form3Example1" className="form-control fs-6 form-control-lg"
                    placeholder="Enter a name"
                    value={customername}
                    onChange={(event) => {
                      setCustomername(event.target.value);
                    }}
                  />
                </div>

                <div className="form-outline mb-2">
                  <label className="form-label" htmlFor="form3Example3">Email</label>
                  <input type="email" id="form3Example3" className="form-control fs-6 form-control-lg"
                    placeholder="Enter a email address"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>

                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="form3Example4">Password</label>
                  <input type="password" id="form3Example4" className="form-control fs-6 form-control-lg"
                    placeholder="Enter password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                </div>

                <div className="text-center mt-3 pt-2">
                  <button type="submit" className="btn text-light btn-lg loginbutton" onClick={save} >Signup</button>
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


                <div className='text-center pb-2'>
                  <button type="button" className="btn text-light btn-lg backlogin" onClick={() => { setSignups(false) }}> <FontAwesomeIcon icon={faArrowLeft} className='fa-fade' /> Back to Login</button>
                </div>

              </form>

            </div>
          ) : null}
        </Fragment >
      </section >
    </>
  )
}

export default Login;