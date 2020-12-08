import React from 'react'

export default function MobileShare({ postTitle }) {
  const handleOnClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `${postTitle} |`,
          text: `Sjekk ut ${postTitle} on`,
          url: document.location.href,
        })
        .then(() => {
          console.log('Successfully shared')
        })
        .catch(error => {
          console.error('Something went wrong sharing the blog', error)
        })
    }
  }

  return (
    <div className="circle-icon" onClick={handleOnClick}>
      ➡️
    </div>
  )
}
