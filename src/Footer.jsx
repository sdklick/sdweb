import React, { useEffect, useState } from "react";
import "./App.css";
import { Followme } from "./ProjectApi";

const Footer = () => {
  const [year, setyear] = useState();
  const [time, settime] = useState();

  useEffect(() => {
    const mydateobj = new Date();
    let myyear = mydateobj.getFullYear();
    setyear(myyear);
  }, []);

  useEffect(() => {
    setInterval(() => {
      const mydateobj = new Date();
      let mytime = mydateobj.toLocaleTimeString();
      settime(mytime);
    }, 1000);
  }, [time]);

  return (
    <>
      <footer id="footer" class="footer-1">
        <div class="main-footer widgets-dark typo-light">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="widget subscribe no-box">
                  <h5 class="widget-title">
                    SDKLICK<span></span>
                  </h5>
                  <p> ╔═╦╗╔╦╗╔═╦═╦╦╦╦╗╔═╗
                      ║╚╣║║║╚╣╚╣╔╣╔╣║╚╣═╣
                      ╠╗║╚╝║║╠╗║╚╣║║║║║═╣
                      ╚═╩══╩═╩═╩═╩╝╚╩═╩═╝</p>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="widget no-box">
                  <h5 class="widget-title">
                    Digital Time<span></span>
                  </h5>
                  <a class="btn" href="" target="_blank">
                    {time}
                  </a>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="widget no-box">
                  <h5 class="widget-title">
                    Get Started<span></span>
                  </h5>
                  <a class="btn" href="https://www.youtube.com/@codebengali925/videos" target="_blank">
                    Subscribe Now
                  </a>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="widget no-box">
                  <h5 class="widget-title">
                    Follow Me<span></span>
                  </h5>

                  <ul class="social-footer2">
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic mixed styles example"
                    >
                      {Followme.map((val) => {
                        return (
                          <>
                            <a
                              type="button"
                              href={val.link}
                              target="__blank"
                              class="btn btn-success"
                            >
                              <i
                                class={val.name}
                                style={{ fontSize: "30px" }}
                              ></i>
                            </a>
                          </>
                        );
                      })}
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-copyright">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <p>Copyright Sumanta Das © {year}. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
