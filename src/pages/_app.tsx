import { Provider } from "next-auth/client";
import "../styles/home.ts";
import type { AppProps } from "next/app";

import { ConextTagProvider } from "../Context/TagsContext";

import Globalstyle from "../styles/Global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Globalstyle />
      <ConextTagProvider>
        <Provider session={pageProps.session}>
          <Component {...pageProps} />
        </Provider>
      </ConextTagProvider>
    </>
  );
}
export default MyApp;
