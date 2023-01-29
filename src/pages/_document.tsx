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
          <script
            src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js"
            referrerPolicy="origin"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="portal" />
        </body>
      </Html>
    );
  }
}

export default _Document;
