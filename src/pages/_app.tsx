import { Provider } from "@cosmoau/ui";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider>
      <Head>
        <meta content="width=device-width, initial-scale=1, user-scalable=no" name="viewport" />
      </Head>

      <Component {...pageProps} />

      <Analytics />
    </Provider>
  );
}
