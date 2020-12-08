import React from 'react'

import styled from 'styled-components'
import 'normalize.css'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'
import Nav from './Nav'
import Logo from './Logo'

const ContentStyles = styled.div`
  background: var(--white);
  color: var(--black);
  height: 100vh;
  display: grid;
  place-items: center;
`

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <ContentStyles>{children}</ContentStyles>
    </>
  )
}
