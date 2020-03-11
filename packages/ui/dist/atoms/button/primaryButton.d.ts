import * as React from "react";
export declare type Props = {
    title: string;
    type: "normal" | "pressed" | "disabled";
    colorVariation: "grey" | "blue";
};
export declare const PrimaryButton: React.FC<Props>;
