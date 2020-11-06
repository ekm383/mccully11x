import React from "react"

const Map = () => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.37527249195!2d-157.83210818450164!3d21.296182985854145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006d939d1c6e89%3A0xe2dc0f3fece49073!2s1110%20McCully%20St%2C%20Honolulu%2C%20HI%2096826!5e0!3m2!1sen!2sus!4v1604622082367!5m2!1sen!2sus"
        width="100%"
        height="400"
        frameborder="0"
        style={{ border: 0 }}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  )
}

export default Map
