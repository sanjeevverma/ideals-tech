// eslint-disable-next-line
import React from "react";
import "./ResumeBuilder.scss";
import { Header } from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function ResumeBuilder() {
  return (
    <>
      <Header />
      <section>testing</section>
      <section>
        <div className="createSection">
          <div className="createItems">
            Upload your current resume We'll move everything to your new
            template.
          </div>
          <div className="createItems">
            <a href="/">
              Build a new resume We'll guide you through each section.
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
