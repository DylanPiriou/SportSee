import React from 'react'

/**
 * Navbar component
 */

export default function NavBar() {
  return (
    <nav className='w-full flex items-center justify-center'>
        <ul className='w-full flex items-center justify-evenly text-white'>
            <li><a href="/">Accueil</a></li>
            <li><a href="/">Profil</a></li>
            <li><a href="/">Réglages</a></li>
            <li><a href="/">Communauté</a></li>
        </ul>
    </nav>
  )
}
