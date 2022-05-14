import React from 'react'
// import style from "./index.module.less";
// @ts-ignore
import BorderBox11 from '@jiaminghi/data-view-react/es/BorderBox11'
import ObjectContainer from "../ObjectContainer/component";

interface ComponentProps {
  color: string
  backgroundColor: string
}

function Component(props: ComponentProps) {
  const { color, backgroundColor } = props

  return (
    <BorderBox11 color={color} backgroundColor={backgroundColor}>
      <ObjectContainer />
    </BorderBox11>
  )
}

export default Component