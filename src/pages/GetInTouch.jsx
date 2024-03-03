import React from "react";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";

const labelStyles =
  "absolute left-3 -top-6 bg-transparent text-sm leading-7 text-white transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-white";

const buttonStyles =
  "mx-auto flex rounded border border-gray-700 bg-[#0d0d0d] py-2 px-12 text-lg text-[#ececec] hover:bg-black hover:border-white focus:outline-none";

const CustomInput = ({ id, name, placeholder, type }) => {
  return (
    <div className="relative">
      <input
        required
        type={type}
        id={id}
        name={name}
        className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-2 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-white focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
        placeholder={placeholder}
      />
      <label htmlFor={id} className={labelStyles}>
        {placeholder}
      </label>
    </div>
  );
};

const GetInTouch = () => {
  const navigate = useNavigate();

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    console.log("formData", formData);

    try {
      const response = await fetch("https://formspree.io/f/mrgnkwqr", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        // Add any success handling here (e.g., show a success message)
        navigate("/");
      } else {
        // Add any error handling here (e.g., show an error message)
        navigate("/");
      }
    } catch (error) {
      // Add any error handling here (e.g., show an error message)
      navigate("/");
    }
  };

  return (
    <div className="w-screen flex flex-col items-center justify-center overflow-hidden">
      <Nav />
      <div className="w-screen h-screen calc-[100vh-130px] flex">
        <div className="mx-auto mt-10 xl:mt-12 w-11/12 md:w-3/5">
          <div className="text-center pb-10 xl:pb-12">
            Hi,
            <br />
            Curious, inspired, or simply wanting to share your thoughts?
          </div>
          <form
            onSubmit={sendEmail}
            className="flex flex-wrap gap-8 2xl:gap-10"
          >
            <div className="w-full">
              <CustomInput
                id="name"
                name="name"
                placeholder="Your Name"
                type="text"
              />
            </div>
            <div className="w-full">
              <CustomInput
                id="email"
                name="email"
                placeholder="Your Email Address"
                type="email"
              />
            </div>
            <div className="w-full">
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  className="peer h-36 2xl:h-56 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-2 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-white focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                  placeholder="Message"
                ></textarea>
                <label htmlFor="message" className={labelStyles}>
                  Message
                </label>
              </div>
            </div>
            <div className="w-full p-2">
              <button className={buttonStyles} type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
