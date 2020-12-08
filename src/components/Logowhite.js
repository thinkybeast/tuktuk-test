import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import LogoWhiteSVG from '../assets/svgs/Logo_hvit.svg'

const LogoWhiteStyles = styled.div`
  margin-bottom: 2rem;
  position: absolute;
  top: 2rem;
  left: 2rem;
  z-index: 1;
`

export default function Logowhite() {
  return (
    <LogoWhiteStyles>
      <Link to="/#start">
        <LogoWhiteSVG />
      </Link>
    </LogoWhiteStyles>
  )
}
