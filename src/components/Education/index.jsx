import "./index.scss";

import EducationItem from "./EducationItem";
import React from "react";
import SubTitle from "../common/SubTitle";
import myData from "../../db.json";
import { useTranslation } from "react-i18next";

const Education = () => {
  const { educations } = myData;
  const { t } = useTranslation();

  return (
    <>
      {educations && (
        <>
          <SubTitle>{t("education")}</SubTitle>
          <div className="education-container">
            {educations &&
              educations.map((education, index) => (
                <EducationItem key={index} education={education} />
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default Education;
