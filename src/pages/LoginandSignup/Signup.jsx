import React from 'react'
import '../LoginandSignup/Signup.css';


function Signup() {
  return (
  <>
  <section class="pt-4">

<div class="d-flex justify-content-center align-items-center ">

    <form>

    <div class="form-outline mb-2">
    <label class="form-label" for="form3Example1">Name</label>
        <input type="text" id="form3Example1" class="form-control fs-6 form-control-lg"
          placeholder="Enter a name" />
      </div>




      <div class="form-outline mb-2">
      <label class="form-label" for="form3Example3">Email</label>
        <input type="email" id="form3Example3" class="form-control fs-6 form-control-lg"
          placeholder="Enter a email address" />
      </div>


      <div class="form-outline mb-3">
      <label class="form-label" for="form3Example4">Password</label>
        <input type="password" id="form3Example4" class="form-control fs-6 form-control-lg"
          placeholder="Enter password" />
       
      </div>

      <div class="text-center text-lg-start mt-3 pt-2">
        <button type="button" class="btn btn-primary btn-lg " >Signup</button>
      </div>

      <div class="divider d-flex align-items-center my-4">
        <p class="text-center fw-bold mx-3 mb-0">Or</p>
      </div>

      <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start mb-3">
        <p class="lead fw-normal mb-0 me-3">Sign in with</p>
        <button type="button" class="btn btn-primary btn-floating mx-1">
        <FontAwesomeIcon icon={faUser} />
        </button>

        <button type="button" class="btn btn-primary btn-floating mx-1">
        <FontAwesomeIcon icon={faUser} />
        </button>

        <button type="button" class="btn btn-primary btn-floating mx-1">
        <FontAwesomeIcon icon={faUser} />
        </button>
      </div>


    </form>
  
</div>
</section>
  </>
  )
}

export default Signup;