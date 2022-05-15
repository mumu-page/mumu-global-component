import React from 'react'
// import style from "./index.module.less";
// @ts-ignore
import {Decoration11} from '@jiaminghi/data-view-react'

interface ComponentProps {
  color: string[]
  style: object
  title: string
}

function Component(props: ComponentProps) {
  const {color, style = {width: '200px', height: '60px'}, title} = props

  return (
    <Decoration11 style={style} color={color}>
      {title}
    </Decoration11>
  )
}

export default Component