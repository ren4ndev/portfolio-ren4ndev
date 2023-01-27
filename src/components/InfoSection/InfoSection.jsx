/* eslint-disable max-len */
import React from 'react';
import GridSection from '../GridSection';
import Typography from '../Typography/styles';
import {
  InfoContainer,
  MonoTextArea,
  DisplayTextArea,
  DescriptionTextArea,
} from './styles';

function InfoSection() {
  return (
    <GridSection color="primary">
      <InfoContainer>
        <MonoTextArea>
          <Typography as="p" color="tertiary" type="body-02">Hi, my name is</Typography>
        </MonoTextArea>
        <DisplayTextArea>
          <Typography as="h2" color="textscale-04" type="display-01">Renan Oliveira.</Typography>
        </DisplayTextArea>
        <DisplayTextArea>
          <Typography as="h2" color="textscale-06" type="display-01">I&apos;m a software developer</Typography>
        </DisplayTextArea>
        <DescriptionTextArea>
          <Typography as="p" color="textscale-05" type="body-02" weight="regular">
            <Typography color="quarternary" type="body-02" weight="regular">&lt;p&gt; </Typography>
            I&apos;m a Full-stack developer, graduated at Trybe. My current goal is to keep improving my skills as a Python back-end developer, but there&apos;s a lot of other technologies that i know, work and that I&apos;m learning too. My permanent goal is to always be a Clean Coder.
            <Typography color="quarternary" type="body-02" weight="regular">&lt;/p&gt; </Typography>
          </Typography>
        </DescriptionTextArea>
      </InfoContainer>
    </GridSection>
  );
}

export default InfoSection;
