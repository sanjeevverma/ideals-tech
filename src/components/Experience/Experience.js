import React from "react";
import "./Experience.scss";

export const Experience = ({}) => {
  return (
    <section>
      <div>
        <div>Experience</div>
        <div>
          This is going to be easy, we promise! Let's start with your most
          recent job.
        </div>

        <div>
          <input type="text" placeholder="Job title" />
        </div>
        <div>
          <input type="text" placeholder="Company or Organization Name" />
        </div>
        <div>
          <select>
            <option>Country</option>
          </select>
        </div>

        <div>
          <input type="text" placeholder="State" />
        </div>
        <div>
          <input type="text" placeholder="City or Town" />
        </div>
        <div>
          <select>
            <option>Start Month</option>
          </select>
        </div>
        <div>
          <select>
            <option>Start Year</option>
          </select>
        </div>
        <div>
          <select>
            <option>End Month</option>
          </select>
        </div>
        <div>
          <select>
            <option>End Year</option>
          </select>
        </div>
        <div>
          <input type="checkbox" />I currently work here
        </div>
        <div>
          <button>Back</button>
          <button>save & Continue</button>
        </div>
      </div>
    </section>
  );
};

Experience.propTypes = {};

Experience.defaultProps = {};
