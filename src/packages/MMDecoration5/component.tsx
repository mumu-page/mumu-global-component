import React from 'react'
// import style from "./index.module.less";
// @ts-ignore
import {Decoration5} from '@jiaminghi/data-view-react'

interface ComponentProps {
  color: string[]
  style: object
}

function Component(props: ComponentProps) {
  const {color, style = {width: '300px', height: '40px'}} = props

  return (
    <Decoration5 style={style} color={color}/>
  )
}

export default Component