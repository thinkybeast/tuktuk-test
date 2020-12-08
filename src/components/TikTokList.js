import React from 'react'
import SingleTikTok from './SingleTikTok'

export default function TikTokList({ tiktoks }) {
  return (
    <>
      {tiktoks.map(tiktok => (
        <SingleTikTok tiktok={tiktok} key={tiktok.tiktokID} />
      ))}
    </>
  )
}
