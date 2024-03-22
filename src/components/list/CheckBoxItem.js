import React from "react";
import { ListItemAvatar, Checkbox } from "@mui/material";
import { color } from "../../common/layout";
import { useEffect } from "react";


export default function CheckBoxItem({ checkBoxId, handleChange, icon, checkedIcon, data, isChecked, disabled, defaultValue }) {

    const [checked, setChecked] = React.useState(isChecked);
    const [listCk, setListCk] = React.useState([]);

    const changeChecked = value => {
      setChecked(!checked);
      const obj = {
            checked,
            value,
            listCk
        }
        handleChange(obj);
    }

      useEffect(() => {
        setChecked(isChecked)
        setListCk(isChecked)
      }, [isChecked]);

      useEffect(() => {
        setListCk(isChecked)
      }, []);


    return (
        <ListItemAvatar>
            <Checkbox
             inputProps={{ 'aria-label': 'controlled' }}
                type="checkbox"
                id={checkBoxId}
                onChange={() => changeChecked(data)}
                checked={checked}
                sx={{ alignItems: "center",color: color.blue, '&.Mui-checked':{color: defaultValue ? color.baseL4 : color.blue}}}
                icon={icon}
                checkedIcon={checkedIcon}
                disabled={disabled}
            />
        </ListItemAvatar>
        );
}

