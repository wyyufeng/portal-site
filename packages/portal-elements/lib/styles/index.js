var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { css, keyframes } from '@emotion/core';
var button_base = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\noutline:none;\nborder:none;\nbackground-color:transparent;\ncursor: pointer;\n"], ["\noutline:none;\nborder:none;\nbackground-color:transparent;\ncursor: pointer;\n"])));
var pulse = keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    0% {\n      background-position: 0% 0%;\n    }\n    100% {\n      background-position: -135% 0%;\n    }\n "], ["\n    0% {\n      background-position: 0% 0%;\n    }\n    100% {\n      background-position: -135% 0%;\n    }\n "])));
var skeleton_animation = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\nheight: 100%;\n  width: 100%;\n  background: linear-gradient(-90deg, #F0F0F0 0%, #F8F8F8 50%, #F0F0F0 100%);\n  background-size: 400% 400%;\n   animation:", "  1.2s ease-in-out infinite;\n"], ["\nheight: 100%;\n  width: 100%;\n  background: linear-gradient(-90deg, #F0F0F0 0%, #F8F8F8 50%, #F0F0F0 100%);\n  background-size: 400% 400%;\n   animation:", "  1.2s ease-in-out infinite;\n"])), pulse);
export { button_base, skeleton_animation };
var templateObject_1, templateObject_2, templateObject_3;
