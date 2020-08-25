import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./sign-up-style.css";

function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    nameError: false,
    emailError: false,
    passwordError: false,
    passwordConfErr: false,
  });

  const {
    name,
    email,
    password,
    confirmPassword,
    nameError,
    emailError,
    passwordError,
    passwordConfErr,
  } = formData;

  let changeListerner = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //form Validation
  let validation = () => {
    const emailRegEx = /^[^@&)(:;/?,][a-z0-9_%-.]+@{1}\w+\.[a-z0-9_%-.]+[^@&)(:;/?,.]$/i;

    //Name Validation
    if (name === "") {
      setFormData(() => {
        return Object.assign(formData, { nameError: "Name must not be empty" });
      });
    } else {
      setFormData(() => {
        return Object.assign(formData, { nameError: false });
      });
    }

    // Email validation
    if (emailRegEx.test(email)) {
      setFormData(() => {
        return Object.assign(formData, { emailError: false });
      });
    } else {
      setFormData(() => {
        return Object.assign(formData, {
          emailError:
            "Please enter a valid email address e.g. example@domain.com",
        });
      });
    }

    // Password Validation
    if (password.length <= 6) {
      setFormData((prevState) => {
        return {
          ...prevState,
          passwordError: "password must be more than 6 character",
        };
      });
    } else {
      setFormData((prevState) => {
        return {
          ...prevState,
          passwordError: false,
        };
      });
    }
    // Password comfirmation Validation
    if (password !== confirmPassword) {
      setFormData((prevState) => {
        return Object.assign(prevState, {
          passwordConfErr: "Password do not match",
        });
      });
    } else {
      setFormData((prevState) => {
        return Object.assign(prevState, {
          passwordConfErr: false,
        });
      });
    }
  };

  let submitFormListerner = (e) => {
    e.preventDefault();
    validation();
    if (nameError || emailError || passwordError || passwordConfErr) {
      // Make POST request and clear the form
      //clear the form
    }
  };

  return (
    <form className="sign-up-form" onSubmit={submitFormListerner}>
      <h2 className="sign-up-form__title">Create Account</h2>
      <div className="sign-up-form__box">
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Ex. John Doe"
          onChange={changeListerner}
          className="sign-up-form__box__name"
        />
        <label>Name</label>
      </div>

      {nameError && <p className="sign-up-form__error">{nameError}</p>}

      <div className="sign-up-form__box">
        <input
          type="text"
          name="email"
          value={email}
          placeholder="e.g. example@domain.com"
          onChange={changeListerner}
          className="
        sign-up-form__box__email 
        "
        />
        <label>Email</label>
      </div>

      {emailError && <p className="sign-up-form__error">{emailError}</p>}

      <div className="sign-up-form__box">
        <input
          type="text"
          name="password"
          value={password}
          placeholder="Password"
          onChange={changeListerner}
          className=" sign-up-form__box__password "
        />
        <label>Password</label>
      </div>

      {passwordError && <p className="sign-up-form__error">{passwordError}</p>}

      <div className="sign-up-form__box">
        <input
          type="text"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={changeListerner}
          className="sign-up-form__confPassword"
        />
        <label>Confirm Password</label>
      </div>

      {passwordConfErr && (
        <p className="sign-up-form__error">{passwordConfErr}</p>
      )}
      <div className="sign-up-form__member">
        <p>
          Don't have an account?{" "}
          <NavLink to="/login">Already have an account?</NavLink>
        </p>
      </div>

      <button type="submit" className="sign-up-form__submit-btn">
        Sign Up
      </button>
    </form>
  );
}

export default SignUpForm;
