import React from 'react'
import { Link, navigate } from 'gatsby'
import styled from 'styled-components'

const NavStyles = styled.div`
  color: var(--black);
  background-color: var(--blue);
  /* snap begins */
  width: 100%;
  height: 100vh;
  position: relative;
  scroll-snap-align: start;
  /* snap ends */
  padding: 2rem;
  li {
    margin-bottom: 1.5rem;
  }
`

// This will be used for left swiping (mobile)
function showCatList() {
  // wait 2 secs
  setTimeout(() => {
    // go to dest
    navigate('/category-list', { replace: true })
  }, 2000)
}

export default function Nav() {
  return (
    <NavStyles>
      <h3>Temporary nav menu:</h3>
      <ul>
        <li>
          <Link to="/">Front page</Link>
        </li>
        <li>
          <Link to="/category-list">Category list view</Link>
        </li>
        <li>
          <Link to="/category-stream">Category stream</Link>
        </li>
      </ul>
    </NavStyles>
  )
}
