import { createGlobalStyle } from 'styled-components'

import vibrocentricRegular from '../../fonts/vibrocentricRegular.woff'
import vibrocentricBold from '../../fonts/vibrocentricBold.woff'
import vibrocentricItalic from '../../fonts/vibrocentricItalic.woff'
import vibrocentricBoldItalic from '../../fonts/vibrocentricBoldItalic.woff'

import robotoBlack from '../../fonts/robotoBlack.woff'
import robotoBlackItalic from '../../fonts/robotoBlackItalic.woff'
import robotoBold from '../../fonts/robotoBold.woff'
import robotoBoldItalic from '../../fonts/robotoBoldItalic.woff'
import robotoItalic from '../../fonts/robotoItalic.woff'
import robotoLight from '../../fonts/robotoLight.woff'
import robotoLightItalic from '../../fonts/robotoLightItalic.woff'
import robotoMedium from '../../fonts/robotoMedium.woff'
import robotoMediumItalic from '../../fonts/robotoMediumItalic.woff'
import robotoRegular from '../../fonts/robotoRegular.woff'
import robotoThin from '../../fonts/robotoThin.woff'
import robotoThinItalic from '../../fonts/robotoThinItalic.woff'

const GlobalStyle = createGlobalStyle`
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  body {
    background: #f8f8f8;
    color: #292929;
  }

  body, input, button, textarea {
    font: 400, 16px, 'Roboto', sans-serif;
  }
`

export default GlobalStyle