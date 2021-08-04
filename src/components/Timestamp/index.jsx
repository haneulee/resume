import "./index.scss";

import React from "react";
import SubTitle from "../common/SubTitle";
import TimeStampItem from "./TimestampItem";
import myData from "../../db.json";
import { useTranslation } from "react-i18next";

const Timestamp = () => {
  const { timestamp } = myData;
  const { t } = useTranslation();

  return (
    <>
      {timestamp && (
        <>
          <SubTitle>{t("timestamp")}</SubTitle>
          <div className="timestamp-container">
            {timestamp.map((time, index) => (
              <TimeStampItem key={index} {...time} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Timestamp;
