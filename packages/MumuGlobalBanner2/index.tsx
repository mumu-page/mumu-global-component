import React from 'react'
import config from './package.json';
import style from "./index.module.less";

interface MumuGlobalBanner2Props {
  data: any
}

function MumuGlobalBanner2(props: MumuGlobalBanner2Props) {
  const { data } = props

  return (
    <a href={data.link}>
      <img
        className={style["global-banner"]}
        src={data.src}
        alt="图片"
      />
    </a>
  )
}

const Component = MumuGlobalBanner2

export {
  Component,
  config
}