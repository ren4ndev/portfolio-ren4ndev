import React, { useState } from 'react';
import Typography from '../Typography';
import {
  ModalContainer,
  ContactArea,
  SocialButton,
  LinkedinIcon,
  WhatsappIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
  ContactLabel,
  LabelArea,
} from './styles';

function ContactModal() {
  const [show, setShow] = useState(false);
  return (
    <ModalContainer show={show}>
      <ContactArea>
        <SocialButton href="https://www.linkedin.com/in/renancoliveira/" target="_blank">
          <LinkedinIcon />
        </SocialButton>
        <SocialButton href="https://wa.me/5553991817145" target="_blank">
          <WhatsappIcon />
        </SocialButton>
        <SocialButton href="https://github.com/ren4ndev" target="_blank">
          <GithubIcon />
        </SocialButton>
        <SocialButton href="https://instagram.com/ren4ndev?igshid=ZDdkNTZiNTM=" target="_blank">
          <InstagramIcon />
        </SocialButton>
        <SocialButton href="https://twitter.com/Ren4nDev?t=0fh-G_iambBpcNJp7mZObQ&s=09" target="_blank">
          <TwitterIcon />
        </SocialButton>
      </ContactArea>
      <ContactLabel onClick={() => setShow(!show)}>
        <LabelArea>
          <Typography type="body-02" color="white">Social Media</Typography>
        </LabelArea>
      </ContactLabel>
    </ModalContainer>
  );
}

export default ContactModal;
