import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner";
import GadgetsDiv from "../../components/GadgetsDiv";

const Home = () => {
  
    
  
    return (
    <>
    <Helmet>
      <title>Gadget Haven</title>
    </Helmet>
      <Banner></Banner>
      <GadgetsDiv></GadgetsDiv>
    
    </>
  );
};

export default Home;
