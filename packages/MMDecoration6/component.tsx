import React from 'react'
// import style from "./index.module.less";
// @ts-ignore
import Decoration6 from '@jiaminghi/data-view-react/es/Decoration6'

interface ComponentProps {
  color: string[]
  style: object
}

function Component(props: ComponentProps) {
  const {color, style = {width: '300px', height: '30px'}} = props

  return (
    <Decoration6 style={style} color={color}/>
  )
}

export default Component