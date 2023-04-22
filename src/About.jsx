import React from "react";
import { AboutData } from "./ProjectApi";

const About = () => {
  return (
    <>
      <div class="card text-center">
        <div class="card-header">Skill in this technology</div>
        <div class="card-body">
          <div class="card mb-3">
            <div class="row g-0 text-center">
              <div class="col-md-4">
                <img
                  src="https://scontent.frdp4-2.fna.fbcdn.net/v/t39.30808-6/336562842_1638911813213360_7531907218625597491_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=fiQYb6m6oVYAX8OcNhe&_nc_ht=scontent.frdp4-2.fna&oh=00_AfBpsBphCnHHQTOuwpIWu0yts2JxKwGOcQ6KvBI5tPtr0w&oe=6447D3AB"
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  {AboutData.map((val) => {
                    return (
                      <>
                        <div class="progress">
                          <div
                            class={`progress-bar progress-bar-striped progress-bar-animated ${val.acolor}`}
                            role="progressbar"
                            aria-label="Animated striped example"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{width: val.arrav}}
                          ></div>
                        </div>

                        <p class="card-text">
                          <i class={val.sti}> {val.name}</i>
                        </p>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer text-muted">2 days ago</div>
      </div>
    </>
  );
};

export default About;
