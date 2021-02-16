import React from "react";
import { Typography } from "@material-ui/core";
import MenAtWork from "../assets/images/menAtWork.png";

const UnderConstruction = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <img src={MenAtWork} alt="Men at work" width="80%" />
        </div>
        <div className="col-md-8">
          <Typography variant="h2" paragraph className="word-wrap-break">
            Page under construction
          </Typography>
        </div>
      </div>
    </>
  );
};

export default UnderConstruction;
