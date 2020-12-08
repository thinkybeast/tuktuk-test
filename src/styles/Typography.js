import { createGlobalStyle } from 'styled-components'

import font from '../assets/fonts/OsloSans-Regular.woff'

const Typography = createGlobalStyle`

@font-face {
    font-family: OsloSans;
    src: url(${font});
  }

  html {
    font-family: OsloSans, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    color: var(--black);
    text-decoration-color: var(--blue);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }

  .center {
    text-align: center;
  }

`

export default Typography
