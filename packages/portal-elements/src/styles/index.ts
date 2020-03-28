import { css, keyframes } from '@emotion/core';
const button_base = css`
outline:none;
border:none;
background-color:transparent;
cursor: pointer;
`;



const skeleton_animation = css`
 background-image: linear-gradient( 110deg,  #ececed 73%, #e9e9ea 75%,  #ececed 77%,  #ececed 78%, #e9e9ea 84%, #e9e9ea 88%,  #ececed 94%,  #ececed 100% );
    background-size: 200% 100%;
    background-position: 0 center;
   animation:${
  keyframes`
  0% { background-position-x: 0; }
  40%, 100% { background-position-x: -200%; }
       `
  } 2s ease infinite
`;

export {
  button_base, skeleton_animation
}
