import styled from 'styled-components';
import {
  Linkedin,
  Whatsapp,
  Github,
  Instagram,
  Twitter,
} from '@styled-icons/bootstrap';
import { breakpoints } from '../../styles/theme';

const ModalContainer = styled.div`
  align-items: flex-end;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  width: 90px;
  height: 250px;
  transition: all .4s ease;
  transform: ${({ show }) => {
    if (!show) return 'translateX(-65px)';
    return null;
  }
};

  @media screen and (min-width: ${breakpoints.xmedium}) {
    width: 120px;
    height: 350px;
    transform: ${({ show }) => {
    if (!show) return 'translateX(-90px)';
    return null;
  }
};
  }
`;

const ContactArea = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.quarternary};
  border-radius: 0 10px 10px 0;
  box-shadow: -12px 10px 31px -15px #0A192F;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 70px;
  transition: all .4s ease;
  
  @media screen and (min-width: ${breakpoints.xmedium}) {
    width: 90px;
  }
`;

const SocialButton = styled.a`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 30px;
  margin: 7px 0;
  width: 30px;

  @media screen and (min-width: ${breakpoints.xmedium}) {
    height: 40px;
    margin: 10px 0;
    width: 40px;
  }
`;

const LinkedinIcon = styled(Linkedin)`
  color: ${({ theme }) => theme.colors.white};
  height: 80%;
  width: 80%;
`;

const WhatsappIcon = styled(Whatsapp)`
  color: ${({ theme }) => theme.colors.white};
  height: 80%;
  width: 80%;
`;

const GithubIcon = styled(Github)`
  color: ${({ theme }) => theme.colors.white};
  height: 80%;
  width: 80%;
`;

const InstagramIcon = styled(Instagram)`
  color: ${({ theme }) => theme.colors.white};
  height: 80%;
  width: 80%;
`;

const TwitterIcon = styled(Twitter)`
  color: ${({ theme }) => theme.colors.white};
  height: 80%;
  width: 80%;
`;

const ContactLabel = styled.div`
  background-color: ${({ theme }) => theme.colors.quarternary};
  border-radius: 0 10px 10px 0;
  box-shadow: -12px 10px 31px -15px #0A192F;
  cursor: pointer;
  height: 120px;
  margin-bottom: 25px;
  width: 25px;
  transition: all .4s ease;
  
  @media screen and (min-width: ${breakpoints.xmedium}) {
    height: 150px;
    margin-bottom: 50px;
    width: 30px;
  }
`;

const LabelArea = styled.div`
  align-items: center;
  display: flex;
  font-family: ${({ theme }) => theme.fonts.mono};
  height: 25px;
  justify-content: center;
  transform: translateX(25px) rotate(90deg);
  transform-origin: top left;
  width: 120px;
  
  @media screen and (min-width: ${breakpoints.xmedium}) {
    height: 30px;
    transform: translateX(30px) rotate(90deg);
    width: 150px;
  }
`;

export {
  ModalContainer,
  ContactArea,
  SocialButton,
  LinkedinIcon,
  WhatsappIcon,
  InstagramIcon,
  GithubIcon,
  TwitterIcon,
  ContactLabel,
  LabelArea,
};
