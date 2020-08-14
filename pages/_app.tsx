import { AppProps } from "next/app";

// import base stylesheet
import "styles/base.css";

// return component
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// export App
export default MyApp;
