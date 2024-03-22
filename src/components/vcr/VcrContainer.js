import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import InnerAppBar from "../innerbar/InnerAppBar";
import { vcrLang } from "../../common/lang";
import { layout, styleAvatar } from "../../common/layout";
import { DateToStringFormat, downloadVcrItems } from "../../utils/utils";
import { Pagination } from "react-rainbow-components";
import CustomAlert from "../alert/CustomAlert";
import VerticalCentered from "../layout/VerticalCentered";
import { useSnackbar } from "notistack";
import { ACTION_PERMISSIONS, isPermissionDenied } from "../../common/user";
import getSportIcon from "../../utils/Sport";
import { Loader } from "@giobar93/production_ui_library";
import ReadOnlyBanner from "../banner/ReadOnlyBanner";
import VcrListHook from "../hooks/VcrListHook";
import VcrItem from "./VcrItem";
import VcrHeader from "./VcrHeader";
import VcrToolBarMenu from "./VcrToolBarMenu";
import VcrStartHeader from "./VcrStartHeader";
import { FILL_WORKORDER } from "../../api/graphql/mutationWorkOrder";
import { useMutation } from "@apollo/client";
import { getNewCompetitionVcrList } from "../../services/serviceDB";

export default function VcrContainer() {
  const { enqueueSnackbar } = useSnackbar();
  const [vcrList] = VcrListHook();
  const [listVcr, setListVcr] = useState([]);
  const [value, setValue] = useState("");
  const [load, setLoad] = useState(true);
  const [filterList, setFilterList] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [isSearching, setIsSearching] = useState(false);
  const [expandedEvent, setExpandedEvent] = useState(null);
  const [upsertCompetition] = useMutation(FILL_WORKORDER)

  useEffect(() => {
    if (vcrList) {
      var tmp = [];
      vcrList.map((el) => {
        tmp.push({ ...el });
      });
      setListVcr((old) => {
        return [...old, ...tmp];
      });
    }
  }, [vcrList]);

  useEffect(() => {
    setFilterList(listVcr);
    setLoad(false)
  }, [listVcr]);

  useEffect(() => {
    if (value) {
      setFilterList(getVcrFilter(value));
    } else {
      setFilterList(listVcr);
    }
  }, [value]);

  function getVcrFilter(value) {
    return listVcr.filter((vcr) => 
      vcr.competitionName.toUpperCase().includes(value.toUpperCase()) ||
      DateToStringFormat(vcr.endDateTime).toUpperCase().includes(value.toUpperCase()) ||
      DateToStringFormat(vcr.startDateTime).toUpperCase().includes(value.toUpperCase())
    )
  }

  function handleShowDetailsEventItem(id) {
    setExpandedEvent(expandedEvent => expandedEvent === id ? null : id);
  }

  function sortByDate(a, b) {
    if (b.date == undefined) {
      return -1
    }
    if (a.date == undefined) {
      return 1
    }
    return parseInt(new Date(a.date).getTime()) >
      parseInt(new Date(b.date).getTime())
      ? 1
      : -1;
  }


  const handleUpdateCompetition = (competition, currentLucid) => {
    const newCompetitionObj = {
      "eventGroupId": competition.eventGroupId,
      "competitionName": competition.competitionName,
      "endDateTime": competition.endDateTime,
      "eventGroupName": competition.eventGroupName,
      "eventRegion": competition.eventRegion,
      "extBookingId": competition.extBookingId,
      "gender": competition.gender,
      "matchType": competition.matchType,
      "startDateTime": competition.startDateTime,
      "type": competition.type,
      "lucidId": currentLucid
    }
   callCompetitionMutation(newCompetitionObj,  vcrLang.typeAction.editCompetition, "Edit Competition")
  };


  function callCompetitionMutation(newCompetitionObj, action, message){
        
    upsertCompetition({
     variables: {
       input: {
         "action": action,
         "input": JSON.stringify(newCompetitionObj)
       }
     },
   })
   .then((response) =>{
     console.log('response: ' , response);
     if(response.data) {
       var jsonResponse = JSON.parse(response.data.fillWorkorder.response)
       if(jsonResponse.statusCode != 200) {
        setListVcr(listVcr)
        enqueueSnackbar(JSON.stringify(jsonResponse.body), {autoHideDuration: 5000, variant: "error" });
       } else {
        setListVcr(getNewCompetitionVcrList(listVcr, newCompetitionObj))
        enqueueSnackbar(message, { autoHideDuration: 2500, variant: 'success' })  
       }
     } else {
       enqueueSnackbar(response.data, { autoHideDuration: 5000, variant: "error" });
     }
   })
   .catch((error) => {
     console.log("error: ", error)
     enqueueSnackbar(error, { autoHideDuration: 5000, variant: "error" });
   });

  }

  function handleChangePage(event, page) {
    setActivePage(page);
  }

  function handleCsv() {
    downloadVcrItems(filterList, "Vcr")
  }

  function setValueSearchBar(valSearch) {
    setValue(valSearch);
  }

  var nElemOnPage = 10;
  var nPages = filterList.length / nElemOnPage < 1 ? 1 : filterList.length / nElemOnPage + 1;
  var sliceStart = (activePage - 1) * nElemOnPage;
  var sliceEnd = (activePage - 1) * nElemOnPage + nElemOnPage;
  filterList.sort((a, b) => sortByDate(a, b));

  return (
    <InnerAppBar
      title={vcrLang.appbar.titleVcr}
      headerStartComponent={
        <VcrStartHeader
          currentText={value}
          onChangeText={setValueSearchBar}
        />
      }
      sidebar={<></>}
      menu={<VcrToolBarMenu handleDownloadCsv={handleCsv} />
      }
    >
      {
        isPermissionDenied(ACTION_PERMISSIONS.BasicDialogActionExecutor) && <ReadOnlyBanner />
      }
      <Pagination
        style={{ paddingBlockEnd: "10px" }}
        className="rainbow-m_auto"
        pages={parseInt(nPages)}
        variant="shaded"
        activePage={activePage}
        onChange={handleChangePage}
      />
      <>{load && <Loader></Loader>}</>
      <Box flex={2} p={2} style={layout.boxRightContainer}>
        {(filterList.length > 0 &&
          filterList.slice(sliceStart, sliceEnd).map((element, index) => (
            <VcrItem key={"ev" + index} element={element} showDetailsEventItem={expandedEvent == element.eventGroupId}>
              <VcrHeader
                  data={element}
                  icon={getSportIcon(element.sport, styleAvatar)}
                  handleUpdateCompetition={handleUpdateCompetition}
                  handleShowDetailsEventItem={handleShowDetailsEventItem}
              />
            </VcrItem>
          ))
        ) || (
            <VerticalCentered>
              {filterList.length == 0 && (
                <>
                  <CustomAlert
                    color="warning"
                    text={vcrLang.alert.noVCRFilter}
                  />
                  {isSearching && (
                    <CustomAlert color="info" text={vcrLang.alert.noRefresh} />
                  )}
                </>
              )}
            </VerticalCentered>
          )}
      </Box>
    </InnerAppBar>
  );
}
