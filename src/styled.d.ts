import "styled-components";

declare module "styled-components" {
  export interface DEfaultTheme {
    borderRadius: string;

    colors: {
      primary: string;
      secondary: string;
      background: string;
      main: string;
      text: string;
      textGrayDark: string;
      textGrayLight: string;
      textWhite: string;
    };
  }
}
