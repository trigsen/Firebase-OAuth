import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            [key: string]: string
        }
        background: {
            [key: string]: string
        }
        button: {
            [key: string]: string
        }
    }
};
