import styled from 'styled-components';
import {
  Linkedin,
  Whatsapp,
  Github,
  Instagram,
  Twitter,
} from '@styled-icons/bootstrap';

const ModalContainer = styled.div`
  align-items: flex-end;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  width: 120px;
  height: 350px;
  transition: all .4s ease;
  transform: ${({ show }) => {
    if (!show) return 'translateX(-90px)';
    return null;
  }
};
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
  width: 90px;
  transition: all .4s ease;
`;

const SocialButton = styled.a`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 40px;
  margin: 10px 0;
  width: 40px;
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
  height: 150px;
  margin-bottom: 50px;
  width: 30px;
  transition: all .4s ease;
`;

const LabelArea = styled.div`
  align-items: center;
  display: flex;
  font-family: ${({ theme }) => theme.fonts.mono};
  height: 30px;
  justify-content: center;
  transform: translateX(30px) rotate(90deg);
  transform-origin: top left;
  width: 150px;
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
