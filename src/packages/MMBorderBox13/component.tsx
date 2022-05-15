import React from 'react'
// import style from "./index.module.less";
// @ts-ignore
import {BorderBox13} from '@jiaminghi/data-view-react'
import ObjectContainer from "../ObjectContainer/component";

interface ComponentProps {
  color: string
  backgroundColor: string
}

function Component(props: ComponentProps) {
  const { color, backgroundColor } = props

  return (
    <BorderBox13 color={color} backgroundColor={backgroundColor}>
      <ObjectContainer />
    </BorderBox13>
  )
}

export default Component