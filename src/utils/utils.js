
import { Parser } from '@json2csv/plainjs';
import { global } from '../common/lang';
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


