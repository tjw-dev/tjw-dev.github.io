import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAdjust, faVolumeMute, faVolumeUp, faSpinner } from "@fortawesome/free-solid-svg-icons"

import { useTheme } from "../context/theme"

const Header = () => {
  const { toggleDarkMode } = useTheme()

  return (
    <header>
      <nav>
        <div className="mx-auto px-2">
          <div className="relative flex items-center justify-between h-12">
            <div className="flex-1 flex items-center justify-end sm:items-stretch">
              <div className="block ml-8 text-gray-800 dark:text-gray-100 transition-none">
                <div className="flex space-x-4 sm:text-base md:text-lg text-sm">
                  <button
                    type="button"
                    aria-label="toggle theme"
                    className="flex-grow mx-2 focus:outline-none"
                    onClick={() => toggleDarkMode()}
                  >
                    <FontAwesomeIcon icon={faAdjust} size="1x" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
