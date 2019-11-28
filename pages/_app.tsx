import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "../config/configure-store";
import theme from "../config/theme";
import Navbar from "../components/navbar";
import { APP_NAME } from "../constants/app";
import Footer from "../components/footer";

interface MyAppProps {
  reduxStore: any;
}

export class MyApp extends App<MyAppProps> {
  persistor: any;

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  constructor(props) {
    super(props);
    this.persistor = persistStore(props.reduxStore);
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <>
        <Head>
          <title>{APP_NAME}</title>
        </Head>
        <Provider store={reduxStore}>
          <PersistGate
            loading={<div>Loading ...</div>}
            persistor={this.persistor}
          >
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Navbar />
              <Component {...pageProps} />
              <Footer />
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </>
    );
  }
}

export default configureStore(MyApp);
