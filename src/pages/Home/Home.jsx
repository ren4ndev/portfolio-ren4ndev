import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import InfoSection from '../../components/InfoSection';
import AboutMeSection from '../../components/AboutMeSection/AboutMeSection';
import SkillsSection from '../../components/SkillsSection/SkillsSection';
import ContactModal from '../../components/ContactModal';

function Home({
  theme,
  themeToggler,
}) {
  return (
    <>
      <Header theme={theme} themeToggler={themeToggler} />
      <ContactModal />
      <InfoSection />
      <AboutMeSection />
      <SkillsSection />
    </>
  );
}

Home.propTypes = {
  theme: PropTypes.string.isRequired,
  themeToggler: PropTypes.func.isRequired,
};

export default Home;
