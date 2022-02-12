import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import socialBanner from '../images/ogp.jpg';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || "Asane's portfolio"}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Welcome to my site!'} />
        <meta property="og:image" content={socialBanner} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://asane.netlify.app" />
        <meta property="og:updated_time" content="2022-02-12" />
      </Helmet>
      <App />
    </>
  );
};
