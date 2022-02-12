import React from "react";

function InfoCard({ title, date, url, media_type, explanation }) {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet">
        <div className="card">
          <div className="card-header">
            <div className="card-header-title">{title}</div>
            <p>{date}</p>
          </div>
          <div className="card-image">
              {media_type === "video" ? <iframe width="560" height="315" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              : <img src={url} alt={title} />}
          </div>
          <div className="card-content">
            <p>{explanation}</p>
          </div>
        </div>
    </div>
  );
}

export default InfoCard;
