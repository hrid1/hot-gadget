import { useNavigate } from "react-router-dom";
import banner from "../assets/banner.jpg";
const Banner = () => {

  const navigate = useNavigate();

  return (
    <>
      <section className="relative mb-32 md:mb-[440px]">
        <div
          className={`bg-purple-600 h-[580px] rounded-b-2xl space-y-4  md:space-y-8 text-center pt-6`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center md:leading-tight">
            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
          </h1>

          <p className="text-white">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p>

          <button onClick={() => navigate('/dashboard')} className="btn rounded-full px-5">Shop Now</button>
        </div>

        {/* img section */}

        <div className="w-full md:w-5/6 h-auto md:h-[600px] border mx-auto rounded-2xl p-5 absolute top-96 left-1/2 -translate-x-1/2 ">
          <img
            className=" rounded-2xl h-full w-full object-fit"
            src={banner}
            alt="banner"
          />
        </div>

     
      </section>
      <h2 className=""></h2>
      
    </>
  );
};

export default Banner;
