import { css, keyframes } from 'emotion';
const button_base = css`
outline:none;
border:none;
background-color:transparent;
cursor: pointer;
`;

const list_base = css`
  list-style:none;
  margin:0;
  padding:0;
`

const pulse = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
 `
const skeleton_animation = css`
  background: linear-gradient(90deg,#f2f2f2 25%,#e6e6e6 37%,#f2f2f2 63%);
  background-size: 400% 100%;
   animation:${pulse}  1.6s ease infinite;
`;



export {
  button_base, skeleton_animation, list_base
}
