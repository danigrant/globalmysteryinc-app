import React from 'react'
import App from 'next/app'
import Head from 'next/head'

class GlobalMysteryIncApp extends App {
  constructor(props) {
    super(props)
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <div>
        <Head>
          <title>Global Mystery Inc</title>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Condensed:400,600&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Nunito:400,900&display=swap" rel="stylesheet" />
          <link rel="icon" href="/images/favicon.png" type="image/png"/>
          <link rel="stylesheet" href="/styles/utils.css" />
          <link rel="stylesheet" href="/styles/styles.css" />
        </Head>
        <Component {...pageProps} />
      </div>
    )
  }
}

GlobalMysteryIncApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps }
}

export default GlobalMysteryIncApp
