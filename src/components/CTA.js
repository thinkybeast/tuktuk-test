import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

const CTAStyles = styled.div`
  color: var(--black);
  background-color: var(--grey);
  /* snap begins */
  width: 100%;
  height: 100vh;
  position: relative;
  scroll-snap-align: start;
  /* snap ends */
  padding: 2rem 1rem;
  > a {
    text-decoration: none;
    border-bottom: 3px solid var(--blue);
  }
`

export default function CTA({ title, text, link }) {
  return (
    <CTAStyles>
      <Logo />
      <h2>{title}</h2>
      <p>{text}</p>
      {link}
    </CTAStyles>
  )
}
