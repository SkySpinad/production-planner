import React from "react";
import { ThreeDots } from "react-loader-spinner";



export default function Loader(){

    return  <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
    <ThreeDots 
    height="80" 
    width="80" 
    radius="9"
    color="#133c70" 
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
     />
  </div> 
}