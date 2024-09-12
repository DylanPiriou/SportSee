import React from 'react'
import Logo from '@/assets/SportSeeLogo.svg'

/**
 * Site logo component
 */

export default function SiteLogo() {
  return (
    <a href="/">
        <img src={Logo} alt="SportSee logo" />
    </a>
  )
}
