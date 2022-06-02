// type ButtonProps = {
//   text?: string;
//   children?: string;
// }

import { useState } from "react"

//export const Button = (props: ButtonProps) => {
export const Button = () => {

  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter +1)
  }

  return (
    <button onClick={increment}>{counter}</button>  
  
    // <button>{props.text || props.children ||'standard button'}</button>
  )
}