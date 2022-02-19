//establishes how NASA Astronomy Picture Of the Day (APOD) information is displayed and checks if APOD is an image or a video

import React from "react"


function InfoCard ({ title, date, url, media_type, explanation }) {
  return (
    <div className="columns">
      <div className="column is-half">
        <div>
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
      </div>
      <div className="column is-half">
        <div className="card">
            <div className="card-header title">{title}</div>
              <p className="message-body">{explanation}</p>
          <div className="card-footer-item card-footer">{date}</div>
        </div>
          </div>
        </div>
  
  )
}

export default InfoCard
