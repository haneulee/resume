import React from "react";
import { useTranslation } from "react-i18next";
import "./index.scss";

const EducationItem = ({ education }) => {
  const { t } = useTranslation();
  const { title, term, description } = education;
  return (
    <div className="education">
      <div className="item__details">
        <div className="term">[{term}]</div>
        <div className="title">{t(title)}</div>
        <div className="description">{t(description)}</div>
      </div>
    </div>
  );
};

export default EducationItem;
