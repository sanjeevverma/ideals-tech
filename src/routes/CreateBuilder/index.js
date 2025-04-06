import React from "react";
import "./index.scss";
import { Contact } from "../../components/Contact/Contact";
import { PreviewResume } from "../../components/PreviewResume/PreviewResume";

export default function index() {
  return (
    <>
      <div className="testing1">
        <div>
          <Contact />
        </div>
        <div>
          <div>
            <PreviewResume />
          </div>
        </div>
      </div>
    </>
  );
}
