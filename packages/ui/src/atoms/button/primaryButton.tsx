import * as React from "react";
import styles from "./styles";

export type Props = {
  title: string;
  type: "normal" | "pressed" | "disabled";
  colorVariation: "grey" | "blue";
};
export const PrimaryButton: React.FC<Props> = ({
  title,
  type,
  colorVariation
}) => {
  return (
    <button className={styles.primaryButton(type, colorVariation)}>
      {title}
    </button>
  );
};
