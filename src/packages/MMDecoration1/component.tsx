import React from 'react'
// import style from "./index.module.less";
// @ts-ignore
import {Decoration1} from '@jiaminghi/data-view-react'

interface ComponentProps {
  color: string[]
  style: object
}

function Component(props: ComponentProps) {
  const { color, style } = props

  return (
    <Decoration1 style={style} color={color} />
  )
}

export default Component