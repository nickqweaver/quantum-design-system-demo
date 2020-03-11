import { css } from "emotion";

export default {
  primaryButton: (type: string, colorVariation: string) => css`
    padding: 12px 40px;
    border: none;
    background: ${colorVariation === "grey"
      ? (type === "normal" && "rgb(67, 66, 93)") ||
        (type === "pressed" && "rgb(47, 46, 80)") ||
        (type === "disabled" && "rgb(131, 130, 150)")
      : (type === "normal" && "rgb(59, 134, 255)") ||
        (type === "pressed" && "rgb(16, 98, 229)") ||
        (type === "disabled" && "rgb(121, 172, 255)")};
    color: white;
    font-size: 14px;
    border-radius: 4px;
    min-width: 134px;
    outline: none;
    cursor: pointer;
  `
};
