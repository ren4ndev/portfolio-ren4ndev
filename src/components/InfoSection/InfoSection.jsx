/* eslint-disable max-len */
import React from 'react';
import GridSection from '../GridSection';
import Typography from '../Typography/styles';
import content from '../../locales/en.json';
import {
  InfoContainer,
  MonoTextArea,
  DisplayTextArea,
  DescriptionTextArea,
} from './styles';

function InfoSection() {
  const {
    intro,
    name,
    title,
    description,
  } = content.infoSection;
  return (
    <GridSection color="primary">
      <InfoContainer>
        <MonoTextArea>
          <Typography as="p" color="tertiary" type="body-02">
            {intro}
          </Typography>
        </MonoTextArea>
        <DisplayTextArea>
          <Typography as="h2" color="textscale-04" type="display-01">
            {name}
          </Typography>
        </DisplayTextArea>
        <DisplayTextArea>
          <Typography as="h2" color="textscale-06" type="display-01">
            {title}
          </Typography>
        </DisplayTextArea>
        <DescriptionTextArea>
          <Typography as="p" color="textscale-05" type="body-02" weight="regular">
            <Typography color="quarternary" type="body-02" weight="regular">&lt;p&gt; </Typography>
            {description}
            <Typography color="quarternary" type="body-02" weight="regular">&lt;/p&gt; </Typography>
          </Typography>
        </DescriptionTextArea>
      </InfoContainer>
    </GridSection>
  );
}

export default InfoSection;
