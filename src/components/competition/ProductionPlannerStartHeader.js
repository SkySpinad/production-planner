import React from "react";
import InputText from "../text/InputText";
import HorizontalCentered from "../layout/HorizontalCentered";
import { placeholderInputFilter } from "../../common/lang";
import { useDispatch } from "react-redux";
import { filterByText } from "../../store/slices/competitionSlice";
import { useState } from "react";

export default function ProductionPlannerStartHeader() {

    const [currentText, setCurrentText] = useState('')
    const dispatch = useDispatch();

    function onChangeText(event) {
        setCurrentText(event)
        dispatch(filterByText({filterData: event}))
    }

    return <HorizontalCentered spacing={1}>
        <InputText placeholder={placeholderInputFilter} handleChange={onChangeText} currentValue={currentText} />
    </HorizontalCentered>
}