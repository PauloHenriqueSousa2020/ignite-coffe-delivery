import { css } from 'styled-components'

export const defaultTheme = {
  colors: {
    white: '#FFFFFF',
    background: '#FAFAFA',

    baseCard: '#F3F2F2',
    baseInput: '#EDEDED',
    baseButton: '#E6E6E5',
    baseHover: '#D7D5D5',
    baseLabel: '#8D8686',
    baseText: '#574F4D',
    baseSubtitle: '#403937',
    baseTitle: '#272221',

    purpleLight: '#EBE5F9',
    purple: '#8047F8',
    purpleDark: '#4B2995',

    yellowLight: '#F1E9C9',
    yellow: '#DBAC2C',
    yellowDark: '#C47F17',
  },
  fonts: {
    titleXL: css`
      font-family: 'Baloo 2', sans-serif;
      font-size: 3rem;
      line-height: 130%;
      font-weight: 800;
    `,

    titleL: css`
      font-family: 'Baloo 2', sans-serif;
      font-size: 2rem;
      line-height: 130%;
      font-weight: 800;
    `,

    titleM: css`
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
      line-height: 130%;
      font-weight: 800;
    `,

    titleS: css`
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.25rem;
      line-height: 130%;
      font-weight: 700;
    `,

    titleXS: css`
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.125rem;
      line-height: 130%;
      font-weight: 700;
    `,

    textL: css`
      font-family: 'Roboto', sans-serif;
      font-size: 1.25rem;
      line-height: 130%;
      font-weight: 400;
    `,

    textM: css`
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      line-height: 130%;
      font-weight: 400;
    `,

    textS: css`
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      line-height: 130%;
      font-weight: 400;
    `,

    textXS: css`
      font-family: 'Roboto', sans-serif;
      font-size: 0.75rem;
      line-height: 130%;
      font-weight: 700;
    `,

    tag: css`
      font-family: 'Roboto', sans-serif;
      font-size: 0.625rem;
      line-height: 130%;
      font-weight: 700;
    `,

    buttonG: css`
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      line-height: 160%;
      font-weight: 700;
    `,

    buttonM: css`
      font-family: 'Roboto', sans-serif;
      font-size: 0.75rem;
      line-height: 160%;
      font-weight: 400;
    `,
  },

}