/* eslint-disable react/no-danger */
import { getCssText } from "@cosmoau/ui";
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document<{ css: string }> {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps & { css: string }> {
    const page = await ctx.renderPage();
    const css = getCssText();

    return { ...page, css };
  }

  render(): JSX.Element {
    return (
      <Html lang="en-AU">
        <Head>
          <style dangerouslySetInnerHTML={{ __html: " " + this.props.css }} id="stitches" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
