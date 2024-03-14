import { useState } from "react";
import "./signup.css"
import { api, authServices } from "./services";
import { auth } from "./services/firebase";
import { currentUser } from "./services/auth.service";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

const Signup = () => {
  // console.log(currentUser());
  const [signin, setSignin] = useState(false);
  const [user, setUser] = useState(currentUser());
  const [values, setValues] = useState({
    name: "",
    rollnumber: null,
    email: "",
    phone: null,
    organization: "",
    branch: "",
    semester: null,
    pass: "",
    confirmpass: ""
  });

  onAuthStateChanged(auth, (userData) => {
    if (userData) {
      setUser(userData);
    } else {
      setUser(null);
    }
  });

  const nameHandler = (e) => {
    setValues({
      ...values,
      name: e.target.value
    })
  }

  const rollnumberHandler = (e) => {
    setValues({
      ...values,
      rollnumber: e.target.value
    })
  }

  const emailHandler = (e) => {
    setValues({
      ...values,
      email: e.target.value
    })
  }

  const phoneHandler = (e) => {
    setValues({
      ...values,
      phone: e.target.value
    })
  }

  const organizationHandler = (e) => {
    setValues({
      ...values,
      organization: e.target.value
    })
  }

  const branchHandler = (e) => {
    setValues({
      ...values,
      branch: e.target.value
    })
  }

  const semesterHandler = (e) => {
    setValues({
      ...values,
      semester: e.target.value
    })
  }

  const passwordHandler = (e) => {
    setValues({
      ...values,
      pass: e.target.value
    })
  }

  const confirmpassHandler = (e) => {
    setValues({
      ...values,
      confirmpass: e.target.value
    })
  }

  const login = (e) => {
    e.preventDefault();
    authServices.login(values.email, values.pass).then((res) => {
      // setUser(()=>res)
      console.log(res);
    }).catch((err) => {
      console.log(err.message);
      // alert(err.message);
    });
  }

  const signup = (e) => {
    e.preventDefault();
    if (values.pass === values.confirmpass) {
      authServices.signup(values.email, values.pass).then((res) => {
        authServices.profile(res.user, values.name, values.phone, values.rollnumber, values.organization, values.branch, values.semester).then((res2) => {
          // console.log(res2);
          authServices.verifyEmail(res.user);
          api.saveUserData(values).then((response)=> {
            // console.log(response);
          }).catch((erro)=> {
            console.log("error1"+erro);
          })
        }).catch((errorm) => {
          console.log("error2:"+errorm);
        });
        // console.log(res);
      }).catch((err) => {
        console.log("error3"+err.message);
        // alert(err.message);
      });
    } else {
      alert("Password mismatch");
    }
  }

  const signupForm = () => {
    return (
      <form onSubmit={signup} className="row justify-content-center align-items-center" >
        <div className="input-group mb-3 col-10">
          <span className="input-group-text fs-2" id="basic-addon1"><i className="bi bi-person-fill"></i></span>
          <input type="text" className="form-control fs-4" value={values.name} onChange={nameHandler} placeholder="Full Name" aria-describedby="basic-addon1" required />
        </div>
        <div className="input-group mb-3 col-10">
          <span className="input-group-text fs-2" id="basic-addon2"><i className="bi bi-person-lines-fill"></i></span>
          <input type="number" className="form-control fs-4" value={values.rollnumber} onChange={rollnumberHandler} placeholder="Roll Number" aria-describedby="basic-addon2" required />
        </div>
        <div className="input-group mb-3 col-10">
          <span className="input-group-text fs-2" id="basic-addon3"><i className="bi bi-envelope-at-fill"></i></span>
          <input type="email" className="form-control fs-4" value={values.email} onChange={emailHandler} placeholder="Email Address" aria-describedby="basic-addon3" required />
        </div>
        <div className="input-group mb-3 col-10">
          <span className="input-group-text fs-2" id="basic-addon4"><i className="bi bi-telephone-fill"></i></span>
          <input type="tel" className="form-control fs-4" value={values.phone} onChange={phoneHandler} placeholder="Phone Number" aria-describedby="basic-addon4" required />
        </div>
        <div className="input-group mb-3 col-10">
          <span className="input-group-text fs-2" id="basic-addon5"><i className="bi bi-people-fill"></i></span>
          <input type="text" className="form-control fs-4" value={values.organization} onChange={organizationHandler} placeholder="Organization Name" aria-describedby="basic-addon5" required />
        </div>
        <div className="input-group mb-3 col-10">
          <span className="input-group-text fs-2" id="basic-addon6"><i className="bi bi-journals"></i></span>
          <input type="text" className="form-control fs-4" value={values.branch} onChange={branchHandler} placeholder="Course & Branch" aria-describedby="basic-addon6" required />
        </div>
        <div className="input-group mb-3 col-10">
          <span className="input-group-text fs-2" id="basic-addon7"><i className="bi bi-journal"></i></span>
          <input type="number" className="form-control fs-4" value={values.semester} onChange={semesterHandler} placeholder="Semester" aria-describedby="basic-addon7" required />
        </div>
        <div className="input-group mb-3 col-10">
          <span className="input-group-text fs-2" id="basic-addon8"><i className="bi bi-lock-fill"></i></span>
          <input type="password" className="form-control fs-4" value={values.pass} onChange={passwordHandler} placeholder="Password" aria-describedby="basic-addon8" required />
        </div>
        <div className="input-group mb-3 col-10">
          <span className="input-group-text fs-2" id="basic-addon9"><i className="bi bi-lock-fill"></i></span>
          <input type="text" className="form-control fs-4" value={values.confirmpass} onChange={confirmpassHandler} placeholder="Confirm Password" aria-describedby="basic-addon9" required />
        </div>
        <button onClick={signup} className="btn btn-primary btn-lg mt-4 fs-3">Signup</button>
      </form>
    )
  }

  const loginForm = () => {
    return (
      <form onSubmit={login} className="row justify-content-center align-items-center" >
        <div className="input-group mb-3 col-10">
          <span className="input-group-text fs-2" id="basic-addon3"><i className="bi bi-envelope-at-fill"></i></span>
          <input type="email" className="form-control fs-4" value={values.email} onChange={emailHandler} placeholder="Email Address" aria-describedby="basic-addon3" required />
        </div>
        {/* <div className="input-group mb-3 col-10">
          <span className="input-group-text fs-2" id="basic-addon2"><i className="bi bi-person-lines-fill"></i></span>
          <input type="number" className="form-control fs-4" value={values.rollnumber} onChange={rollnumberHandler} placeholder="Roll Number" aria-describedby="basic-addon2" required />
        </div> */}
        <div className="input-group mb-3 col-10">
          <span className="input-group-text fs-2" id="basic-addon8"><i className="bi bi-lock-fill"></i></span>
          <input type="password" className="form-control fs-4" value={values.pass} onChange={passwordHandler} placeholder="Password" aria-describedby="basic-addon8" required />
        </div>
        <button onClick={login} className="btn btn-primary btn-lg mt-4 fs-3">Login</button>
      </form>
    )
  }



  if (user) {
    return <Navigate to="/profile" />
  }
  return (
    <div>
      <div className="bodybill d-flex justify-content-center align-items-center vh-100">
        <div className="mx-auto col-md-6 col-lg-4 col-xlg-3 col-10 p-4 bg-light rounded-4 shadow border border-1 border-primary bg-opacity-50">
          <div className="text-center fs-1 text-primary mb-4 row">
            <div className="btn btn-outline-primary col-4 offset-1 d-flex justify-content-center align-items-center" onClick={() => setSignin(() => true)}>
              <input type="radio" className="mx-2" checked={signin} />
              <div className="fs-3">LOGIN</div>
            </div>
            <div className="btn btn-outline-primary col-4 offset-1 d-flex justify-content-center align-items-center" onClick={() => setSignin(() => false)}>
              <input type="radio" className="mx-2" checked={!signin} />
              <div className="fs-3">SIGNUP</div>
            </div>
          </div>
          {
            signin ?
              loginForm() :
              signupForm()
          }
        </div>
      </div>
    </div>
  )
}

export default Signup
