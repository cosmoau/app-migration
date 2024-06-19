import { Stack, View, Text, Logo, Button, Badge, Dialog, Image } from "@cosmoau/ui";
import Head from "next/head";

import v1Image from "../../public/v1.png";
import v2Image from "../../public/v2.png";

export default function Index(): JSX.Element {
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
        <title>Cosmo App</title>
      </Head>
      <Stack direction="row">
        <Stack align="center" direction="column" offset={20} width={60}>
          <Stack
            css={{
              position: "absolute",
              top: "0",
              left: "$medium",
            }}>
            <Logo width={100} />
          </Stack>
          <Text as="h2">Cosmo App</Text>
          <Text>
            We are currently in the process of upgrading the Cosmo App. Our new version is currently
            in beta, and available to try out. Our current version is remains available to use until
            31 August 2024.
          </Text>
          <Text>
            <b>Please select the version you would like to use below</b>. If you have any questions,
            please contact us.
          </Text>

          <Stack
            css={{
              alignItems: "flex-start",
              button: {
                height: "10rem",
                fontWeight: "bold",
                fontSize: "$h5",
              },
            }}
            flexduo
            top="large">
            <Stack
              css={{
                width: "100%",

                a: {
                  width: "100%",
                },
              }}>
              <a href="https://v1.cosmogroup.io">
                <Button
                  block
                  icon={
                    <Image
                      alt="V2"
                      borderRadius="large"
                      css={{ marginRight: "$small" }}
                      src={v1Image}
                      width={100}
                    />
                  }
                  theme="solid">
                  Current Version (V1)
                </Button>
              </a>
              <Text accent as="small" top="small">
                v1.cosmogroup.io
              </Text>
            </Stack>
            <Stack
              css={{
                width: "100%",
                a: {
                  width: "100%",
                },
              }}>
              <Dialog
                small
                title="Cosmo App V2"
                trigger={
                  <Button
                    block
                    icon={
                      <Image
                        alt="V2"
                        borderRadius="large"
                        css={{ marginRight: "$small" }}
                        src={v2Image}
                        width={100}
                      />
                    }
                    theme="solid">
                    New Version (V2)
                  </Button>
                }
                triggerCSS={{
                  width: "100%",
                }}
                wrapperCSS={{
                  width: "100%",
                }}>
                <Text bottom="large">
                  The new version of the Cosmo App is currently in beta. We are working on improving
                  the user experience and adding new features. You may experience bugs or issues
                  while using the new version. Some information may not be available or may be
                  incorrect.
                </Text>
                <a href="https://v2.cosmogroup.io">
                  <Button block theme="solid">
                    Go to V2
                  </Button>
                </a>
              </Dialog>
              <Stack top="small">
                <Text accent as="small" inline="small">
                  v2.cosmogroup.io
                </Text>
                <Badge small theme="orange">
                  Beta
                </Badge>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </View>
  );
}
