var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { css, keyframes } from '@emotion/core';
var button_base = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\noutline:none;\nborder:none;\nbackground-color:transparent;\ncursor: pointer;\n"], ["\noutline:none;\nborder:none;\nbackground-color:transparent;\ncursor: pointer;\n"])));
var list_base = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  list-style:none;\n  margin:0;\n  padding:0;\n"], ["\n  list-style:none;\n  margin:0;\n  padding:0;\n"])));
var pulse = keyframes(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  0% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0 50%;\n  }\n "], ["\n  0% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0 50%;\n  }\n "])));
var skeleton_animation = css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background: linear-gradient(90deg,#f2f2f2 25%,#e6e6e6 37%,#f2f2f2 63%);\n  background-size: 400% 100%;\n   animation:", "  1.6s ease infinite;\n"], ["\n  background: linear-gradient(90deg,#f2f2f2 25%,#e6e6e6 37%,#f2f2f2 63%);\n  background-size: 400% 100%;\n   animation:", "  1.6s ease infinite;\n"])), pulse);
export { button_base, skeleton_animation, list_base };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
