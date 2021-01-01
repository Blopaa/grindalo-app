interface IthemeColors {
    primary: string;
    secondary: string;
    white: string;
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