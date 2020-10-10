import { AppProps } from "next/app";

// import base stylesheet
import "pure-react-carousel/dist/react-carousel.es.css";
import "styles/base.css";

// return component
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// export App
export default MyApp;
