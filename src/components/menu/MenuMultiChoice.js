import React, { useState } from 'react';
import { useEffect } from 'react';
import { MultiSelect, Option } from 'react-rainbow-components';
import VerticalCentered from '../layout/VerticalCentered';

export default function MenuMultiChoice({ title, rows, handleClick, handleSelect, initialValue, required, withLabel, style, maxChildrenValue, disabled, row }) {

  const [value, setValue] = useState([]);
  const [maxChildren, setMaxChildren] = useState(maxChildrenValue);
  const [listValue, setListValue] = useState([]);

  useEffect(() => {
    const list = []
    value.map(v => list.push({row: row?row:undefined, name: v.name, label: v.label, value: Number(maxChildren) == 0 ? 0 :  Number(maxChildren)+Number(1)}) )
    handleSelect(list, row, false)
    setListValue(list)
    setMaxChildren(Number(maxChildrenValue) == 0 ? 0 : Number(maxChildrenValue)+1)
  }, [value]);

  useEffect(() => {
    if(initialValue) {
      setValue(initialValue)
    }
  }, [initialValue]);


  function clicked(elementClicked){
    setValue(elementClicked)
    handleSelect(listValue, row, true, elementClicked)
  }


  
  return <>
  <div>
  <VerticalCentered>
      {!withLabel && <p style={{ display: 'inline-flex' }}>
        {required && <p style={{ color: 'red', marginInlineEnd: '5px' }}>* </p>}
        {title}
        </p>
      }
    <MultiSelect
      placeholder={title}
      style={{width:'100%',...style}}
      
      className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
      value={value}
      //onChange={setValue}
      onChange={clicked}
      enableSearch
      showCheckbox
      variant="chip"
      disabled={disabled}
    >
      {rows.map((row, index)=> (
          <Option key={index} name={row.value} label={row.value} /> 
      ))}
      
    </MultiSelect>

  </VerticalCentered>
  </div>
</>

}
