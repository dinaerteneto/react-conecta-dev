export function getSettings() {
  let settings = null
  const data = localStorage.getItem('settings')
  if (data) {
    settings = JSON.parse(data)
  }
  return settings
}

export function setSettings(settings) {
  const data = JSON.stringify(settings)
  localStorage.setItem('settings', data)
}