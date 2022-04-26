import React, { useState, useContext, createContext } from 'react'
import { setSettings } from '../utils/settings'
import _ from 'lodash'

export const SettingsContext = createContext({})

export function SettingsProvider({ settings, children }) {
  const [currentSettings, setCurrentSettings] = useState(settings || defaultSettings)
  const defaultSettings = { darkMode: false }
  const handleSave = (newSettings) => {
    const mergedSettings = _.merge({}, currentSettings, newSettings)
    setCurrentSettings(mergedSettings)
    setSettings(mergedSettings)
  }

  return (
    <SettingsContext.Provider value={{
      settings: currentSettings,
      saveSettings: handleSave
    }}>
      {children}
    </SettingsContext.Provider>
  )
}

export function useSettings() {
  const context = useContext(SettingsContext)
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider')
  }
  return context
}