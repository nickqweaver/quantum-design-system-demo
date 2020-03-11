import * as React from "react"
import * as System from "../@quantum-design-system/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerPrimaryButton = props => {
    return <System.PrimaryButton {...props}></System.PrimaryButton>
}

export const PrimaryButton = withHOC(InnerPrimaryButton)

PrimaryButton.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(PrimaryButton, {
    title: {
        title: "Title",
        type: ControlType.String,
        defaultValue: "title",
    },
    type: {
        title: "Type",
        type: ControlType.Enum,
        options: ["normal", "pressed", "disabled"],
        optionTitles: ["normal", "pressed", "disabled"],
    },
    colorVariation: {
        title: "Color variation",
        type: ControlType.Enum,
        options: ["grey", "blue"],
        optionTitles: ["grey", "blue"],
    },
})
