import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import CategoryList from '../components/CategoryList'
import Logowhite from '../components/Logowhite'

const CategoryPageStyles = styled.div`
  width: 100%;
  height: 100%;
  background: var(--black);
  padding: 8rem 1rem 4rem;
  overflow-y: scroll;
  scroll-snap-align: center;
  color: var(--grey);
  position: relative;
  border: 2px solid var(--grey);
  a {
    color: var(--grey);
  }
  > h2 {
    font-weight: bold;
    margin-bottom: 4rem;
  }
`

export default function CategoryPage({ data }) {
  const categories = data.categories.nodes
  // console.log(categories)
  return (
    <CategoryPageStyles>
      <Logowhite />
      <h2>Meny</h2>
      <CategoryList categories={categories} />
    </CategoryPageStyles>
  )
}

export const query = graphql`
  query Categories {
    categories: allSanityCategory {
      nodes {
        id
        title
        slug {
          current
        }
        text
        catUrl
        catIcon {
          asset {
            fluid(maxWidth: 100) {
              ...GatsbySanityImageFluid
            }
            fixed(toFormat: NO_CHANGE, width: 50, height: 50) {
              ...GatsbySanityImageFixed
            }
          }
        }
        tiktoks {
          tiktokID
          videoThumb {
            asset {
              fluid(maxWidth: 300) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`
