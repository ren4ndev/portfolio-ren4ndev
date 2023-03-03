/* eslint-disable max-len */
import React from 'react';
import sourceImg from '../../assets/images/renan.jpg';
import content from '../../locales/en.json';
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
  const { title, paragraphs } = content.aboutSection;
  return (
    <GridSection color="primary" id="about">
      <AboutMeContainer>
        <SubtitleArea>
          <Typography as="h2" type="heading-02" color="textscale-04">{title}</Typography>
        </SubtitleArea>
        <DescriptionTextArea>
          {paragraphs.map((text) => (
            <Typography as="p" color="textscale-05" type="body-02" weight="regular">
              <Typography color="quarternary" type="body-02" weight="regular">&lt;p&gt; </Typography>
              {text}
              <Typography color="quarternary" type="body-02" weight="regular">&lt;/p&gt; </Typography>
            </Typography>
          ))}
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
