import { sportLabel } from "../common/lang";
import CustomIcon from "../components/icons/CustomIcon";
import SportsMotorsportsOutlinedIcon from "@mui/icons-material/SportsMotorsportsOutlined";
import SportsFootballOutlinedIcon from '@mui/icons-material/SportsFootballOutlined';
import SportsSoccerOutlinedIcon from "@mui/icons-material/SportsSoccerOutlined";
import SportsTennisIcon from '@mui/icons-material/SportsTennisOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import GolfCourseIcon from '@mui/icons-material/GolfCourse'; 
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import React from "react";
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
export default function getSportIcon(sport,styleAvatar) {
    switch (sport) {
      /*case sportLabel.football:
        return (
          <CustomIcon tooltipText={sportLabel.football} customStyle={styleAvatar}>
            <SportsFootballOutlinedIcon />
          </CustomIcon>
        );*/
      case sportLabel.soccer:
        return (
          <CustomIcon tooltipText={sportLabel.soccer} customStyle={styleAvatar}>
            <SportsSoccerOutlinedIcon />
          </CustomIcon>
        )
      case sportLabel.motorsport:
        return (
          <CustomIcon tooltipText={sportLabel.motorsport} customStyle={styleAvatar}>
            <SportsMotorsportsOutlinedIcon />
          </CustomIcon>
        )
      case sportLabel.tennis:
          return (
            <CustomIcon tooltipText={sportLabel.tennis} customStyle={styleAvatar}>
              <SportsTennisIcon />
            </CustomIcon>
          )
      case sportLabel.golf:
        return (
          <CustomIcon tooltipText={sportLabel.golf} customStyle={styleAvatar}>
            <GolfCourseIcon />
          </CustomIcon>
        )
      case sportLabel.football:
        return (
          <CustomIcon tooltipText={sportLabel.football} customStyle={styleAvatar}>
            <SportsSoccerIcon />
          </CustomIcon>
        )
                
      case sportLabel.multiSport:
        return (
          <CustomIcon tooltipText={sportLabel.multiSport} customStyle={styleAvatar}>
            <BallotOutlinedIcon />
          </CustomIcon>
        )
      default:
        return (
          <CustomIcon tooltipText={sportLabel.all} customStyle={styleAvatar}>
            <GridViewOutlinedIcon />
          </CustomIcon>
        )
    }
  }
