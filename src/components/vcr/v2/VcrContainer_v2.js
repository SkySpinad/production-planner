import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import InnerAppBar from "../../innerbar/InnerAppBar";
import { vcrLang } from "../../../common/lang";
import { layout, styleAvatar } from "../../../common/layout";
import { DateToStringFormat, downloadVcrItems } from "../../../utils/utils";
import { Pagination } from "react-rainbow-components";
import CustomAlert from "../../alert/CustomAlert";
import VerticalCentered from "../../layout/VerticalCentered";
import { ACTION_PERMISSIONS, isPermissionDenied } from "../../../common/user";
import getSportIcon from "../../../utils/Sport";
import ReadOnlyBanner from "../../banner/ReadOnlyBanner";
import VcrToolBarMenu from "../VcrToolBarMenu";
import VcrStartHeader from "../VcrStartHeader";
import VcrItem_v2 from "./VcrItem_v2";
import VcrHeader_v2 from "./VcrHeader_v2";
import Loader from '../../Loader/Loader';
import { useSelector, useDispatch } from 'react-redux';

export default function VcrContainer_v2() {
  
  const [open, setOpen] = useState(false);
  const [listCompetition, setListCompetition] = useState([]);
  const [filterList, setfilterList] = useState([]);
  const [value, setValue] = useState("");
  const [load, setLoad] = useState(true);
  const [activePage, setActivePage] = useState(1);
  const [isSearching, setIsSearching] = useState(false);
  const [expandedEvent, setExpandedEvent] = useState(null);

  const competitionList = useSelector((state) => state.competitions.data);

  const dispatch = useDispatch();

  useEffect(() => {
    if (competitionList) {
      setListCompetition(competitionList)
    }
  }, [competitionList]);

  
  useEffect(() => {
    setfilterList(listCompetition);
    setLoad(false)
  }, [listCompetition]);
  
  useEffect(() => {
    if (value) {
      setfilterList(getVcrFilter(value));
    } else {
      setfilterList(listCompetition);
    }
  }, [value]);

  
  function getVcrFilter(value) {
    return listCompetition.filter((vcr) => 
    vcr.id.toUpperCase().includes(value.toUpperCase()) ||
    vcr.name.toUpperCase().includes(value.toUpperCase()))
  }

  function handleShowDetailsEventItem(id) {
    setExpandedEvent(expandedEvent => expandedEvent === id ? null : id);
  }

  function handleChangePage(event, page) {
    setActivePage(page);
  }

  function handleCsv() {
    downloadVcrItems(filterList, "competitions")
  }

  function setValueSearchBar(valSearch) {
    setValue(valSearch);
  }

  var nElemOnPage = 10;
  var nPages = filterList.length / nElemOnPage < 1 ? 1 : filterList.length / nElemOnPage + 1;
  var sliceStart = (activePage - 1) * nElemOnPage;
  var sliceEnd = (activePage - 1) * nElemOnPage + nElemOnPage;

  return (
    <InnerAppBar
      title={"Production Planner"}
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
            <VcrItem_v2 key={"ev" + index} element={element} showDetailsEventItem={expandedEvent == element.id}>
              <VcrHeader_v2
                  data={element}
                  icon={getSportIcon(element.sport, styleAvatar)}
                  handleShowDetailsEventItem={handleShowDetailsEventItem}
              />
            </VcrItem_v2>
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
