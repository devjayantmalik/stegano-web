import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "../css/main.css";
import "../css/wave.css";
import { __DEFAULT_THEME__ } from "src/constants/meta";

function RootApplication({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme={__DEFAULT_THEME__}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default RootApplication;
