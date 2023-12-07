import Banner from "./HomeComponents/Banner";
import ContactSection from "./HomeComponents/ContactSection";
import HomeContent from "./HomeComponents/HomeContent";


const Home = () => {
  return (
    <div className="bg-white">
      <Banner />
      <HomeContent></HomeContent>
      <ContactSection />
    </div>
  );
};

export default Home;
