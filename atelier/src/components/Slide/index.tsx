import React, { useState } from 'react'
import { SliderData } from './sliderData'
import { Container, Seta } from './styles'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

export const Slide = (slides: Array<string>) => {
  const [current, setCurret] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurret(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurret(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <Container>
      {SliderData.map((slide, index) => {
        return (
            <img src={slide.image} alt="slideImage" />
        )
      })}
      <Seta>
        <FaArrowAltCircleLeft className='seta-esquerda' />
        <FaArrowAltCircleRight className='seta-direita' onClick={nextSlide} />
      </Seta>
    </Container>
    
  )
}