import { Helmet } from "react-helmet-async";
import Feature from "../../components/Feature";
import cover from "../../assets/cover.avif";
const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>AboutUs | GadgetHaven</title>
      </Helmet>
      <div className="flex flex-col gap-4 items-center justify-center">

        <h2 className="text-4xl font-bold text-violet-800 my-2">GADGET HEAVEN</h2>
        <img className="rounded-2xl " src={cover} alt="" />
      </div>
      <section className="m-4 md:m-8 dark:bg-gray-100 dark:text-gray-800  rounded-xl">
        <div className="container mx-auto p-4 my-6 space-y-2 text-center">
          <h2 className="text-5xl font-bold">
            Built to Empower, Designed for Easy Life.
          </h2>
          <p className="dark:text-gray-600">
            GadgetHeven is online gadgets & accessories store
          </p>
        </div>
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 text-center">
          <Feature
            title={"WHAT WE DO"}
            info="We provide the wide range of products from the different source and delivery to you whenever you want."
          ></Feature>
          <Feature
            title={"OUR VISION"}
            info="Our ultimate target is to satisfy you and rest other people in Bangladesh. Honesty, good quality, reasonable price"
          ></Feature>
          <Feature
            title={"HISTORY"}
            info="We made it possible in the early 2020. We’re happy to say is one of the trusted online shopping services in Banglades,"
          ></Feature>
          <Feature
            title={"ORDER PROCESS"}
            info="ou can order all the available products in our website. We also provide the facility to order via call or sent email."
          ></Feature>
          <Feature
            title={"PAYMENT METHOD"}
            info="We have more than 15 payment gateways through secure server of the SSL COMMERZ. "
          ></Feature>
          <Feature
            title={"DELIVERY SYSTEM"}
            info="We delivery all most all location in Bangladesh through our delivery system or courier services. "
          ></Feature>
        </div>
      </section>

      {/* feed back form */}
      <div className="mt-10 flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-100 dark:text-gray-800 mx-auto">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl font-semibold text-center">
            Your opinion matters!
          </h2>
          <div className="flex flex-col items-center py-6 space-y-3">
            <span className="text-center">How was your experience?</span>
            <div className="flex space-x-3">
              <div className="rating rating-lg">
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <textarea
              rows="3"
              placeholder="Message..."
              className="p-4 rounded-md resize-none dark:text-gray-800 dark:bg-gray-50"
            ></textarea>
            <button
              type="button"
              className="py-4 my-8 font-semibold rounded-md dark:text-gray-50 dark:bg-violet-600"
            >
              Leave feedback
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <a
            rel="noopener noreferrer"
            href="#"
            className="text-sm dark:text-gray-600"
          >
            Maybe later
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
