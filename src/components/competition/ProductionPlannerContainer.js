import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import InnerAppBar from "../innerbar/InnerAppBar";
import { productionPlannerLang } from "../../common/lang";
import { layout, styleAvatar } from "../../common/layout";
import { downloadCsv } from "../../utils/utils";
import { Pagination } from "react-rainbow-components";
import CustomAlert from "../alert/CustomAlert";
import VerticalCentered from "../layout/VerticalCentered";
import { ACTION_PERMISSIONS, isPermissionDenied } from "../../common/user";
import getSportIcon from "../../utils/Sport";
import ReadOnlyBanner from "../banner/ReadOnlyBanner";
import Loader from '../Loader/Loader';
import { useSelector } from 'react-redux';
import CompetitionItem from "./CompetitionItem";
import CompetitionHeader from "./CompetitionHeader";
import ProductionPlannerStartHeader from "./ProductionPlannerStartHeader";
import ProductionPlannerToolBarMenu from "./ProductionPlannerToolBarMenu";
import CompetitionsListHook from "../../hooks/CompetitionsListHook";

export default function ProductionPlannerContainer() {

  const [filterList, setfilterList] = useState([]);
  const [load, setLoad] = useState(true);
  const [activePage, setActivePage] = useState(1);
  const [isSearching, setIsSearching] = useState(false);
  const [expandedEvent, setExpandedEvent] = useState(null);
  const competitionList = useSelector((state) => state.competitions.filterData);
  CompetitionsListHook()

  useEffect(() => {
    if (competitionList) {
      setfilterList(competitionList)
      setLoad(false)
    }
  }, [competitionList]);

  function handleShowDetailsEventItem(id) {
    setExpandedEvent(expandedEvent => expandedEvent === id ? null : id);
  }

  function handleChangePage(event, page) {
    setActivePage(page);
  }

  function handleCsv() {
    downloadCsv(filterList, "competitions")
  }


  var nElemOnPage = 10;
  var nPages = filterList.length / nElemOnPage < 1 ? 1 : filterList.length / nElemOnPage + 1;
  var sliceStart = (activePage - 1) * nElemOnPage;
  var sliceEnd = (activePage - 1) * nElemOnPage + nElemOnPage;

  return (
    <InnerAppBar
      title={"Production Planner"}
      headerStartComponent={
        <ProductionPlannerStartHeader />
      }
      sidebar={<></>}
      menu={<ProductionPlannerToolBarMenu handleDownloadCsv={handleCsv} />
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
            <CompetitionItem key={"ev" + index} element={element} showDetailsEventItem={expandedEvent == element.id}>
              <CompetitionHeader
                  data={element}
                  icon={getSportIcon(element.sport, styleAvatar)}
                  handleShowDetailsEventItem={handleShowDetailsEventItem}
              />
            </CompetitionItem>
          ))
        ) || (
            <VerticalCentered>
              {filterList.length == 0 && (
                <>
                  <CustomAlert
                    color="warning"
                    text={productionPlannerLang.alert.noCompetitionFilter}
                  />
                  {isSearching && (
                    <CustomAlert color="info" text={productionPlannerLang.alert.noRefresh} />
                  )}
                </>
              )}
            </VerticalCentered>
          )}
      </Box>
    </InnerAppBar>
  );
}
