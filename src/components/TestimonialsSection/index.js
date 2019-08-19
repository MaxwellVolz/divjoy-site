import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Testimonials from "./../Testimonials";
import "./styles.scss";

import anandprofile from "../../assets/people/anand.jpg";
import meghanprofile from "../../assets/people/meghan.jpg";
import marcprofile from "../../assets/people/marc.jpg";

function TestimonialsSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Testimonials
          items={[
            {
              avatar: anandprofile,
              name: "Anand Singh",
              quote:
                "Max is very talented and holds an exceptional skill-set and most important the right mindset to get things done right. I am sure that he will do great things in the future.",
              company: "Prinicipal Software Architect, Esencia Technologies Inc."
            },
            {
              avatar: meghanprofile,
              name: "Meghan Sullivan  ",
              quote:
                "Max has been a huge asset to our company and team, helping us build complex applications that rely on cutting edge UI and complex JavaScript. His ability to master the core elements of his job and help others learn and benefit from his knowledge sets him apart from others.",
              company: "Creative Design Director, Advisor Software"
            },
            {
              avatar: marcprofile,
              name: "Marc Mertsching",
              quote:
                "You hit it out of the park.",
              company: "VP Engineering, Esencia Technologies Inc."
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default TestimonialsSection;
