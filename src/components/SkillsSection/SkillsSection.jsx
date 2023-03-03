import React from 'react';
import GridSection from '../GridSection';
import SkillsColumn from '../SkillsColumn';
import {
  SkillsContainer,
  GridContainer,
  TopColoredBox,
  BottomColoredBox,
} from './styles';

function SkillsSection() {
  return (
    <GridSection color="primary" id="skills">
      <GridContainer>
        <TopColoredBox />
        <BottomColoredBox />
      </GridContainer>
      <SkillsContainer>
        <SkillsColumn
          icon="backend"
          title="Backend Developer"
          description="As a Backend developer, I manage and model databases, build API's and manage the flow of messages trough the cloud."
          firstSubtitle="Languages i speak"
          firstContent={['Python', 'SQL', 'Node.js']}
          secondSubtitle="Devtools"
          secondContent={['Express.js', 'MongoDB', 'MySQL', 'PostgreSQL', 'gRPC', 'Docker', 'Amazon Web Services', 'Git']}
        />
        <SkillsColumn
          icon="frontend"
          title="Frontend Developer"
          description="As a Frontend developer, I build interfaces, manage the comunication back for front, and even design myself some of the interfaces i build."
          firstSubtitle="Languages i speak"
          firstContent={['Javascript', 'Python']}
          secondSubtitle="Devtools"
          secondContent={['React', 'React Native', 'Next.js', 'CSS-in-JS', 'Sass', 'HTML5', 'CSS3', 'Git']}
        />
        <SkillsColumn
          icon="others"
          title="Other skills"
          description="As a software engineer, I&apos;ve worked with a lot of other technologies and patterns."
          firstSubtitle="I&apos;ve already worked with:"
          firstContent={['OOP (Object-Oriented Programming)', 'Micro services architecture', 'Airflow', 'Datadog', 'Gitflow', 'Atomic Design', 'Atomic Kitchen']}
          secondSubtitle="I&apos;m familiar with:"
          secondContent={['Clean architecture', 'Cloud']}
        />
      </SkillsContainer>
    </GridSection>
  );
}

export default SkillsSection;
