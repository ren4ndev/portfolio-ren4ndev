import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import InfoSection from '../../components/InfoSection';
import AboutMeSection from '../../components/AboutMeSection/AboutMeSection';

function Home({
  theme,
  themeToggler,
}) {
  return (
    <>
      <Header theme={theme} themeToggler={themeToggler} />
      <InfoSection />
      <AboutMeSection />
    </>
  );
}

Home.propTypes = {
  theme: PropTypes.bool.isRequired,
  themeToggler: PropTypes.func.isRequired,
};

export default Home;
