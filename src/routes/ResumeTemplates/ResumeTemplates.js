import React from "react";
import "./ResumeTemplates.scss";
import { Header } from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// import template1 from "../../images/template.jpg";
// import template2 from "../../images/advanced-resume-builder-template.png";
// import template3 from "../../images/corporate-resume-builder-template.png";

export default function ResumeTemplates() {
  return (
    <>
      <Header />
      <section>testing</section>
      <div className="templateSection">
        <div className="templateItem">
          <img
            src="/assets/images/advanced-resume-builder-template.png"
            alt=""
          />
          <a href="/create-builder" className="editTempBtn">
            Edit this template
          </a>
        </div>
        <div className="templateItem">
          <img
            src="/assets/images/corporate-resume-builder-template.png"
            alt=""
          />
          <a className="editTempBtn">Edit this template</a>
        </div>
        <div className="templateItem">
          {/* <img src={template3} /> */}
          <a className="editTempBtn">Edit this template</a>
        </div>
      </div>

      <Footer />
    </>
  );
}
