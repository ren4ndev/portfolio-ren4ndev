import React from 'react';
import GridSection from '../GridSection';
import SkillsColumn from '../SkillsColumn';
import content from '../../locales/en.json';
import {
  SkillsContainer,
  GridContainer,
  TopColoredBox,
  BottomColoredBox,
} from './styles';

function SkillsSection() {
  const { skillsSection } = content;
  return (
    <GridSection color="primary" id="skills">
      <GridContainer>
        <TopColoredBox />
        <BottomColoredBox />
      </GridContainer>
      <SkillsContainer>
        {skillsSection.map((item) => (
          <SkillsColumn
            icon={item.icon}
            title={item.title}
            highlight={item.highlight}
            description={item.description}
            firstSubtitle={item.sublists[0].title}
            firstContent={item.sublists[0].items}
            secondSubtitle={item.sublists[1].title}
            secondContent={item.sublists[1].items}
          />
        ))}
      </SkillsContainer>
    </GridSection>
  );
}

export default SkillsSection;
