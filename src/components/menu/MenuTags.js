import React from 'react';
import {  Option, Picklist } from 'react-rainbow-components';
import { useEffect } from 'react';
import { useState } from 'react';
import HorizontalCentered from '../layout/HorizontalCentered';
import { encoderLang } from '../../common/lang';

export default function MenuTags({ data, handleSelectedTag, required, style, disable }) {

  const [tag, setTag] = useState(null);

  /*useEffect(() => {
    if (tag) {
      handleSelectedTag(tag)
    }*
  }, [tag])*/

  function updateTag(value){
    data.map((el)=>{
      if (value.name == el.Name){
        setTag(value)
        handleSelectedTag(el)
       
      }
    })
   
  }

  return <HorizontalCentered>
    <Picklist
          label={encoderLang.sidebar.tag}
          placeholder={encoderLang.sidebar.tag}
          required={required}
          onChange={updateTag}
          value={tag}
          options={data}
          style={style}
          className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
          disabled={disable}
        >
        {data.map(el => (
            <Option key={el.Label} name={el.Name} label={el.Name}/>
        ))}
    </Picklist>
    </HorizontalCentered>

}
