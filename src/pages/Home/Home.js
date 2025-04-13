import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import { Header } from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  const navigate = useNavigate();
  const clickBuildResume = () => {
    navigate("/resume-templates");
  };

  return (
    <>
      <Header />
      <section>
        Make your professional resume in minutes
        <p>
          From generating bullet points to automatic formatting, our resume
          builder will help you make a professional resume quickly and
          effortlessly.
        </p>
        <button onClick={clickBuildResume}>Build my resume now</button>
      </section>
      <section>
        Use our resume builder in 3 easy steps Putting together a complete job
        application has never been easier. Make a resume with our professional
        resume builder, and then quickly generate a matching cover letter. In
        minutes you'll be ready to apply for your next job.
      </section>
      <section></section>

      {/* <section>
        <a href="/resume-templates">Make My Resume Now</a>
      </section>
      <section>
        <a href="/make-resume">Instant Resume Maker</a>
      </section> */}

      <Footer />
    </>
  );
}
