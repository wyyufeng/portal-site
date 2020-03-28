var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { css, keyframes } from '@emotion/core';
var button_base = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\noutline:none;\nborder:none;\nbackground-color:transparent;\ncursor: pointer;\n"], ["\noutline:none;\nborder:none;\nbackground-color:transparent;\ncursor: pointer;\n"])));
var skeleton_animation = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n background-image: linear-gradient( 110deg,  #ececed 73%, #e9e9ea 75%,  #ececed 77%,  #ececed 78%, #e9e9ea 84%, #e9e9ea 88%,  #ececed 94%,  #ececed 100% );\n    background-size: 200% 100%;\n    background-position: 0 center;\n   animation:", " 2s ease infinite\n"], ["\n background-image: linear-gradient( 110deg,  #ececed 73%, #e9e9ea 75%,  #ececed 77%,  #ececed 78%, #e9e9ea 84%, #e9e9ea 88%,  #ececed 94%,  #ececed 100% );\n    background-size: 200% 100%;\n    background-position: 0 center;\n   animation:",
    " 2s ease infinite\n"])), keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  0% { background-position-x: 0; }\n  40%, 100% { background-position-x: -200%; }\n       "], ["\n  0% { background-position-x: 0; }\n  40%, 100% { background-position-x: -200%; }\n       "]))));
export { button_base, skeleton_animation };
var templateObject_1, templateObject_2, templateObject_3;
