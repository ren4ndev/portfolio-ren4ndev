import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import InfoSection from '../../components/InfoSection';

function Home({
  theme,
  themeToggler,
}) {
  return (
    <>
      <Header theme={theme} themeToggler={themeToggler} />
      <InfoSection />
    </>
  );
}

Home.propTypes = {
  theme: PropTypes.bool.isRequired,
  themeToggler: PropTypes.func.isRequired,
};

export default Home;
