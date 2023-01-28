import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { stitchesReset } from 'styles/stitches';

class _Document extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link
            rel="stylesheet"
            as="style"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css"
          />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: stitchesReset() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default _Document;
