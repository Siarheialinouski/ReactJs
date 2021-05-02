import './Styles.css';
import React, { useState } from "react";

export const DateTime = () => {

    const day = new Date().getDate();
    const mounth =new Date().getMonth();
    const year =new Date().getFullYear();
  
  return (
    <>
      <div>
        {day}/{mounth}/{year}
      </div>
    </>
  );
}
