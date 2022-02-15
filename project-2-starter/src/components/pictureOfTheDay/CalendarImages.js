// Returns the images for the calendar month displayed

import React from "react"
// import Calendar from "react-calendar"

function CalendarImages({ url, media_type, thumbnail_url, title }) {
  return (
    <>
    {media_type === "video" ? (
       <img src={thumbnail_url} alt={title} width="100" height="100"/>
    ) : (
          <img src={url} alt={title} width="100" height="100"/>
    )}
    </>
)
}

export default CalendarImages
