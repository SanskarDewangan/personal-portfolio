import "react-toastify/dist/ReactToastify.css";
import "../styles/main.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="light">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
