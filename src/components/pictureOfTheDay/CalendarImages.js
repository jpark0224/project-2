// Returns the images for the calendar month displayed

import React from "react"


function CalendarImages({ url, media_type, thumbnail_url, title }) {
  return (
    <>
    {media_type === "video" ? (
       <img className="thumbnail" src={thumbnail_url} alt={title} />
    ) : (
          <img className = 'thumbnail' src={url} alt={title} />
    )}
    </>
)
}

export default CalendarImages
