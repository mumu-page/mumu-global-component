import React from 'react'
// import style from "./index.module.less";
// @ts-ignore
import {Decoration3} from '@jiaminghi/data-view-react'

interface ComponentProps {
  color: string[]
  style: object
}

function Component(props: ComponentProps) {
  const {color, style = {width: '250px', height: '30px'}} = props

  return (
    <Decoration3 reverse style={style} color={color}/>
  )
}

export default Component