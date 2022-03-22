import React from 'react';
import { Container } from "./styles"
import { Slide } from "../Slide"
import { SliderData } from "../Slide/sliderData"

export const Dashboard = () => {
  return (
    <Container>
      <h1>
        Vestidos variados
      </h1>
      <h3>
        Valor (cada): R$ 200
      </h3>
     <Slide slides={SliderData}/>
    </Container>
  )
}