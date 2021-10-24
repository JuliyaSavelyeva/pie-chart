import React from 'react';
import { Link } from 'react-router-dom';
import './login.scss';

const Login = () => {
  console.log(5);
  return (
    <form className="form-authorization">
      <h2 className="form-authorization__title">Sign in to your account</h2>
      <label className="form-authorization__label" htmlFor="email">
        Email
        <input type="email" id="email" name="email" />
      </label>

      <label className="form-authorization__label" htmlFor="password">
        Password
        <input type="password" id="password" className="form-authorization__password" />
      </label>

      <Link to="/data">
        <button type="submit" className="form-authorization__btn">
          Continue
        </button>
      </Link>
    </form>
  );
};

export default Login;
