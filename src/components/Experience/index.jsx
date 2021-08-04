import "./index.scss";

import Event from "../common/Event";
import React from "react";
import SubTitle from "../common/SubTitle";
import myData from "../../db.json";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { experiences } = myData;
  const { t } = useTranslation();

  return (
    <>
      {experiences && (
        <>
          <SubTitle>{t("experience")}</SubTitle>
          <div className="experience-container">
            {experiences.map((experience, index) => (
              <Event key={index} event={experience} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Experience;
