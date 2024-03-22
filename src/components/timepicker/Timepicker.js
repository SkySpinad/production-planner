import * as React from 'react';
import {  Typography } from '@mui/material';
import { DateTimePicker } from 'react-rainbow-components';
import { rainbowTheme } from '../../common/layout';
import { Application } from 'react-rainbow-components';
import VerticalCentered from '../layout/VerticalCentered';
import './picker.css'
export default function TimePicker({ label, dateValue, setDateValue, handleReset, disabled ,minDate,textColor,limited, event}) {
   
    var placeholder = "Change " + label
    var today = new Date()
    var customColor = ""
    //var maxDate = today.setDate(today.getDate() + 20)
    if (dateValue == null && !event){
        dateValue = new Date()
        customColor = "#2a30393d"
    }
    if (dateValue == null && event){
        dateValue = new Date(event.date)
        customColor = "#2a30393d"
    }
    if (minDate){
        minDate = new Date(minDate)
        minDate = minDate.setHours(minDate.getHours() + 5)
        
    }
    return (
        <Application theme={rainbowTheme}>
            <VerticalCentered>
            
                <Typography sx={{color:textColor?textColor:'white',fontSize: "0.875rem"}}>{label}</Typography>
                <DateTimePicker
                 style={{ width: '300px', textAlign: 'center', color:customColor}}
                 value={new Date(dateValue)}
                 onChange={value => setDateValue(new Date(value).toISOString())}
                 valueAlignment='center'
                 placeholder={placeholder}
                 okLabel='Confirm'
                 //error={minDate ? dateValue<minDate?"Stop date < Start Date":"":""}
                 //label={label}
                 hour24
                 /*maxDate={limited?new Date(maxDate):""}*/
                 minDate= {minDate?new Date(minDate):null}
                 disabled={disabled}
                 
                />
                
            </VerticalCentered>

        </Application>
    );
}
