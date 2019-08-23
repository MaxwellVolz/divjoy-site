import React from "react";
import ContactSection from "./../../components/ContactSection";
import "./styles.scss";

function ContactPage(props) {
  return (
    <ContactSection
      color="white"
      size="medium"
      title="Coming soon! Please contact me via email or LinkedIn in the meantime."
      subtitle=""
      showNameField={true}
      buttonText="Coming Soon"
    />
  );
}

export default ContactPage;
