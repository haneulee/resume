import "./index.scss";

import React from "react";
import noImage from "../../../assets/static/images/no-image.png";
import { useTranslation } from "react-i18next";

const Event = ({ event }) => {
  const { imgUrl, experienceUrl, title, term, description, attribution, tags } =
    event;
  const { t } = useTranslation();

  const addDefaultSrc = ({ target }) => (target.src = noImage);
  const descriptionArr = t(description).split("<br/>");

  return (
    <a href={experienceUrl} target="_blank" rel="noopener noreferrer">
      <div className="experience">
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
          <div className="description">
            {descriptionArr.map((text) => (
              <p key={Math.random()}>{text}</p>
            ))}
          </div>
          {attribution && <div className="attribution">{attribution}</div>}

          {tags && (
            <div className="tags">
              {tags.map((tag) => (
                <div className="tag">{tag}</div>
              ))}
            </div>
          )}
        </div>
      </div>
    </a>
  );
};

export default Event;
