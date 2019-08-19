import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Features from "./../Features";
import "./styles.scss";

import awslogo from "../../assets/logos/aws.svg";
import reactjslogo from "../../assets/logos/react.svg";
import jslogo from "../../assets/logos/js.svg";
import adobelogo from "../../assets/logos/adobe.svg";

function FeaturesSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <div className="FeaturesSection__box box">
          <Features
            columns={2}
            items={[
              {
                title: "ReactJS",
                body:
                  "Currently using and improving at React 16.9. Staying up to date with the latest and greatest libraries is a way of life.",
                image: reactjslogo
              },
              {
                title: "Javascript",
                body:
                  "One of the beautiful things about Javascript is the better you get, the less you have to write to create something meaningful.",
                image: jslogo
              },
              {
                title: "Amazon Web Services",
                body:
                  "Over the past decade I have deployed on countless web hosting platforms but nothing compares to the functionality and scope of AWS.",
                image:
                  awslogo
              },
              {
                title: "Adobe Suite",
                body:
                  "You can't have a pixel perfect design without being able to move some pixels around.",
                image:
                  adobelogo
              }
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection;
