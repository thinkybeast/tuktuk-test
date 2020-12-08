import React from 'react'
import styled from 'styled-components'

const SingleTikTokFooterStyles = styled.div`
  position: absolute;
  bottom: 12rem;
  left: 2rem;
  color: var(--white);
  text-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  max-width: 60%;
  h4 {
    font-weight: bold;
  }
  .desc {
    margin: 1.5rem 0;
  }
`
export default function SingleTikTokFooter({ tiktok }) {
  return (
    <SingleTikTokFooterStyles>
      <h4>{tiktok.tiktokCategory.title}</h4>
      <p className="desc">{tiktok.description}</p>
    </SingleTikTokFooterStyles>
  )
}
