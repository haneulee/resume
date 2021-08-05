import "./index.scss";

import React from "react";
import noImage from "../../../assets/static/images/no-image.png";
import { useTranslation } from "react-i18next";

const ProjectItem = ({
  title,
  term,
  imgUrl = "../../../assets/static/images/no-image.png",
  tags,
  description,
  attribution,
  projectUrl,
  githubUrl,
}) => {
  const addDefaultSrc = ({ target }) => (target.src = noImage);
  const { t } = useTranslation();

  return (
    <div className="project">
      <a
        className="project__details"
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="item__image">
          <img
            src={imgUrl}
            alt={`${title} logo 이미지`}
            onError={addDefaultSrc}
          />
        </div>
        <div className="item__details">
          <div className="title">
            {t(title)} <span className="term">({term})</span>
          </div>
          <div className="description">{t(description)}</div>
          <div className="attribution">{t(attribution)}</div>
          <div className="tags">
            {tags.map((tag, index) => (
              <div key={index} className="tag">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </a>
      {githubUrl && (
        <div className="project__links">
          <a href={githubUrl}>
            <div className="github-logo" />
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
