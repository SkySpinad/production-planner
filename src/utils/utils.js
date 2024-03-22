
import { Parser } from '@json2csv/plainjs';
import { global, territoryList } from '../common/lang';
import { log } from 'console';
import { statusColor } from '../common/layout';

export const prebuffer = process.env.PREBUFFER;

export function DateToStringFormat(date) {
    return new Date(date).toLocaleString(global.formatData);
}

export function SubtractMinutesToDate(date, minutes){

    date = date.setMinutes(date.getMinutes() - minutes)
    return new Date(date)
}
export function create_UUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

export function downloadCsv(items, fileTitle) {
    const parser = new Parser();
    var link = document.createElement("a");
    if (link.download !== undefined) {
      var url = URL.createObjectURL(new Blob([parser.parse(items)], { type: "text/csv;charset=utf-8;" }));
      link.setAttribute("href", url);
      link.setAttribute("download", fileTitle + ".csv" || "export.csv");
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }


  export function downloadJson(items, fileTitle){
    var url = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(items));
    var link = document.createElement('a');
    link.setAttribute("href", url);
    link.setAttribute("download", fileTitle + ".json");
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

export function getRandomCountry(){
    var how_many = Math.floor(Math.random()*territoryList.length) +1
    var  i = 0
    log(how_many)
    var country = []
    while (i<how_many){
        var tmp = territoryList[Math.floor(Math.random()*territoryList.length)];
        country.push(tmp)
        i++
    }
    log([...new Set(country)])
    return [...new Set(country)]
}


export function getCountries(){
    var  i = 0
    var country = []
    while (i<territoryList.length){
        country.push(territoryList[i].value)
        i++
    }
    return [...new Set(country)]
}

export function getColorStatusEvent(startDate, endDate) {
       const now =new Date().valueOf();
      if (now > new Date(endDate).valueOf()) {
        return statusColor.blue
      } else if (now >= new Date(startDate).valueOf() && now <= new Date(endDate).valueOf()) {
        return statusColor.green
      } else {
        return statusColor.lightGreen
      }
  }

  export function getColorStatusEventUnconfirmed(status) {
   if (status == "Placeholder") {
     return statusColor.grey
   } else if (status == "Unconfirmed") {
     return statusColor.ligthYellow
   } else {
    return statusColor.grey
   }
}


export function getEcnodersItemsFormatted(filterList) {
  const list = []
  filterList.map(el=> {
    list.push({
      "eventId":el.eventId,
      "scheduledEnd":el.scheduledEnd,
      "scheduledStart":el.scheduledStart,
      "proposition":el.proposition,
      "label":el.label,
      "status":el.status,
      "details":el.details,
      "key":el.key,
      "name":el.name,
      "serviceKey":el.serviceKey,
      "tag Label":el.tags ?JSON.parse(el.tags).Label : "-",
      "tag Name":el.tags ? JSON.parse(el.tags).Name : "-",
    })
  })
  return list
}

export function getEventItemsDateFormatted(filterList) {
  const list = []
  filterList.map(el=> {
    list.push({
      "__typename":el.__typename,
      "key":el.key,
      "created_by":el.created_by,
      "startDateUTC":el.date,
      "startDateLocalTZ":DateToStringFormat(el.date),
      "endDateUTC":el.dateEnd,
      "endDateLocalTZ":DateToStringFormat(el.dateEnd),
      "name":el.name,
      "sport":el.sport,
      "proposition":el.proposition,
    })
  })
  return list
}

export function downloadWorkOrderItems(filterList, title) {
  const list = []
  filterList.map(el=> {
    var eventData = JSON.parse(el.eventData)
    list.push({
      "Event Group Name" :eventData.eventGroupName,
      "Event Region":eventData.eventRegion,
      "Start Date Time":DateToStringFormat(eventData.startDateTime),
      "End Date Time":DateToStringFormat(eventData.endDateTime),
      "Gender":eventData.eventAttributes.gender,
      "Court ID":eventData.eventAttributes.courtId,
      "Court Name":eventData.eventAttributes.courtName,
      "Type":eventData.eventAttributes.type
    })
  })
  return downloadCsv(list, title);
}

export function checkFieldIsempty(e) {
  switch (e) {
    case "":
    case 0:
    case "0":
    case null:
    case "null":
    case false:
    case undefined:
      return true;
    default:
      return false;
  }
}


