import React from 'react'
import config from './package.json';
import style from "./index.module.less";

interface MumuGlobalBannerProps {
  data: any
}

function MumuGlobalBanner(props: MumuGlobalBannerProps) {
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

const Component = MumuGlobalBanner

export {
  Component,
  config
}