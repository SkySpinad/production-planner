import { lucidStatus, otherStatus, vcrStatus } from "../common/layout"
import { checkFieldIsempty } from "../utils/utils"

export function createLocationObject(description, feedId, type, source, ipRed, portRed, court, element) {
  const listCourt = []
      const objPresentation = {
        "id": court.eventGroupId,
        "eventId": court.eventGroupId,
        "client": "Sky Sports",
        "vision": "1",
        "description": description,
        "createdBy": "ems",
        "presentations": [
            {
                "transport": {
                    "type": type,
                    "source": source,
                    "params": {
                        "ipRed": ipRed,
                        "portRed": portRed
                    }
                }
            }
        ]
      }
      const objUpsertCourt = {
        "lucidEventId": checkFieldIsempty(element.lucidId) ? null : JSON.parse(element.lucidId).id,
        "country":court.country,
        "courtId":court.courtId,
        "courtName":court.courtName,
        "eventGroupId":court.eventGroupId,
        "feedId":feedId,
        "presentation": objPresentation,
      }    
      listCourt.push(objUpsertCourt)
    return listCourt
} 

export function updateLocationObject(presentations, court) {
  const list = []
  const objUpsertCourt = {
    "country":court.country,
    "courtId":court.courtId,
    "courtName":court.courtName,
    "eventGroupId":court.eventGroupId,
    "feedId":court.feedId,
    "presentation": checkFieldIsempty(presentations) ? null : {
      "id": court.eventGroupId,
      "eventId": court.eventGroupId,
      "client": "Sky Sports",
      "vision": "1",
      "description": presentations.description,
      "createdBy": "ems",
      "presentations": [
          {
              "transport": {
                  "type": presentations.type,
                  "source": presentations.source,
                  "params": {
                      "ipRed": presentations.ipRed,
                      "portRed": presentations.portRed
                  }
              }
          }
      ]
    }
  }
  list.push(objUpsertCourt)
  return list
} 

export function getStatusColor(statusLabel, statusType){
  if(statusType=="lucidStatus") {
      return lucidStatus[statusLabel]
  } 
  if(statusType=="vcrStatus") {
      return vcrStatus[statusLabel]
  } 
  if(statusType=="otherStatus") {
      return otherStatus[statusLabel]
  } 
}

