import React, { useState } from "react";

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
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
                <img src="" alt="register page" width="500" height="500" />
              </div>

              <div className="registration-form">
                <h1 className="main-heading mb-3">Registration Form</h1>
                <br />

                <form>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="enter your name"
                      id="username"
                      value={userData.username}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </div>

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
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="phone"
                      id="phone"
                      value={userData.phone}
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
                    Register Now
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

export default Register;
