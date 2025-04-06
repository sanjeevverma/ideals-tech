import React from "react";
import "./Home.scss";
import { Header } from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <section>testing</section>
      <section>
        <a href="/resume-templates">Make My Resume Now</a>
      </section>
      <section>
        <a href="/make-resume">Instant Resume Maker</a>
      </section>
      <Footer />
    </>
  );
}
