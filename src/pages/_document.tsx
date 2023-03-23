import Document, { Html, Main, NextScript, Head } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html className="h-full" lang="en">
        <Head />
        <body className="bg-white h-full dark:bg-dark-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
