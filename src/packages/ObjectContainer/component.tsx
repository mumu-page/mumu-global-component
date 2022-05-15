import React from 'react'
import style from "./index.module.less";

interface ObjectContainer {
  children?: React.ReactNode
}

function ObjectContainer(props: ObjectContainer) {
  const {children} = props
  return (
    <div id='object-container' className={style.objectContainer}>
      {children}
    </div>
  )
}

export default ObjectContainer