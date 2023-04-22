import React from "react";
import {ProjectApi} from "./ProjectApi";

const Projects = () => {
  return (
    <>
      {ProjectApi.map((val) => {
        return (
          <>
            <div class="accordion" id="accordionExample">
              <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#panelsStayOpen-${val.accid}`}
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      {val.pName}
                    </button>
                  </h2>
                  <div
                    id={`panelsStayOpen-${val.accid}`}
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingTwo"
                  >
                    <div class="accordion-body">
                      <p>{val.pDetails}</p>

                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target={`#${val.id}`}
                      >
                        Launch Application
                      </button>

                      <div
                        class="modal fade"
                        id={val.id}
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">
                                {val.pName}
                              </h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <div class="card text-center">
                                <div class="card-body">
                                  <div class="d-flex flex-column flex-wrap">
                                    <iframe src={val.pLink}></iframe>
                                  </div>
                                </div>
                                <a
                                  href={val.pLink}
                                  target="__blank"
                                  class="btn btn-primary"
                                >
                                  Fullscreen
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Projects;
