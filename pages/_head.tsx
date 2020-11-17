import Head from 'next/head';

const MyHead = (props) => {
	return (
    <Head>
      <title>Age of Empires II chart</title>
      <meta name='robots' content='noindex' />
      <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Frávega: Electrodomésticos, Tecnología y Artículos para el hogar" />
      <link rel="apple-touch-icon" href="/static/icon-192x192.png" />
      <link rel="apple-touch-startup-icon" href="/static/icon-192x192.png" />
      <link rel="icon" href="/static/iso_fvg@2x.png" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#440099" />
      <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap' rel='stylesheet' />
      {props.children}
    </Head>
  )
}

export default MyHead;