import "./index.scss";

import React from "react";
import myData from "../../../db.json";
import { useTranslation } from "react-i18next";

const Title = () => {
  const {
    aboutMe: { nickName },
  } = myData;
  const { t } = useTranslation();

  return (
    <div className="title">
      <h1 className="title__h1">&#123; {t("title")} &#125; </h1>
    </div>
  );
};

export default Title;
