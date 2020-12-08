import { Link } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const CategoryListStyles = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  gap: 3rem 1rem;
  align-items: center;
`

function SingleCategory({ category }) {
  return (
    <>
      <Img fixed={category.catIcon.asset.fixed} alt={category.title} />
      <Link to={`/kategori/${category.slug.current}`}>
        <h2>{category.title}</h2>
      </Link>
    </>
  )
}

export default function CategoryList({ categories }) {
  return (
    <CategoryListStyles>
      {categories.map(category => (
        <SingleCategory category={category} key={category.id} />
      ))}
    </CategoryListStyles>
  )
}
