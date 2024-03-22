import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Option, Picklist } from 'react-rainbow-components';
import HorizontalCentered from '../layout/HorizontalCentered';
import { sportList } from '../../common/lang';
import getSportIcon from '../../utils/Sport';
import { color } from '../../common/layout';
import { MANAGE_CONFIG_LIST } from "../../api/graphql/mutationConfig";
import { useMutation } from "@apollo/client";
import LockIcon from '@mui/icons-material/Lock';

export default function MenuSport({ handleSportTemplate, onlyDefault}) {

  const [eventSport, setEventSport] = useState();
  const [eventTemplate, setEventTemplate] = useState();
  const [templateListFilter, setTemplateListFilter] = useState([]);
  const [listConfig] = useMutation(MANAGE_CONFIG_LIST)

  const containerSportTemplateStyles = {
    width: 300,
    textAlign: "center",
    textAlignLast: 'center',
    padding: 0,
    margin:0
  };

  useEffect(() => {
    if(eventTemplate) {
      handleSportTemplate(eventTemplate, eventSport)
    }
  }, [eventTemplate]);


  useEffect(() => {
    if(eventSport) {
        listConfig({
          variables: {
              "input": {
                "action": "GetServiceKeyList",
                "filter":  JSON.stringify({"sport":[eventSport.label]}) 
            }
          },
        })
        .then((response) =>{
          var jsonResponse = JSON.parse(response.data.manageServiceKeyList.response)
          if (jsonResponse.statusCode == "200"){
            setEventTemplate()
            var tmp = getTemplateList(jsonResponse.body)
            setTemplateListFilter(tmp)
          }
          })
        .catch((error) => console.log(error));
    }
  }, [eventSport]);


  function getTemplateList(templates) {
    const templateList = []
    if(templates) {
      templates.map(el=> {
        if(onlyDefault) {
          if(el.isDefault == true) {
            templateList.push({ value: el.key, label: el.key, isDefault:  el.isDefault, list: el.list, sport: el.sport})
          }
        } else {
          templateList.push({ value: el.key, label: el.key, isDefault:  el.isDefault, list: el.list, sport: el.sport})
        }
        /*if(el.isDefault == true) {
          setEventTemplate({label: el.key, name:undefined, value: el.key, icon: <LockIcon sx={{ color: color.blue, maxWidth:'1.3rem', maxHeight:'1.3rem' }} />  })
        }*/
      })
    }
    return templateList.sort(function (a, b) {
      if (a.isDefault < b.isDefault) {
        return 1;
      }
      if (a.isDefault > b.isDefault) {
        return -1;
      }
      return 0;
    });
  }
  
  return <HorizontalCentered spacing={5}>
    <div>                   
      <Picklist
          label="Sport"
          placeholder="Soccer"
          required
          onChange={value => setEventSport(value)}
          value={eventSport}
          options={sportList}
          style={containerSportTemplateStyles}
          className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
      >
          {sportList.map(sport => {
              return <Option key={sport.value} name={sport.value} label={sport.value} icon={getSportIcon(sport.value, { color: color.blue })} />
          })}
      </Picklist>
    </div>

    <div>
      <Picklist
          label="Template"
          placeholder="Template"
          required
          onChange={value => setEventTemplate(value)}
          value={eventTemplate}
          options={templateListFilter}
          style={containerSportTemplateStyles}
          className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
          disabled={eventSport ? false : true}
      >
          {templateListFilter.map(template => (
           <Option key={template.value} name={template.value} label={template.value} icon={template.isDefault == true? <LockIcon sx={{ color: color.blue, maxWidth:'1.3rem', maxHeight:'1.3rem' }}/>: null}/>
           ))}
      </Picklist>
      </div>
  </HorizontalCentered>
}
