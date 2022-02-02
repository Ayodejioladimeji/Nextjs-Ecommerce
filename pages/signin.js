import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const initialState = { email: "", password: "" };

const Signin = () => {
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="signin">
      <Head>
        <title>Sign in Page</title>
      </Head>

      <h4>REGISTER TO CONTINUE</h4>

      <div className="signin-box">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={password}
              onChange={handleChangeInput}
            />
          </div>

          <button type="submit" className="btn w-100">
            Login
          </button>

          <p className="my-2">
            You don't have an account?{" "}
            <Link href="/register">
              <a style={{ color: "crimson" }}>Register Now</a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
