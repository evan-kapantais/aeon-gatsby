import React from "react";
import styled from "styled-components";

const Button = styled.a`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
  border-radius: 3px;
  cursor: pointer;
  line-height: 0;
  transition: box-shadow 200ms ease;

  > img {
    width: 24px;
  }
`;

const SocialButton = ({ children, target }) => {
  return <Button href={target}>{children}</Button>;
};

export const FacebookButton = () => {
  return (
    <SocialButton target='https://www.facebook.com/Lineage-2-AEON-107537404458544'>
      <img
        src={require("../images/social/facebook-blue.png")}
        alt='Facebook Button'
      />
    </SocialButton>
  );
};

export const DiscordButton = () => {
  return (
    <SocialButton target='https://discordapp.com/invite/pUUwSB'>
      <img
        src={require("../images/social/discord-small-color.png")}
        alt='Discord Button'
      />
    </SocialButton>
  );
};

export default SocialButton;
