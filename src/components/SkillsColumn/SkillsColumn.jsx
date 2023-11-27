import React from 'react';
import PropTypes from 'prop-types';
import {
  ColumnBox,
  IconBox,
  TitleArea,
  DescriptionArea,
  SubtitleArea,
  ContentArea,
  ListItem,
  BackendIcon,
  FrontendIcon,
  ListIcon,
} from './styles';
import Typography from '../Typography';

function SkillsColumn({
  icon,
  title,
  highlight,
  description,
  firstSubtitle,
  firstContent,
  secondSubtitle,
  secondContent,
}) {
  const renderIcon = () => {
    switch (icon) {
      case 'backend':
        return <BackendIcon />;
      case 'frontend':
        return <FrontendIcon />;
      case 'others':
        return <ListIcon />;
      default:
        return null;
    }
  };

  return (
    <ColumnBox highlight={highlight}>
      <IconBox>
        {renderIcon()}
      </IconBox>
      <TitleArea>
        <Typography as="h4" type="body-01" color="textscale-06">
          {title}
        </Typography>
      </TitleArea>
      <DescriptionArea>
        <Typography as="p" type="caption-01" color="textscale-06">
          {description}
        </Typography>
      </DescriptionArea>
      <SubtitleArea>
        <Typography as="p" type="caption-01" color="tertiary">
          {firstSubtitle}
        </Typography>
      </SubtitleArea>
      <ContentArea>
        {firstContent.map((item) => (
          <ListItem>
            <Typography as="span" type="caption-01" color="textscale-06">
              {item}
            </Typography>
          </ListItem>
        ))}
      </ContentArea>
      <SubtitleArea>
        <Typography as="p" type="caption-01" color="tertiary">
          {secondSubtitle}
        </Typography>
      </SubtitleArea>
      <ContentArea>
        <Typography as="p" type="caption-01" color="textscale-06">
          {secondContent.map((item) => (
            <ListItem>
              <Typography as="span" type="caption-01" color="textscale-06">
                {item}
              </Typography>
            </ListItem>
          ))}
        </Typography>
      </ContentArea>
    </ColumnBox>
  );
}

SkillsColumn.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  highlight: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  firstSubtitle: PropTypes.string.isRequired,
  firstContent: PropTypes.string.isRequired,
  secondSubtitle: PropTypes.string.isRequired,
  secondContent: PropTypes.string.isRequired,
};

export default SkillsColumn;
