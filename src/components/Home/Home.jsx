import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <div className="space-y-24">
      <Helmet>
        <title> Career Hub | Home</title>
      </Helmet>
      <Banner></Banner>
      <CategoryList></CategoryList>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
