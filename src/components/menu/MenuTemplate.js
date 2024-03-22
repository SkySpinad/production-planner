import React, { useState } from 'react';
import { useEffect } from 'react';
import HorizontalCentered from '../layout/HorizontalCentered';
import InputText from '../text/InputText';

export default function MenuTemplate({ handleCreateRowConfig, children }) {

  const [env, setEnv] = useState();
  const [label, setLabel] = useState();
  const [name, setName] = useState();
  const [serviceKey, setserviceKey] = useState();

  useEffect(() => {
      var obj = { "Env":env, "Label":label, "Name":name, "ServiceKey":serviceKey, children}
      handleCreateRowConfig(obj)
  }, [env, label, name, serviceKey]);

 
  return <div style={{padding: '10px'}}>
  <HorizontalCentered spacing={0}>
    <InputText placeholder={env} title={'Environment'} handleChange={setEnv} currentValue={env} />
    <InputText placeholder={label} title={'Label'}handleChange={setLabel} currentValue={label} />
    <InputText placeholder={name} title={'Name'} handleChange={setName} currentValue={name} />
    <InputText placeholder={serviceKey} title={'Service Key'} handleChange={setserviceKey} currentValue={serviceKey} />
  </HorizontalCentered>
</div>
}
