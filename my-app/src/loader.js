import React, { useEffect, useState } from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


export default function PageLoader()
{
    return(
        <>
<div className="text-center" style={{marginTop: "15%"}}>
     <Loader
        type="Grid"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={2000} //3 secs
      />
</div>
        </>
    )
}