import React, { useState } from "react";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="register-image">
                <img src="" alt="Login Form" width="500" height="500" />
              </div>

              <div className="registration-form">
                <h1 className="main-heading mb-3">Login Form</h1>
                <br />

                <form>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="enter your email"
                      id="email"
                      value={userData.email}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      id="password"
                      value={userData.password}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </div>

                  <br />
                  <button type="submit" className="btn btn-submit">
                    Login Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Login;
