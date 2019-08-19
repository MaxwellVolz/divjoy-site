import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Clients from "./../Clients";
import "./styles.scss";
import facebooklogo from "../../assets/logos/facebook.svg";
import esencialogo from "../../assets/logos/esencia.png";
import deltalogo from "../../assets/logos/delta.png";
import advisorlogo from "../../assets/logos/advisor.png";

function ClientsSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Clients
          items={[
            {
              name: "Facebook",
              image: facebooklogo,
              width: "50px"
            },
            {
              name: "Esencia Tech",
              image: esencialogo,
              width: "150px"
            },
            {
              name: "Delta Dental",
              image: deltalogo,
              width: "70px"
            },
            {
              name: "Advisor Software",
              image: advisorlogo,
              width: "120px"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default ClientsSection;
