import { useState, useEffect } from 'react';
import { Theme, getStoredTheme, setStoredTheme, preferDarkTheme } from '../lib/theme';

export default function useTheme() {
  const [theme, setThemeState] = useState<Theme>('dark');

  useEffect(() => {
    const stored = getStoredTheme();
    if (stored) {
      setThemeState(stored);
    } else {
      const systemPref = preferDarkTheme() ? 'dark' : 'light';
      setThemeState(systemPref);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    setStoredTheme(theme);
  }, [theme]);

  const toggle = () => setThemeState(prev => (prev === 'dark' ? 'light' : 'dark'));

  return { theme, toggle };
}
