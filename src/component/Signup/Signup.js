import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./Signup.css";
import auth from "../../firebase.init";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  const hanndleCreateUser = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Two password did no matchedp");
      return;
    }
    // if (password.length < 6) {
    //   setError("Password should be 6 characters");
    //   return;
    // }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={hanndleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onClick={handleEmailBlur}
              type="email"
              name="email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onClick={handlePasswordBlur}
              type="password"
              name="password"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="Confirm Password">Confirm Password</label>
            <input
              onClick={handleConfirmPasswordBlur}
              type="password"
              name="password"
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input className="form-submit" type="submit" value="Sign Up" />
        </form>
        <p>
          Have an Account?
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
