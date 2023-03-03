/* eslint-disable max-len */
import React from 'react';
import sourceImg from '../../assets/images/renan.jpg';
import GridSection from '../GridSection';
import Typography from '../Typography/styles';
import {
  AboutMeContainer,
  ImageArea,
  SubtitleArea,
  DescriptionTextArea,
  ImageContainer,
  // ImageFilter,
} from './styles';

function AboutMeSection() {
  return (
    <GridSection color="primary" id="about">
      <AboutMeContainer>
        <SubtitleArea>
          <Typography as="h2" type="heading-02" color="textscale-04">1. About me</Typography>
        </SubtitleArea>
        <DescriptionTextArea>
          <Typography as="p" color="textscale-05" type="body-02" weight="regular">
            <Typography color="quarternary" type="body-02" weight="regular">&lt;p&gt; </Typography>
            Hi! My name is Renan and I work as a web and mobile developer. I&apos;m also an Automation Technician, and when I was studying it, I had my first contact with programming. Since then, I&apos;ve learned a lot of things related to development.
            <Typography color="quarternary" type="body-02" weight="regular">&lt;/p&gt; </Typography>
          </Typography>
          <Typography as="p" color="textscale-05" type="body-02" weight="regular">
            <Typography color="quarternary" type="body-02" weight="regular">&lt;p&gt; </Typography>
            I&apos;ve gratuaded as a Full Stack Web Developer at Trybe, one of the biggest schools of programming in South America. That&apos;s when i started to work professionally and exclusevily with software engineering. I already worked as a front-end, back-end and mobile engineer.
            <Typography color="quarternary" type="body-02" weight="regular">&lt;/p&gt; </Typography>
          </Typography>
        </DescriptionTextArea>
      </AboutMeContainer>
      <ImageContainer>
        <ImageArea src={sourceImg} />
        {/* <ImageFilter /> */}
      </ImageContainer>
    </GridSection>
  );
}

export default AboutMeSection;
