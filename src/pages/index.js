import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import CTA from '../components/CTA'
import TikTokList from '../components/TikTokList'

const FrontStyle = styled.div`
  scroll-snap-type: y mandatory;
  position: relative;
  height: 100%;
  overflow: scroll;
  width: 100%;
  > div {
    background-size: cover;
    background-position: center;
  }
`

export default function HomePage({ data }) {
  const tiktoks = data.tiktoks.nodes
  // console.log(tiktoks)
  // ${tiktoks.length}
  return (
    <FrontStyle id="start">
      <CTA
        title={data.intro.title}
        text={`Vi har ${tiktoks.length} TikToks å vise deg – ${data.intro.text[0].children[0].text}`}
      />
      <TikTokList tiktoks={tiktoks} />
      <CTA
        title={data.cta.title}
        text="Gå til"
        link={<a href="https://vilbli.no">vilbli.no</a>}
      />
    </FrontStyle>
  )
}

export const query = graphql`
  query FrontFeatuedTikToks {
    tiktoks: allSanityTiktok {
      nodes {
        tiktokID
        videoUrl
        tiktokCategory {
          title
          slug {
            current
          }
          catIcon {
            asset {
              fixed(width: 55, height: 55) {
                ...GatsbySanityImageFixed
              }
            }
          }
        }
        featured
        videoThumb {
          asset {
            fluid(maxWidth: 540) {
              ...GatsbySanityImageFluid
            }
          }
        }
        description
      }
    }
    intro: sanityPage(_id: { eq: "7ffbb4b1-d2cb-419f-a0be-3057da16be28" }) {
      title
      text {
        children {
          text
        }
      }
    }
    cta: sanityPage(_id: { eq: "f06d2d40-f42c-4301-8649-eddbf72ecf1f" }) {
      title
      text {
        children {
          text
        }
      }
    }
  }
`
