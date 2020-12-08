import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --blue: #75E9FD;
  }
  html {
    background-color: var(--black);
    font-size: 10px;
  }

  body {
    font-size: 2rem;
    max-width: 540px;
    margin: 0 auto;
  }
/*
  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--red);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }
*/

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--grey) var(--black);
  }
  body::-webkit-scrollbar-track {
    background: var(--black);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--grey) ;
    border-radius: 6px;
    border: 3px solid var(--black);
  }

  img {
    max-width: 100%;
  }

  div {
    box-sizing: border-box;
  }

  div::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox  */
  div {
    -ms-overflow-style: none; /* IE, Edge */
    -ms-scrollbar-width: none; /* Firefox  */
  }

  //temp as hell
  .img1 {
    background-image: url(/assets/images/thumbnail.jpg);
  }
  .img2 {
    background-image: url(/assets/images/thumbnail2.jpg);
  }
  .img3 {
    background-image: url(/assets/images/thumbnail3.jpg);
  }
  .img4 {
    background-image: url(/assets/images/thumbnail4.jpg);
  }
  `

export default GlobalStyles
