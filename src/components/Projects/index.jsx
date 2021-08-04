import "./index.scss";

import ProjectItem from "./ProjectItem";
import React from "react";
import SubTitle from "../common/SubTitle";
import myData from "../../db.json";
import { useTranslation } from "react-i18next";

const Project = () => {
  const { projects } = myData;
  const { t } = useTranslation();

  return (
    <>
      {projects && (
        <>
          <SubTitle>{t("project")}</SubTitle>
          <div className="projects-container">
            {projects.map((project, index) => (
              <ProjectItem key={index} {...project} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Project;
