import * as React from 'react';
import { DatePicker } from 'react-rainbow-components';

import { color } from '../../common/layout';
import { Application } from 'react-rainbow-components';
import VerticalCentered from '../layout/VerticalCentered';
const theme = {
    rainbow: {
        palette: {
            brand: color.blue,
            mainBackground: "#fffff",
            success: '#44d7b6',
            error: '#f14336',
            warning: '#f7b500',

        }
    },
};
export default function RangeDatePicker({ label, dateValue, setDateValue }) {
    var placeholder = "Change " + label
    return (
        <Application theme={theme}>
            <VerticalCentered>
            
                {/*<Typography>{label}</Typography>*/}
                <DatePicker
                 style={{ width: '300px', textAlign: 'center' }}
                 value={dateValue}
                 selectionType="range"
                 label={label}
                 onChange={value => setDateValue(value)}
                 valueAlignment='center'
                 placeholder={placeholder}
                 okLabel='Search'
                 
                 
                />
                
            </VerticalCentered>

        </Application>
    );
}
