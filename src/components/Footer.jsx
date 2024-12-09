const Footer = () => {
  return (
    <div>
      <footer className=" bg-base-300 text-base-content p-10 text-center mt-10">
        <section className="mb-6">
          <h2 className="font-bold text-3xl mb-2">Gadget Heaven</h2>
          <p className="text-gray-500 font-semibold">
            Leading the way in cutting-edge technology and innovaton.
          </p>
        </section>
        {/* <hr className="text-white bg-black w-9/12" /> */}
        <div>
          <hr className="border-t border-gray-300 my-4" />
        </div>
        <section className="grid grid-cols-1 gap-6 md:grid-cols-3 ">
          <nav className="flex flex-col gap-.5">
            <h6 className="text-xl font-bold text-black mb-2">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className="flex flex-col gap-.5">
            {" "}
            <h6 className="text-xl font-bold text-black mb-2">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
          </nav>
          <nav className="flex flex-col gap-.5">
            {" "}
            <h6 className="text-xl font-bold text-black mb-2">Legal</h6>
            <a className="link link-hover">Terms of Service</a>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Cookie Policy</a>
          </nav>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
