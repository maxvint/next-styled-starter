import React from 'react'
import Toggle from '../../components/Toggle'
import { useDarkModeManager } from '../../state/user/hooks'

const SloganView = () => {
  const [darkMode, toggleDarkMode] = useDarkModeManager()

  return (
    <>
      <span>DarkMode</span>
      <Toggle isActive={darkMode} toggle={toggleDarkMode} />
    </>
  )
}

export default SloganView
