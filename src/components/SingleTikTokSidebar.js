import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import MenuIcon from '../assets/images/meny.png'
import Sharing from './Sharing'

const SingleTikTokSidebarStyles = styled.div`
  position: absolute;
  bottom: 12rem;
  right: 2rem;
  > div {
    padding-bottom: 20px;
    text-align: center;
  }
  .circle-icon {
    display: block;
    width: 5rem;
    height: 5rem;
    margin: 1.5rem 0;
    //box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
`

export default function SingleTikTokSidebar({ tiktok }) {
  return (
    <SingleTikTokSidebarStyles>
      <Sharing className="circle-icon" />
      <Link to={`/kategori/${tiktok.tiktokCategory.slug.current}`}>
        <Img fixed={tiktok.tiktokCategory.catIcon.asset.fixed} />
      </Link>
      <Link to="/kategorier">
        <div className="circle-icon">🔀</div>
      </Link>
    </SingleTikTokSidebarStyles>
  )
}
