import React from 'react'
// import style from "./index.module.less";
// @ts-ignore
import {Decoration2} from '@jiaminghi/data-view-react'

interface ComponentProps {
  color: string[]
  style: object
}

function Component(props: ComponentProps) {
  const { color, style } = props

  return (
    <Decoration2 reverse style={style} color={color} />
  )
}

export default Component