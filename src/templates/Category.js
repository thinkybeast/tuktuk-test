import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Logo from '../components/Logo'

const CategoryPageStyles = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 1rem 4rem;
  overflow-y: scroll;
  scroll-snap-align: center;
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    gap: 5px;
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
    min-height: 200px;
    background-size: cover;
    background-position: center;
    display: flex;
    a {
      flex: 1;
    }
  }
  h2,
  p {
    margin: 3rem 4rem;
  }
  .catIcon {
    border: 3px solid black;
    border-radius: 50%;
  }
`
// image and link, single tiktok in list
function SingleTikTokThumb({ tiktok }) {
  return (
    <li>
      <Link to={`#${tiktok.tiktokID}`}>
        <Img fluid={tiktok.videoThumb.asset.fluid} alt={tiktok.tiktokID} />
      </Link>
    </li>
  )
}

export default function SingleCategoryPage({
  data: { category },
  data: { tiktoks },
}) {
  // console.log(category, tiktoks.nodes)
  return (
    <CategoryPageStyles>
      <Logo />
      <Img
        fixed={category.catIcon.asset.fixed}
        alt={category.title}
        className="catIcon"
      />
      <h2>{category.title}</h2>
      <p>{category.text}</p>
      <p>
        Nysgjerrig? Les mer om studieprogrammet på{' '}
        <a href={category.catUrl} target="_blank">
          vilbli.no
        </a>{' '}
        🚀
      </p>
      <ul>
        {tiktoks.nodes.map(tiktok => (
          <SingleTikTokThumb tiktok={tiktok} key={tiktok.tiktokID} />
        ))}
      </ul>
    </CategoryPageStyles>
  )
}

// dynamic based on slug
export const query = graphql`
  query($slug: String!) {
    category: sanityCategory(slug: { current: { eq: $slug } }) {
      title
      text
      catUrl
      catIcon {
        asset {
          fixed(toFormat: NO_CHANGE, width: 70, height: 70) {
            ...GatsbySanityImageFixed
          }
        }
      }
    }
    tiktoks: allSanityTiktok(
      filter: { tiktokCategory: { slug: { current: { eq: $slug } } } }
    ) {
      nodes {
        tiktokID
        videoThumb {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`
