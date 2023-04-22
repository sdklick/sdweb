import React from "react";
import { Channeldata } from "./ProjectApi";
import "./Channel.css"


const Channel = () => {
  return (
    <>
      <div class="card text-center">
        <div class="card-header">Featured</div>
        <div class="card-body">
          <div class="row row-cols-1 row-cols-md-4 g-4">
            {Channeldata.map((val) => {
              return (
                <>
                  <div class="col">
                    <div class="card h-100">
                      <img src={val.cphoto} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">{val.name}</h5>
                        <p class="card-text">
                        {val.cabout}
                        </p>
                        <a href={val.clink} target="__blank" class="btn btn-primary">Watch</a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div class="card-footer text-muted">2 days ago</div>
      </div>
    </>
  );
};

export default Channel;
