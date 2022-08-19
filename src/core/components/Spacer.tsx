import React from "react"
import { View } from "./Themed"

interface SpacerProps {
    height: number;
}

const Spacer = ({height}: SpacerProps) => {
    return (
       <View style={{height: height}} />
    )
}

export default Spacer;