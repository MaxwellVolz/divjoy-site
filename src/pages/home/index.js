import React from "react";
import HeroSection from "./../../components/HeroSection";
import FeaturesSection from "./../../components/FeaturesSection";
import ClientsSection from "./../../components/ClientsSection";
import TestimonialsSection from "./../../components/TestimonialsSection";
import CtaSection from "./../../components/CtaSection";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function HomePage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        color="primary"
        size="large"
        title="Max Volz, Software Engineer"
        // subtitle="My greatest strengths are my abilities to rapidly learn new technologies and efficiently delivery useful software."
        subtitle="Designs, Develops, Delivers"
        buttonText="Contact Me"
        buttonOnClick={() => {
          router.push("/contact");
        }}
      />
      <FeaturesSection
        color="white"
        size="medium"
        title="Notable Skills"
        subtitle="See my resume for a more information"
      />
      <ClientsSection
        color="light"
        size="medium"
        title="Companies I've worked with"
        subtitle=""
      />
      <TestimonialsSection
        color="dark"
        size="normal"
        title="Here's what people say about me"
        subtitle=""
      />
      <CtaSection
        color="primary"
        size="medium"
        title="Looking for more?"
        subtitle=""
        buttonText="Contact Me"
        buttonOnClick={() => {
          router.push("/contact");
        }}
      />
    </>
  );
}

export default HomePage;
