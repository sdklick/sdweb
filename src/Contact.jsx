import React from "react";

const Contact = () => {
  return (
    <>
      <div class="row mx-1 my-5">
        <div class="col-sm-6">
          <div class="card text-center border border-primary">
            <div class="card-body">
              <h5 class="card-title">Sumanta Das</h5>
              <p class="card-text">Age : 23</p>
              <p class="card-text">Gender : Male</p>
              <p class="card-text">Nationality : Indian</p>
              <p class="card-text">Contact no : 8637073059</p>
              <p class="card-text">EMAIL ID : sumantad827@gmail.com</p>
              <a target="__blank" href="https://github.com/sdklick" class="card-text">
                GitHub : https://github.com/sdklick
              </a><br/>
              <a
                href="https://www.linkedin.com/in/sumantad827/"
                target="__blank"
                class="card-text"
              >
                LinkedIn : www.linkedin.com/in/sumantad827
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card border border-success">
            <div class="card-body">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
