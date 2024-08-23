import React from 'react'

const Details = (iframeUrl) => {
  return (
    <>
        <iframe src={iframeUrl} width="720" height="480" frameborder="0" allowfullscreen='True' title='Watch Now'></iframe>
    </>
  )
}

export default Details