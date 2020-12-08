import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import LogoSVG from '../assets/svgs/Logo_svart.svg'

const LogoStyles = styled.div`
  margin-bottom: 2rem;
`

export default function Logo() {
  return (
    <LogoStyles>
      <Link to="/#start">
        <LogoSVG />
      </Link>
    </LogoStyles>
  )
}
