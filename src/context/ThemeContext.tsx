import { createContext, useContext, useState, useEffect, useCallback } from 'react'

export type Theme = 'light' | 'dark' | 'fluid' | 'atomic' | 'vaporwave'

const CREATIVE_THEMES: Theme[] = ['fluid', 'atomic', 'vaporwave']

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleDark: () => void
  surprise: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
  toggleDark: () => {},
  surprise: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    return (localStorage.getItem('theme') as Theme) || 'light'
  })

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t)
    localStorage.setItem('theme', t)
    document.documentElement.setAttribute('data-theme', t)
  }, [])

  // Sync on mount
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleDark = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  const surprise = useCallback(() => {
    const available = CREATIVE_THEMES.filter(t => t !== theme)
    const pick = available[Math.floor(Math.random() * available.length)]
    setTheme(pick)
  }, [theme, setTheme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleDark, surprise }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
