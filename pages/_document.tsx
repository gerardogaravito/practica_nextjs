import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {


  render() {
    return (
      <Html>
        <Head>
          {/* favicon */}
          {/* webfont */}
          {/* stylesheet externas */}
          {/* script/js externas */}
        </Head>
        <body className='my-body-class'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
