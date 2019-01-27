import Document, { Head, Main, NextScript } from 'next/document';
import { createGlobalStyle, ServerStyleSheet } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  button {
    &:hover {
      cursor: pointer;
    }
    &:disabled {
      cursor: default;
      opacity: .9;
    }
  }
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>Gallery With Filter</title>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <GlobalStyle />
          <NextScript />
        </body>
      </html>
    );
  }
}
