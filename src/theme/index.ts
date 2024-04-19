
export const theme = {
  colors: {
    primary: '#84cc16',
    secondary: '#0f172a',
    textOnPrimary: '#f1f5f9',
    textOnSecondary: '#f1f5f9',
    border: '#334155',
    warning: '#ef4444',
    completed: '#84cc16',
    pending: '#ef4444',
  },
}

import type { CSSProp } from 'styled-components'

type ThemeType = typeof theme

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}

declare module 'react' {
  interface DOMAttributes<T> {
    css?: CSSProp
  }
}
