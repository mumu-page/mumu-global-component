import React from 'react'
// import style from "./index.module.less";
// @ts-ignore
import {Decoration9} from '@jiaminghi/data-view-react'

interface ComponentProps {
  color: string[]
  style: object
  dur: number
}

function Component(props: ComponentProps) {
  const {color, style = {width: '150px', height: '150px'}, dur = 3} = props

  return (
    <Decoration9 dur={dur} style={style} color={color}/>
  )
}

export default Component