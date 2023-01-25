import Layout from "../components/layout";

export default function MyApp({ Component, pageProps }) {
  console.log(Object.getOwnPropertyNames(Component))
  // [ 'length', 'name' ]
  return (
    <Layout {...Component.name}>
      <Component {...pageProps} />
    </Layout>
  );
}