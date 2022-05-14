import React from 'react'
// import style from "./index.module.less";
// @ts-ignore
import BorderBox1 from '@jiaminghi/data-view-react/es/borderBox1'
import ObjectContainer from "../ObjectContainer/component";

interface ComponentProps {
  color: string
  backgroundColor: string
}

function Component(props: ComponentProps) {
  const { color, backgroundColor } = props

  return (
    <BorderBox1 color={color} backgroundColor={backgroundColor}>
      <ObjectContainer />
    </BorderBox1>
  )
}

export default Component