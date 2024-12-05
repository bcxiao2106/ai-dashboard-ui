export interface IThemesConfig {
  themes: string[];
  default: string;
  map: Record<string, Record<string, string>>;
}
export interface IThemeParams {
  config: IThemesConfig;
}
