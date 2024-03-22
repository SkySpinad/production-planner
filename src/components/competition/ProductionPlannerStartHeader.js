import React, { useEffect } from "react";
import InputText from "../text/InputText";
import HorizontalCentered from "../layout/HorizontalCentered";
import { placeholderInputFilter } from "../../common/lang";

export default function ProductionPlannerStartHeader({ handleDrawerOpen, onChangeText, currentText }) {

    useEffect(() => {
    }, [handleDrawerOpen, onChangeText, currentText])

    return <HorizontalCentered spacing={1}>
        <InputText placeholder={placeholderInputFilter} handleChange={onChangeText} currentValue={currentText} />
    </HorizontalCentered>
}