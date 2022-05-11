import React from 'react'
import style from "./index.module.less";

interface MumuGlobalBanner2Props {
  link: string
  src: string
}

function MumuGlobalBanner2(props: MumuGlobalBanner2Props) {
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

export default MumuGlobalBanner2
