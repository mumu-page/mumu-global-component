import React from 'react'
import style from "./index.module.less";

interface MumuGlobalBannerProps {
  link: string
  src: string
}

function MumuGlobalBanner(props: MumuGlobalBannerProps) {
  const { link, src } = props

  return (
    <a href={link}>
      <img
        className={style["global-banner"]}
        src={src}
        alt="图片"
      />
    </a>
  )
}

export default MumuGlobalBanner