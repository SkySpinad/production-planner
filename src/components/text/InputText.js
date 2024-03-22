import React, { useEffect } from "react"
import { Input } from "react-rainbow-components"
import './InputText.css'

export default function InputText({ title, placeholder, handleChange, disabled, currentValue, required, titleStyle, withLabel }) {

    useEffect(() => {

    }, [placeholder, handleChange, currentValue])
    function extractText(e) {
        handleChange(e.target.value)
    }
    const inputStyles = {
        width: 300,
        padding: '0px'

    };
    if (currentValue == undefined){
        currentValue = ""
    }

    return <>{!withLabel && <p style={{ display: 'inline-flex' }} sx={titleStyle}>
                        {required && <p style={{ color: 'red', marginInlineEnd: '5px' }}>* </p>}
                        {title}
                    </p>
            }
        <Input
            valueAlignment="center"
            label={withLabel?placeholder:''}
            required={required}
            type="text"
            className="rainbow-p-around_medium"
            onChange={extractText}
            value={currentValue}
            style={inputStyles}
            disabled={disabled}
            placeholder={placeholder}
        />
    </>
}