import React from "react"

function InfoCard ({ title, date, url, media_type, explanation }) {
  return (
    <div className="column is-one-half-desktop is-one-third-tablet">
      <div className="card">
        <div className="card-header">
          <div className="card-header-title is-info">{title}</div>
        </div>
        <div className="card-image">
          {media_type === "video" ? (
            <iframe
              width="500"
              height="300"
              src={url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <img src={url} alt={title} />
          )}
        </div>
        <div className="card-content">
          <p className="message-body is-success">{explanation}</p>
        </div>
        <div className="card-footer-item">{date}</div>
      </div>
    </div>
  )
}

export default InfoCard
