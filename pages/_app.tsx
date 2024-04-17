import "@mantine/core/styles.css";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>Mantine Template</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
      <Script
        src="assets/js/plugins/jquery-3.7.1.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="assets/js/plugins/isotope.pkg.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="assets/js/plugins/swiper.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="assets/js/plugins/lightgallery.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="assets/js/plugins/ScrollSmoother.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="assets/js/plugins/SplitText.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="assets/js/plugins/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="assets/js/plugins/ScrollToPlugin.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="assets/js/plugins/gsap.min.js"
        strategy="beforeInteractive"
      />
      <Script src="assets/js/main.js" />
    </>
  );
}
