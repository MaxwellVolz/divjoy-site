import React from "react";
import ContentSection from "../../components/ContentSection";
import StatsSection from "../../components/StatsSection";
import TeamBiosSection from "../../components/TeamBiosSection";
import CtaSection from "../../components/CtaSection";
import { useRouter } from "../../util/router.js";
import "./styles.scss";

import { Document } from 'react-pdf';

import mvolzResume from '../../assets/docs/mvolzResume.pdf'

function AboutPage(props) {
  const router = useRouter();

  return (
    <>
      <ContentSection
        color="white"
        size="large"
        title="We help you make money"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!"
      />

        <Document file={mvolzResume} />
          
      
      <CtaSection
        color="primary"
        size="medium"
        title="Ready to get started?"
        subtitle=""
        buttonText="Get Started"
        buttonOnClick={() => {
          router.push("/pricing");
        }}
      />
    </>
  );
}

export default AboutPage;
