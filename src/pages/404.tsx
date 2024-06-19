import { Stack, View, Text } from "@cosmoau/ui";
import Head from "next/head";

export default function Custom404(): JSX.Element {
  return (
    <View
      app
      bottom="larger"
      css={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
      top="larger">
      <Head>
        <title>Page Not Found</title>
      </Head>
      <Stack direction="row">
        <Stack align="center" direction="column" offset={20} width={60}>
          <Text>Check the URL and try again. This page may have moved.</Text>
        </Stack>
      </Stack>
    </View>
  );
}
