import Hero01 from "../components/Hero/Hero01";
import Hero02 from "../components/Hero/Hero02";
import OpenHour from "../components/Hero/OpenHour";
import Review from "../components/Hero/Review";
import Layout from "../layouts/Layout";
import ListFood from "../components/Hero/ListFood";

export default function IndexPage() {
  return (
    <>
      <Layout>
        <Hero01 />
        <OpenHour />
        <ListFood />
        <Hero02 />
        <Review />
      </Layout>
    </>
  );
}
