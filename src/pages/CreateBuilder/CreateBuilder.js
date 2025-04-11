import React from "react";
import "./CreateBuilder.scss";
import { Contact } from "../../components/Contact/Contact";
import { PreviewResume } from "../../components/PreviewResume/PreviewResume";

export default function CreateBuilder() {
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
