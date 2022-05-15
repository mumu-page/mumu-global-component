import React from 'react'
// import style from "./index.module.less";
// @ts-ignore
import {Decoration4} from '@jiaminghi/data-view-react'

interface ComponentProps {
  color: string[]
  style: object
}

function Component(props: ComponentProps) {
  const {color, style = {width: '5px', height: '150px'}} = props

  return (
    <Decoration4 reverse style={style} color={color}/>
  )
}

export default Component