import {useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"; // external CSS file


function App() {

  const Navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [load, setloading] = useState(false)
  const [values, setValues] = useState({
    email: "",
    password : ""
  })


sessionStorage.setItem("UserSession", JSON.stringify(values))

 function Success(){
     return (
            <div className="alert alert-primary" role="alert">
            <strong>User Details</strong> {values.email},and {values.password}
        </div>
        )
  }
  

  const Handlenow = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    setloading(true)
      setValues((prev)=>({
        ...prev,
        email: email,
        password: password
     }))

     setloading(false)

    
     
     Navigate("/shopping")
 

  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-gradient">
      <div className="login-card shadow-lg p-4 rounded-4">

        {values? <Success/> : "" }
        
        <h2 className="text-center fw-bold mb-4 animate-fade">Login</h2>
        <form onSubmit={Handlenow}>
          <div className="mb-3 animate-slide">
            <label htmlFor="email" className="form-label fw-semibold">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-pill"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3 animate-slide delay-1">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-pill"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-flex justify-content-between align-items-center mb-4 animate-slide delay-2">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label htmlFor="rememberMe" className="form-check-label">
                Remember Me
              </label>
            </div>
            <a href="#" className="text-decoration-none fw-semibold">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 rounded-pill animate-bounce"
            
          >
           {load? "loading": "Login"}
          </button>
        </form>

        <p className="text-center mt-4 animate-fade">
          Don’t have an account?{" "}
          <a href="#" className="fw-semibold text-decoration-none">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
