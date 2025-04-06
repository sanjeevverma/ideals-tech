import React from "react";
import "./Contact.scss";

export const Contact = ({}) => {
  return (
    <section>
      <div>
        <div>Contact</div>
        <div>
          Let's start with the basics. To ensure employers can reach you, input
          at least your name, email, and phone number.
        </div>
        <div>photo image</div>
        <div>Add a Photo to Your Resume (Optional)</div>
        <div>Add Photo</div>
        <div>
          <input type="text" placeholder="First Name" />
        </div>
        <div>
          <input type="text" placeholder="Last Name" />
        </div>
        <div>
          <input type="text" placeholder="Desired Job Title" />
        </div>
        <div>
          <input type="text" placeholder="Phone" />
        </div>
        <div>
          <select>
            <option>Country</option>
          </select>
        </div>
        <div>
          <input type="text" placeholder="City or Town" />
        </div>
        <div>
          <input type="text" placeholder="State" />
        </div>
        <div>
          <input type="text" placeholder="Pin code" />
        </div>
        <div>Nationality</div>
        <div>LinkedIn</div>
        <div>Twitter</div>
        <div>Website</div>
        <div>
          <button>Back</button>
          <button>save & Continue</button>
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = {};

Contact.defaultProps = {};
