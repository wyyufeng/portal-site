import { css } from "emotion";

export const portalClassName = 'portal-layer'

export const CONTENT_CLASS_NAMES_BASE = css`
  display: flex;
  justify-content: center;
  outline: none;
  margin: 1.75rem auto;
  &.scale {
    transform: scale(0.5);
  }
  &.slideDown {
    transform: translate3d(0, -25%, 0);
    opacity: 0.2;
  }
  &.portal-layer-content-open {
  }
  &.portal-layer-content-close {
  }
  &.portal-layer-content-open.scale {
    transform: scale(1);
    transition: all 250ms ease-out;
  }
  &.portal-layer-content-close.scale {
    transform: scale(0.4);
    transition: all 150ms ease-out;
  }
  &.portal-layer-content-open.slideDown {
    transform: translate3d(0, 0, 0);
    opacity: 1;
    transition: all 250ms ease-out;
  }
  &.portal-layer-content-close.slideDown {
    transform: translate3d(0, -25%, 0);
    opacity: 0.3;
    transition: all 150ms ease-out;
  }
`;
export const CONTENT_CLASS_NAMES = {
  base: CONTENT_CLASS_NAMES_BASE,
  afterOpen: 'portal-layer-content-open',
  beforeClose: 'portal-layer-content-close'
};
export const MASK_CLASS_NAMES_BASE = css`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
  pointer-events: auto;
  opacity: 0;
  z-index: 9;
  transition: all 350ms linear;
  &.portal-layer-mask-open {
    opacity: 1;
  }
  &.portal-layer-mask-close {
    opacity: 0;
  }
`;
export const MASK_CLASS_NAMES = {
  base: MASK_CLASS_NAMES_BASE,
  afterOpen: 'portal-layer-mask-open',
  beforeClose: 'portal-layer-mask-close'
};


export const layer_confirm = css`
  width: 360px;
  box-sizing:border-box;
  padding:25px 25px 10px;
  background-color: #fff;
  border-radius: 4px;
  position: relative;
  & > header {
    margin:0;
    padding:0;
    background-color: #fff;
    color: rgba(0,0,0,.85);
    font-size: 16px;
    font-weight:bold;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  &>.layer-confirm-close {
    height: 20px;
    width: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    opacity: .6;
    text-align: center;
    font-size: 27px ;
    line-height: 14px;
    z-index: 1;
    &:hover {
      opacity: 1;
    }
  }
  &>.layer-confirm-body {
      box-sizing: border-box;
      line-height: 1.5715;
      color: rgba(0,0,0,.85);
      font-size: 14px;
      margin-bottom: 15px;
      height: auto;
  }
  &>.layer-confirm-actions {
      text-align:right;
      color:rgba(0,0,0,.85);

      button+button {
        margin-bottom: 0;
        margin-left: 8px;
      }
  }
`
