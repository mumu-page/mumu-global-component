import React from 'react'
// import style from "./index.module.less";
// @ts-ignore
import BorderBox12 from '@jiaminghi/data-view-react/es/BorderBox12'
import ObjectContainer from "../ObjectContainer/component";

interface ComponentProps {
  color: string
  backgroundColor: string
}

function Component(props: ComponentProps) {
  const { color, backgroundColor } = props

  return (
    <BorderBox12 color={color} backgroundColor={backgroundColor}>
      <ObjectContainer />
    </BorderBox12>
  )
}

export default Component