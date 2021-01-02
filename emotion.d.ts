import "@emotion/react";

declare module "@emotion/react" {
    interface IthemeColors {
        primary: string;
        secondary: IthemeColor;
        white: string;
        gray: string;
    }

    interface IthemeColor {
        dark: string;
        base: string;
        light: string
    }
    
    interface ISizeTextProperties {
        FontFamily: string;
        FontSize: string;
        LineHeight: string;
      }
    
    interface IthemeFonts {
        input: ISizeTextProperties
    }
    
    export interface Theme {
        colors: IthemeColors;
        fonts: IthemeFonts
    }
}