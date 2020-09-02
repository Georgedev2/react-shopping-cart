import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./login-style.css";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    emailError: false,
    passwordError: false,
  };

  changeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  validation = () => {
    const { email, password } = this.state;
    const emailRegEx = /^[^@&)(:;/?,][a-z0-9_%-.]+@{1}\w+\.[a-z0-9_%-.]+[^@&)(:;/?,.]$/i;

    // Email validation
    if (email && emailRegEx.test(email)) {
      // emailRegEx.test(email) will return true if the email is of the formate "example@domain.com"

      this.setState({
        emailError: "",
      });
    } else {
      this.setState({
        emailError:
          "Please enter a valid email address e.g. example@domain.com",
      });
    }

    // Password Validation
    if (password.length <= 6) {
      this.setState({
        passwordError: "password must be more than 6 character",
      });
    } else {
      this.setState({
        passwordError: "",
      });
    }
  };
  submitHandler = (e) => {
    const { emailError, passwordError } = this.state;
    e.preventDefault();
    this.validation();
    if (!emailError || !passwordError) {
      // Make POST request and clear the form
      //clear the form
    }
  };

  render() {
    const { email, password, emailError, passwordError } = this.state;

    return (
      <form className="login-form" onSubmit={this.submitHandler}>
        <h2 className="login-form__title">Login</h2>
        <div className="login-form__box">
          <input
            type="text"
            name="email"
            value={email}
            placeholder="e.g. example@domain.com"
            onChange={this.changeHandler}
            className={`login-form__box__email ${emailError && "border--red"}`}
          />
          <label>Email</label>
        </div>

        {emailError && <p className="login-form--error">{emailError}</p>}
        <div className="login-form__box">
          <input
            type="text"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.changeHandler}
            className={`login-form__box__password ${
              emailError && "border--red"
            }`}
          />
          <label>Password</label>
        </div>

        {passwordError && <p className="login-form--error">{passwordError}</p>}

        <button className="login-form__submit-btn " type="submit">
          LOGIN
        </button>
        <div className="login-form__member">
          <p>
            Don't have an account? <NavLink to="/signUp">Create One</NavLink>
          </p>
        </div>
      </form>
    );
  }
}

export default LoginForm;


