import React from "react";
import { useState, useEffect } from "react";
import { data } from "../data";
import { data2 } from "../data2";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
const Home = () => {
  console.log("mil gaya", data);
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handlePrev1 = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : data.length - 1
    );
  };

  const handleNext1 = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < data.length - 1 ? prevIndex + 1 : 0
    );
  };

  const [currentIndex1, setCurrentIndex1] = useState(0);
  const handlePrev2 = () => {
    setCurrentIndex1((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : data2.length - 1
    );
  };

  const handleNext2 = () => {
    setCurrentIndex1((prevIndex) =>
      prevIndex < data2.length - 1 ? prevIndex + 1 : 0
    );
  };

  const [openIndex, setOpenIndex] = useState(0); // Track which answer is open

  const faqs = [
    {
      question: "Curate your video media collection with an AI-powered library",
      imgClosed: "Vector (2).png", // Default image
      imgOpen: "Vector 3.png", // Image when expanded
      answer:
        "End manual video uploads and tedious metadata tasks! Hubilo AI automates SEO-optimised metadata creation from your media in minutes.",
    },
    {
      question: "Build, Brand & Publish your Media+",
      imgClosed: "Vector (2).png",
      imgOpen: "Vector 3.png",
      answer:
        "Publish your on-demand media faster than ever using Media+. Add your custom branding and host all your media on your website or any other custom URL of your choice.",
    },
    {
      question: "Gate your media, capture leads & connect your CRM - it’s easy",
      imgClosed: "Vector (2).png",
      imgOpen: "Vector 3.png",
      answer:
        "Customize forms on Hubilo or import from HubSpot. Seamlessly push data to your CRM and enrich your marketing pipeline.",
    },
    {
      question: "Track your views - with detailed analytics. ",
      imgClosed: "Vector (2).png",
      imgOpen: "Vector 3.png",
      answer:
        "Unlock audience insights! Analyze media performance granularly to create better content and capture intent effectively.",
    },
  ];

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close state
  };
  return (
    <div
      className={`justify-items-center overflow-hidden pt-2 ${
        darkMode ? "bg-gray-700" : ""
      }`}
    >
      {/* Navbar */}
      <div className="w-[90vw] flex justify-between border border-gray-200  p-2 m-3 rounded-2xl  relative">
        <div className="ml-2  items-center">
          <img src="Vector.png" className="pb-1 pt-1" alt="Logo" />
          <img src="Vector (1).png" alt="Logo 2" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-9 ml-60 pt-1">
          {["Product", "Customer", "Resources", "About us"].map(
            (item, index) => (
              <select key={index} className=" ">
                <option className="border-0 text-sm">{item}</option>
                <option>lorem</option>
              </select>
            )
          )}
        </div>

        <div className="hidden sm:flex items-center">
          <p className="mr-12 pt-1">Plans</p>
          <button
            style={{ backgroundColor: "#E4875D1A" }}
            className="text-[#E4875D] p-1 px-4 text-medium font-semibold rounded-lg mr-3"
          >
            Login
          </button>
          <button className="bg-[#E4875D] text-white p-1 rounded-xl px-2">
            Request a demo
          </button>
          <button onClick={() => setDarkMode(!darkMode)}>
            <img
              src={
                darkMode
                  ? "https://img.icons8.com/?size=100&id=45474&format=png&color=000000"
                  : "https://img.icons8.com/?size=100&id=H3yHeysB1dxv&format=png&color=000000"
              }
              alt="Theme Toggle"
              className="w-8 ml-3 bg-amber-500 rounded-full"
            />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden flex items-center"
          onClick={() => setIsSidebarOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {isSidebarOpen && (
          <motion.div
            initial={{ x: "-100%" }} // Start off-screen
            animate={{ x: 0 }} // Slide in
            exit={{ x: "-100%" }} // Slide out when unmounted
            transition={{ type: "spring", stiffness: 100 }}
            className={`fixed top-0 left-0 w-64 h-full shadow-lg p-5 z-50 sm:hidden ${
              darkMode ? "bg-gray-700" : "bg-white"
            }`}
          >
            <button
              className="absolute top-3 right-3 text-2xl"
              onClick={() => setIsSidebarOpen(false)}
            >
              &times;
            </button>

            <div className="flex flex-col mt-10 gap-4">
              {["Product", "Customer", "Resources", "About us"].map(
                (item, index) => (
                  <select key={index} className="border p-2 rounded">
                    <option>{item}</option>
                    <option>lorem</option>
                  </select>
                )
              )}
              <p className="mt-4">Plans</p>
              <button className="text-[#E4875D] p-2 bg-[#E4875D1A] rounded-lg">
                Login
              </button>
              <button className="bg-[#E4875D] text-white p-2 rounded-lg">
                Request a demo
              </button>
              <button onClick={() => setDarkMode(!darkMode)} className="mt-2">
                <img
                  src={
                    darkMode
                      ? "https://img.icons8.com/?size=100&id=45474&format=png&color=000000"
                      : "https://img.icons8.com/?size=100&id=H3yHeysB1dxv&format=png&color=000000"
                  }
                  alt="Theme Toggle"
                  className="w-8 bg-amber-500 rounded-full"
                />
              </button>
            </div>
          </motion.div>
        )}

        {/* Sidebar */}
      </div>

      {/* hero section */}
      <div className=" justify-items-center p-2 mb-5">
        <div className="w-full mt-12  overflow-clip  ">
          <h1
            style={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            }}
            className=" font-semibold overflow-hidden p-2  text-center text-3xl lg:tracking-[-1.5px] lg:leading-[4rem] lg:text-5xl "
          >
            Unlock video’s full potential;<br></br>
            <span className="text-[#E4875D]">half of marketers</span> haven’t
            yet!
          </h1>
        </div>

        <div className="flex justify-center mt-10">
          <p
            style={{
              borderWidth: "1px ",
              borderImageSource:
                "linear-gradient(115.4deg, #E4875D 7.36%, #FFFFFF 71.58%)",
              borderImageSlice: "1 ",
            }}
            className="p-2 text-[#E4875D] font-semibold rounded-lg border-r-0 text-2xl "
          >
            Media+
          </p>
          <p className="p-2 text-2xl font-semibold">=</p>
          <p className="p-2 text-2xl font-semibold">Engage 🤩</p>
        </div>
        <p className="lg:ml-10    text-center font-semibold mt-3">
          Netflix-style video discovery for your prospects that turns viewers
          into customers
        </p>

        <button className="bg-[#E4875D] text-white   mt-15 text-xl  p-2 rounded-lg pl-2 pr-2">
          Request a Demo
        </button>
      </div>
      <img src="image 1069.png" className=""></img>
      <div className="w-full pt-10 pb-10 justify-items-center bg-[#E4875D] ">
        <p className="text-white font-semibold text-lg">Perfected by</p>
        <div className="flex lg:gap-44 gap-30 mt-10 mb-7">
          <img src="image 1138.png" className="w-[7vw] hidden lg:block "></img>
          <img src="Agora logo.png" className="w-[7vw] hidden lg:block"></img>
          <img src="image 1139.png" className="lg:w-[7vw] w-[30vw] "></img>
          <img src="framee.png" className="lg:w-[9vw] w-[30vw]"></img>
          <img src="image 1142.png" className="w-[7vw] hidden lg:block"></img>
        </div>
      </div>

      {/* seamsless video management section */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full pt-30 justify-items-center"
      >
        <div className="justify-items-center p-2">
          <p className="text-[#E4875D] text-center font-bold text-lg">
            Elevate your video strategy
          </p>
          <p className="font-semibold text-center text-4xl">
            Seamless Video Management
          </p>
          <p className="text-lg text-center font-thin mt-3">
            Transform how you engage with your audience using Media+
          </p>
        </div>

        <div className="lg:flex gap-10 mt-6  p-5 lg:mt-20 mb-10">
          {[
            {
              value: "2.5X",
              text: "Lead Generation",
              desc: "Boost watch time and drive more leads",
            },
            {
              value: "3X",
              text: "Publish Content Faster with AI",
              desc: "Tailor made to get more views",
            },
            {
              value: "30min",
              text: "Setup",
              desc: "Set up your video CMS in less than 30 minutes",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              style={{
                background: "linear-gradient(180deg, #FDF6F4 0%, #FFE9DF 100%)",
              }}
              className="rounded-2xl pl-4 pr-4 lg:pl-0 lg:pr-0  mb-5 pb-5 p-10 pt-5 justify-items-center"
            >
              <p
                style={{
                  background:
                    "linear-gradient(180deg, #E4875D 0%, #FFCBB4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="text-7xl pb-4 ml-12 mr-12 font-semibold"
              >
                {item.value}
              </p>
              <p className="text-[#E4875D] font-semibold text-2xl text-center">
                {item.text}
              </p>
              <p className="font-light text-center ml-9 mr-9 mt-4">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-[#E4875D] text-white mt-3 text-xl p-3 rounded-lg pl-2 pr-2"
        >
          Request a Demo
        </motion.button>
      </motion.div>

      {/* why choose media section */}

      <div className="mt-30  justify-items-center">
        <div className=" justify-items-center   text-center pt-5">
          <p className="text-[#E4875D] font-semibold text-center text-xl">
            Why choose Media+?
          </p>
          <p className="lg:text-4xl w-[85vw] text-2xl  text-center font-medium">
            Media+ turns video engagement <br />
            <span className="lg:ml-12">into customer conversions</span>
          </p>
        </div>

        <div className="  hidden lg:flex   gap-10  pt-20">
          <div className="space-y-4 w-[40vw]">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`pt-7 pb-15 gap-5 pl-5 pr-4 border rounded-lg transition-all duration-300 ${
                  openIndex === index ? "h-auto bg-gray-100" : "h-12"
                }`}
                onClick={() => handleClick(index)}
              >
                <div className="flex justify-between items-center   cursor-pointer">
                  <p className="font-semibold  ">{faq.question}</p>
                  <img
                    src={openIndex === index ? faq.imgOpen : faq.imgClosed} // Toggle image
                    alt="Toggle"
                    className="w-6 "
                  />
                </div>
                {openIndex === index && (
                  <p className="pt-17 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>

          <div>
            {openIndex === 0 && (
              <div className="w-[40vw] pb-45 p-5 justify-items-center bg-[#D2DB51] rounded-2xl">
                <div className="relative mt-20 mb-2 ">
                  <div className=" w-[25vw] mr-25 bg-gray-400 h-[40vh]  rounded-2xl">
                    <img src="Data.png" className="w-[25vw] p-2"></img>
                    <div className="bg-gray-200 w-[25vw] p-2 h-[9vh]"></div>
                    <img
                      src="Video Cards.png"
                      className="absolute w-[29vw] top-36 left-10"
                    ></img>
                    <div className="absolute w-[20vw] p-1 bg-white top-57 rounded-lg left-37">
                      <img src="frame.png"></img>
                    </div>
                    <div className="absolute w-[20vw] p-1 bg-white top-72 rounded-lg left-15">
                      <img src="fr.png"></img>
                    </div>

                    <img src="Button.png" className="mt-25 ml-16"></img>
                  </div>
                </div>
              </div>
            )}

            {openIndex === 1 && (
              <div className=" w-[45vw] pb-22 p-5 justify-items-center bg-[#AFC3CA] rounded-2xl">
                <div className=" mt-15 relative mb-20  justify-items-center">
                  <img src="Home.png" className="w-[30vw] rounded-xl "></img>
                  <div className="absolute p-1 bg-white rounded-lg w-[13vw] top-7  left-65">
                    <img src="Content.png"></img>
                  </div>
                  <div className="p-2 w-[20vw] justify-items-center absolute top-55 right-45 rounded-xl border-2  border-gray-100 bg-pink-50">
                    <img
                      src="Logo.png"
                      className="border border-gray-100 rounded-2xl "
                    ></img>
                  </div>
                  <img
                    src="Color Picker.png"
                    className="w-[15vw] absolute top-45  left-65 "
                  ></img>
                </div>
              </div>
            )}

            {openIndex === 2 && (
              <div className="w-[45vw] pb-35 justify-items-center bg-[#D8C69E] rounded-2xl">
                <div className="relative  pt-15  justify-items-center">
                  <div className=" mt-10   rounded-2xl"></div>
                  <img src="form.png" className="w-[37vw]"></img>
                  <img
                    src="Integration Card.png"
                    className="  absolute top-67 -left-10"
                  ></img>
                  <img
                    src="Logos.png"
                    className="  absolute top-9 -right-7"
                  ></img>
                </div>
                <div></div>
              </div>
            )}

            {openIndex === 3 && (
              <div className="w-[45vw] pt-10 pb-1 justify-items-center bg-[#E4875D] rounded-2xl">
                <div className=" mt-15 mb-10 justify-items-center">
                  <div className=" w-[20vw]  rounded-2xl"></div>
                  <img src="Visual 4.png"></img>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* mobile screen */}

        <div className="lg:hidden">
          <div className="max-w-[90vw] sm:w-full mt-5 bg-[#D2DB51] rounded-2xl mx-4 p-10">
            <div>
              <div className="w-[57vw] sm:w-full relative  h-[23vh] flex flex-col items-center justify-center p-1">
                <img
                  src="Data.png"
                  className="w-[55vw] border-4 border-gray-400 sm:w-full rounded-lg"
                ></img>
                <div className="w-full h-[3vh] rounded-lg border-2 border-gray-400 bg-gray-100"></div>

                <img
                  src="Video Cards.png"
                  className="absolute top-25 left-15 sm:left-[10%] sm:w-[80%]"
                ></img>
                <img
                  src="frame.png"
                  className="absolute top-38 w-[50vw] sm:w-[75%] bg-white rounded-lg left-25 sm:left-[12%]"
                ></img>
                <img
                  src="fr.png"
                  className="absolute top-48 w-[50vw] sm:w-[75%] bg-white rounded-lg left-12 sm:left-[8%]"
                ></img>
              </div>
            </div>
            <img
              src="Button.png"
              className="mt-20 ml-5 p-1 sm:w-[80%] sm:mx-auto"
            ></img>
          </div>

          <div className=" w-[90vw] ml-4 mr-4 mt-5   rounded-lg bg-emerald-200">
            <p className=" p-5 font-semibold text-lg  ">
              Curate your video media collection with an AI powered library
            </p>
            <div className="bg-[#D2DB51] w-[15vw] rounded-lg ml-5 h-[1vh]"></div>
            <p className=" p-5">
              End manual video uploads and tedious metadata tasks! Hubilo AI
              automates SEO-optimised metadata creation along with tags and
              categories mapped to you media in minutes.
            </p>
          </div>

          {/* second image */}
          <div className="max-w-[90vw] sm:max-w-[95vw] sm:w-full mt-5 bg-[#AFC3CA] rounded-2xl mx-4 pb-30 pt-20 p-10">
            <div>
              <div className="w-[67vw] sm:w-full relative h-[23vh] flex flex-col items-center justify-center p-1">
                {/* Main Image */}
                <img
                  src="Home.png"
                  className="w-[65vw] sm:w-[90%] rounded-lg"
                ></img>

                {/* Gray Border Box */}
                <div className="w-full h-[3vh] rounded-lg border-2 border-gray-400 bg-gray-100"></div>

                {/* Content Image */}
                <img
                  src="Content.png"
                  className="absolute w-[35vw] sm:w-[70%] p-1 rounded-lg bg-white top-2 left-34 sm:left-[50%] sm:translate-x-[-50%]"
                ></img>

                {/* Logo Image */}
                <img
                  src="Logo.png"
                  className="absolute top-30 w-[40vw] sm:w-[75%] bg-white rounded-lg -left-5 sm:left-[50%] sm:translate-x-[-50%]"
                ></img>

                {/* Color Picker Image */}
                <img
                  src="Color Picker.png"
                  className="absolute top-20 w-[30vw] sm:w-[65%] bg-white rounded-lg left-40 sm:left-[50%] sm:translate-x-[-50%]"
                ></img>
              </div>
            </div>
          </div>

          <div className=" w-[90vw] ml-4 mr-4 mt-5   rounded-lg bg-gray-200">
            <p className=" p-5 font-semibold text-lg  ">
              Build, Brand & Publish your Media+
            </p>
            <div className="bg-[#AFC3CA] w-[15vw] rounded-lg ml-5 h-[1vh]"></div>
            <p className=" p-5">
              Publish your on-demand media faster than ever using Media+. Add
              your custom branding and host all your media on your website or
              any other custom URL of your choice.
            </p>
          </div>

          {/* third image */}
          <div className="max-w-[90vw] sm:max-w-[95vw] sm:w-full mt-5 bg-[#D8C69E] rounded-2xl mx-4 pb-30 pt-20 p-10">
            <div>
              <div className="w-[67vw] sm:w-full relative h-[23vh] flex flex-col items-center justify-center p-1">
                {/* Main Image */}
                <img
                  src="form.png"
                  className="w-[65vw] sm:w-[90%] rounded-lg"
                ></img>

                {/* Content Image */}
                <img
                  src="Integration Card.png"
                  className="absolute w-[35vw] sm:w-[70%] p-1 rounded-lg top-22 -left-9 sm:left-[50%] sm:translate-x-[-50%]"
                ></img>
                <img
                  src="Logos.png"
                  className="absolute w-[15vw] -right-5 -top-12"
                ></img>
              </div>
            </div>
          </div>

          <div className=" w-[90vw] ml-4 mr-4 mt-5   rounded-lg bg-gray-100">
            <p className=" p-5 font-semibold text-lg  ">
              Gate your media, capture leads & connect your CRM - it’s easy
            </p>
            <div className="bg-[#AFC3CA] w-[15vw] rounded-lg ml-5 h-[1vh]"></div>
            <p className=" p-5">
              Customize forms on Hubilo or import from HubSpot. Seamlessly push
              data to your CRM and enrich your marketing pipeline.
            </p>
          </div>

          {/* 4th image */}
          <div className="max-w-[90vw] sm:max-w-[95vw] sm:w-full mt-5 bg-[#E4875D] rounded-2xl mx-4 pb-30 pt-20 ">
            <div>
              <div className="w-[87vw] sm:w-full relative h-[23vh] flex flex-col items-center justify-center pt-10 ">
                {/* Main Image */}
                <img
                  src="Visual 4.png"
                  className="w-[85vw] sm:w-[90%] rounded-lg"
                ></img>
              </div>
            </div>
          </div>

          <div className=" w-[90vw] ml-4 mr-4 mt-5   rounded-lg bg-red-100">
            <p className=" p-5 font-semibold text-lg  ">
              Track your views - with detailed analytics
            </p>
            <div className="bg-[#E4875D] w-[15vw] rounded-lg ml-5 h-[1vh]"></div>
            <p className=" p-5">
              Unlock audience insights! Analyze media performance granularly to
              create better content and capture intent effectively.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <motion.div
          className={`bg-[#E4875D] justify-items-center mt-10 pt-20 ${
            darkMode
              ? "bg-gray-700 border-t shadow-xl border-b border-amber-300"
              : ""
          }`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
        >
          <p className="text-xl text-white font-semibold text-center">
            Take it from a Customer
          </p>

          <div className="pl-20 pr-20 relative flex justify-evenly items-center">
            <button onClick={handlePrev1}>
              <img
                src="white_chevron-down.png"
                className="lg:w-[3vw] w-[10vw] ml-20 lg:mr-10 cursor-pointer absolute lg:top-30 lg:left-10 top-73 p-1 lg:mt-29 rotate-180 bg-white rounded-full"
              />
            </button>

            <motion.div
              className="w-[90vw] ml-15 mr-20 justify-items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ amount: 0.3 }}
            >
              <h1 className="text-white text-4xl text-center font-bold p-3 pb-5">
                {data[currentIndex].title}
              </h1>
              <motion.img
                src={data[currentIndex].img}
                className="lg:w-[9vw] w-[30vw] border-4 border-gray-400 rounded-full mt-9 mb-12"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ amount: 0.3 }}
              />
              <p className="pl-10 pr-10 text-white text-center text-lg font-medium">
                {data[currentIndex].p}
              </p>
              <p className="mt-9 text-white text-center font-semibold text-xl">
                {data[currentIndex].name}
              </p>
              <p className="text-white text-center mt-2 font-medium text-lg">
                {data[currentIndex].prof}
              </p>
            </motion.div>

            <button onClick={handleNext1}>
              <img
                src="white_chevron-down.png"
                className="lg:w-[3vw] w-[10vw] mr-20 cursor-pointer absolute right-20 lg:top-59 lg:right-20 top-72 p-1 bg-white rounded-full"
              />
            </button>
          </div>

          <div className="flex mt-9 mb-9 gap-4">
            {[0, 1, 2, 3].map((index) => (
              <motion.div
                key={index}
                className={`w-3 h-3 rounded-full border-2 ${
                  currentIndex === index
                    ? "bg-white border-amber-50"
                    : "bg-gray-200 border-gray-500"
                }`}
                animate={{ scale: currentIndex === index ? 1.2 : 1 }}
              ></motion.div>
            ))}
          </div>

          <motion.button
            className="bg-white text-[#E4875D] mt-3 text-xl p-2 mb-15 rounded-lg pl-2 pr-2"
            // whileHover={{ scale: 1.05 }}
            // whileTap={{ scale: 0.95 }}
          >
            Request a Demo
          </motion.button>
        </motion.div>

        {/* ott platform */}
        <div className=" w-full mt-10 justify-items-center">
          <div className=" lg:mt-20 w-[90vw]  text-center justify-items-center">
            <p className="text-[#E4875D] font-bold text-lg">With Media+</p>
            <p className="text-3xl   text-center  font-semibold">
              Create an OTT platform for your media
            </p>
            <p className="text-center font-light mt-3">
              Let your videos do more than just sit on your website. Curate your
              video repository in a few<br></br>
              easy steps and let it drive organic views and generate leads.
            </p>
          </div>
          <div className="pl-20 pr-20 mt-10 lg:mb-20  ">
            <video
              src="https://s3-figma-videos-production-sig.figma.com/video/914043079227275627/TEAM/642e/7dff/-a9ee-4c3f-aedd-c9a4ec560647?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IF1nyLwQyxzWkdvO6rVXKdRdUbW8iUUjNA-JA1oYWg6mGr-PEHTzMW~Nycv7H63Z7ssen-FaBJuTsrsraf42VLtETSWhmemRlv7ESwpGSXBnNA2jjs38Gl1WRMM4AqwK6e-Wt1drDoQ1ltdGV3zLsNppS95A44mNXkL3imu8S1vOAwX~PjFRxNKCZygQP9c3fFo4bv~oN2N6LhryQ7yk6nsV3~9XBh7bXBCcXz3rzY9hOpBS5B-GmhOM8lBafisnS7MEOEJehjrRgQyPy8ObKmfJXeHADy2Nv~tW6mf1MH1fOvxqUZo717f31kFSc8EgK7rebwOOUxNKldiT29mJCQ__"
              controls
              className=" lg:w-[80vw] w-[90vw] shadow-2xl border border-gray-200 rounded-2xl"
            ></video>
          </div>
        </div>

        {/* you videos and brand */}
        <div
          className={`w-[100vw] p-5 lg:p-0 justify-items-center lg:justify-items-normal   bg-[#E4875D] ${
            darkMode ? "bg-gray-700 border shadow-xl" : ""
          }`}
        >
          <h1 className="lg:mt-19 lg:ml-20">
            <span className="outline-text  mr-5">Your</span>
            <span className="outline-text1">Videos</span>
          </h1>
          <h1 className="lg:ml-92  ">
            <span className="outline-text mr-5">Your</span>{" "}
            <span className="outline-text1">Brand</span>
          </h1>
          <h1 className=" lg:ml-170">
            <span className="outline-text mr-5">Your</span>
            <span className="outline-text1">Website</span>
          </h1>
        </div>

        {/* Customer spotlight */}
        <div className="w-[100vw] mt-25">
          <div className=" pt-20 justify-items-center">
            <p className="text-[#E4875D] font-bold text-xl">
              Media+ in action:
            </p>
            <p className="font-semibold text-3xl">Customer Spotlight</p>
            <p className="mt-3 text-center text-medium font-light">
              See how customers use Media+ to create branded media sites that
              captivate and convert.
            </p>
          </div>

          <div className="w-full relative pt-10 flex justify-center items-center overflow-hidden">
            {/* Previous Button */}
            <button
              onClick={handlePrev2}
              className="absolute lg:left-45 left-6 top-45 lg:top-75 z-50"
            >
              <img
                src="white_chevron-down.png"
                className="lg:w-[3vw] w-[9vw] cursor-pointer p-1 rotate-180 bg-white rounded-full"
              />
            </button>

            {/* Carousel Wrapper */}
            <div className="relative w-full  h-[75vh] flex mb-20  justify-items-center overflow-hidden">
              <div className="flex transition-transform   duration-500 ease-in-out">
                {data2.map((item, index) => {
                  // Calculate the position of images
                  let position = "hidden opacity-0"; // Default: Hidden
                  if (index === currentIndex1) {
                    position = "scale-110 z-20 lg:ml-35 lg:mr-20 opacity-100"; // Center image: Enlarged
                  } else if (
                    index ===
                    (currentIndex1 - 1 + data2.length) % data2.length
                  ) {
                    position =
                      "lg:scale-70 lg:pr-96  translate-x-[-40%] opacity-70 z-10"; // Left image
                  } else if (index === (currentIndex1 + 1) % data2.length) {
                    position =
                      "lg:scale-70 lg:pl-70 translate-x-[40%] opacity-70 z-10"; // Right image
                  }

                  return (
                    <div
                      key={index}
                      className={`absolute lg:w-[99vw] p-5  rounded-2xl transition-all duration-500 ease-in-out ${position}`}
                    >
                      <img
                        src={item.img}
                        className="lg:w-[50vw] pt-9  lg:ml-50 rounded-xl"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext2}
              className="absolute right-6 top-45 lg:right-50 lg:top-75 z-20"
            >
              <img
                src="white_chevron-down.png"
                className="lg:w-[3vw] w-[9vw] cursor-pointer p-1 bg-white rounded-full"
              />
            </button>
          </div>

          {/* explor media fetaure */}
          <div className="lg:mt-10   ">
            <div className="justify-items-center">
              <p className="text-[#E4875D] font-bold text-xl">Explore</p>
              <p className="text-3xl font-semibold">Media+ Features</p>
            </div>
            <div className="relative  lg:bg-[#AFC3CA33] rounded-t-full   ">
              <img
                src="Media+ offerings.png"
                className="lg:p-17   p-1 ml-3 pr-5 mt-9 absolute z-1 lg:z-1"
              ></img>
              <div className="w-full  pt-50   lg:top-96  lg:pt-[700px]  ">
                <div className=" lg:w-[90vw] lg:ml-19 lg:p-0  lg:static lg:z-1  lg:mr-0 p-2 ml-2 mr-2 lg:grid lg:grid-cols-3 justify-items-center">
                  <div className="lg:w-[28vw] relative lg:static z-20 bg-[#FFFFFF] mb-7  lg:h-[52vh]  shadow-xl rounded-2xl">
                    <div className="flex   p-1 pl-2  ">
                      <img
                        src="flex_ movies.png"
                        className="p-1 bg-[#D2DB51] rounded-full"
                      ></img>

                      <p className="text-[#373F66] ml-8 mt-1 text-xl font-medium">
                        Media Library
                      </p>
                    </div>
                    <div className="w-full border border-gray-500"></div>
                    <div className="ml-9 pt-5  pr-6 gap-2">
                      <div className="flex p-1">
                        <img
                          src="flex_ check.png"
                          className="w-[35px] mt-2 p-1 h-[5vh] mr-2"
                        ></img>
                        <p className="text-sm text-[#333333]">
                          25 video uploads included, 1 Media site with options
                          to add more
                        </p>
                      </div>
                      <div className="flex p-1">
                        <img
                          src="flex_ check.png"
                          className="w-[30px] mt-2 p-1 h-[5vh] mr-2"
                        ></img>
                        <p className="text-sm text-[#333333]">
                          Upload videos directly from your computer
                        </p>
                      </div>
                      <div className="flex p-1">
                        <img
                          src="flex_ check.png"
                          className="w-[30px] mt-2 p-1 h-[5vh] mr-2"
                        ></img>
                        <p className="text-sm text-[#333333]">
                          Import past event recordings in a few clicks
                        </p>
                      </div>
                      <div className="flex p-1">
                        <img
                          src="flex_ check.png"
                          className="w-[30px] mt-2 p-1 h-[5vh] mr-2"
                        ></img>
                        <p className="text-sm text-[#333333]">
                          Effortlessly set up new events or import details
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-[28vw] z-2 bg-[#FFFFFF]   lg:h-[52vh] mb-7 shadow-xl rounded-2xl">
                    <div className="flex  p-3 pl-2 pt-3">
                      <img
                        src="flex_ movies.png"
                        className="p-1 bg-[#D2DB51] rounded-full"
                      ></img>

                      <p className="text-[#373F66] ml-8 mt-1 text-xl font-medium">
                        Media Library
                      </p>
                    </div>
                    <div className="w-full border border-gray-500"></div>
                    <div className="ml-9 pt-5  pr-6 gap-2">
                      <div className="flex p-1">
                        <img
                          src="flex_ check.png"
                          className="w-[35px] mt-2 p-1 h-[5vh] mr-2"
                        ></img>
                        <p className="text-sm text-[#333333]">
                          25 video uploads included, 1 Media site with options
                          to add more
                        </p>
                      </div>
                      <div className="flex p-1">
                        <img
                          src="flex_ check.png"
                          className="w-[30px] mt-2 p-1 h-[5vh] mr-2"
                        ></img>
                        <p className="text-sm text-[#333333]">
                          Upload videos directly from your computer
                        </p>
                      </div>
                      <div className="flex p-1">
                        <img
                          src="flex_ check.png"
                          className="w-[30px] mt-2 p-1 h-[5vh] mr-2"
                        ></img>
                        <p className="text-sm text-[#333333]">
                          Import past event recordings in a few clicks
                        </p>
                      </div>
                      <div className="flex p-1">
                        <img
                          src="flex_ check.png"
                          className="w-[30px] mt-2 p-1 h-[5vh] mr-2"
                        ></img>
                        <p className="text-sm text-[#333333]">
                          Effortlessly set up new events or import details
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-[28vw] z-2  bg-[#FFFFFF] lg:h-[52vh] mb-7 shadow-xl rounded-2xl">
                    <div className="flex  p-3 pl-2 pt-3">
                      <img
                        src="flex_ movies.png"
                        className="p-1 bg-[#D2DB51] rounded-full"
                      ></img>

                      <p className="text-[#373F66] ml-8 mt-1 text-xl font-medium">
                        Media Library
                      </p>
                    </div>
                    <div className="w-full border border-gray-500"></div>
                    <div className="ml-9 pt-5  pr-6 gap-2">
                      <div className="flex p-1">
                        <img
                          src="flex_ check.png"
                          className="w-[35px] mt-2 p-1 h-[5vh] mr-2"
                        ></img>
                        <p className="text-sm text-[#333333]">
                          25 video uploads included, 1 Media site with options
                          to add more
                        </p>
                      </div>
                      <div className="flex p-1">
                        <img
                          src="flex_ check.png"
                          className="w-[30px] mt-2 p-1 h-[5vh] mr-2"
                        ></img>
                        <p className="text-sm text-[#333333]">
                          Upload videos directly from your computer
                        </p>
                      </div>
                      <div className="flex p-1">
                        <img
                          src="flex_ check.png"
                          className="w-[30px] mt-2 p-1 h-[5vh] mr-2"
                        ></img>
                        <p className="text-sm text-[#333333]">
                          Import past event recordings in a few clicks
                        </p>
                      </div>
                      <div className="flex p-1">
                        <img
                          src="flex_ check.png"
                          className="w-[30px] mt-2 p-1 h-[5vh] mr-2"
                        ></img>
                        <p className="text-sm text-[#333333]">
                          Effortlessly set up new events or import details
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-[28vw] bg-[#FFFFFF] lg:h-[52vh] mb-7 shadow-xl rounded-2xl">
                    <div className="flex  p-3 pl-2 pt-3">
                      <img
                        src="flex_ movies.png"
                        className="p-1 bg-[#D2DB51] rounded-full"
                      ></img>

                      <p className="text-[#373F66] ml-8 mt-1 text-xl font-medium">
                        Media Library
                      </p>
                    </div>
                    <div className="w-full border border-gray-500"></div>
                    <div className="ml-9 pt-5  pr-6 gap-2">
                      <div className="flex p-1">
                        <img
                          src="flex_ check.png"
                          className="w-[35px] mt-2 p-1 h-[5vh] mr-2"
                        ></img>
                        <p className="text-sm text-[#333333]">
                          25 video uploads included, 1 Media site with options
                          to add more
                        </p>
                      </div>
                      <div className="flex p-1">
                        <img
                          src="flex_ check.png"
                          className="w-[30px] mt-2 p-1 h-[5vh] mr-2"
                        ></img>
                        <p className="text-sm text-[#333333]">
                          Upload videos directly from your computer
                        </p>
                      </div>
                      <div className="flex p-1">
                        <img
                          src="flex_ check.png"
                          className="w-[30px] mt-2 p-1 h-[5vh] mr-2"
                        ></img>
                        <p className="text-sm text-[#333333]">
                          Import past event recordings in a few clicks
                        </p>
                      </div>
                      <div className="flex p-1">
                        <img
                          src="flex_ check.png"
                          className="w-[30px] mt-2 p-1 h-[5vh] mr-2"
                        ></img>
                        <p className="text-sm text-[#333333]">
                          Effortlessly set up new events or import details
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-[28vw] bg-[#FFFFFF] lg:h-[52vh] mb-7 shadow-xl rounded-2xl">
                    <div className="flex  p-3 pl-2 pt-3">
                      <img
                        src="flex_ movies.png"
                        className="p-1 bg-[#D2DB51] rounded-full"
                      ></img>

                      <p className="text-[#373F66] ml-8 mt-1 text-xl font-medium">
                        Media Library
                      </p>
                    </div>
                    <div className="w-full border border-gray-500"></div>
                    <div className="ml-9 pt-5  pr-6 gap-2">
                      <div className="flex p-1">
                        <img
                          src="flex_ check.png"
                          className="w-[35px] mt-2 p-1 h-[5vh] mr-2"
                        ></img>
                        <p className="text-sm text-[#333333]">
                          25 video uploads included, 1 Media site with options
                          to add more
                        </p>
                      </div>
                      <div className="flex p-1">
                        <img
                          src="flex_ check.png"
                          className="w-[30px] mt-2 p-1 h-[5vh] mr-2"
                        ></img>
                        <p className="text-sm text-[#333333]">
                          Upload videos directly from your computer
                        </p>
                      </div>
                      <div className="flex p-1">
                        <img
                          src="flex_ check.png"
                          className="w-[30px] mt-2 p-1 h-[5vh] mr-2"
                        ></img>
                        <p className="text-sm text-[#333333]">
                          Import past event recordings in a few clicks
                        </p>
                      </div>
                      <div className="flex p-1">
                        <img
                          src="flex_ check.png"
                          className="w-[30px] mt-2 p-1 h-[5vh] mr-2"
                        ></img>
                        <p className="text-sm text-[#333333]">
                          Effortlessly set up new events or import details
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-[28vw] bg-[#FFFFFF] lg:h-[52vh] mb-7 shadow-xl rounded-2xl">
                    <div className="flex  p-3 pl-2 pt-3">
                      <img
                        src="flex_ movies.png"
                        className="p-1 bg-[#D2DB51] rounded-full"
                      ></img>

                      <p className="text-[#373F66] ml-8 mt-1 text-xl font-medium">
                        Media Library
                      </p>
                    </div>
                    <div className="w-full border border-gray-500"></div>
                    <div className="ml-9 pt-5  pr-6 gap-2">
                      <div className="flex p-1">
                        <img
                          src="flex_ check.png"
                          className="w-[35px] mt-2 p-1 h-[5vh] mr-2"
                        ></img>
                        <p className="text-sm text-[#333333]">
                          25 video uploads included, 1 Media site with options
                          to add more
                        </p>
                      </div>
                      <div className="flex p-1">
                        <img
                          src="flex_ check.png"
                          className="w-[30px] mt-2 p-1 h-[5vh] mr-2"
                        ></img>
                        <p className="text-sm text-[#333333]">
                          Upload videos directly from your computer
                        </p>
                      </div>
                      <div className="flex p-1">
                        <img
                          src="flex_ check.png"
                          className="w-[30px] mt-2 p-1 h-[5vh] mr-2"
                        ></img>
                        <p className="text-sm text-[#333333]">
                          Import past event recordings in a few clicks
                        </p>
                      </div>
                      <div className="flex p-1">
                        <img
                          src="flex_ check.png"
                          className="w-[30px] mt-2 p-1 h-[5vh] mr-2"
                        ></img>
                        <p className="text-sm text-[#333333]">
                          Effortlessly set up new events or import details
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* footer */}

            <div className="mt-10  lg:flex ">
              <div className=" lg:p-12 lg:w-[65vw] rounded-2xl ml-7 lg:mr-5 lg:ml-15  lg:border-2 border-gray-200">
                <div className="lg:flex grid grid-cols-2  gap-3 mb-10 lg:gap-8">
                  <div className="lg:w-[15vw]">
                    <p className="font-semibold text-lg mb-9">Product</p>
                    <p className=" font-normal mb-5 text-medium">Webinar+</p>
                    <p className=" font-normal mb-5 text-medium">Media+</p>
                    <p className=" font-normal mb-5 text-medium">
                      Generate Interest👀
                    </p>
                    <p className=" font-normal mb-5 text-medium">
                      Capture Intent🤔
                    </p>
                    <p className=" font-normal mb-5 text-medium">
                      Prove Impact💥
                    </p>
                    <p className=" font-normal mb-5 text-medium">
                      Repurpose Content📣
                    </p>
                  </div>
                  <div className="lg:w-[15vw]">
                    <p className="font-semibold text-lg mb-9">Who are you</p>
                    <p className=" font-normal mb-5 text-medium">Webinar+</p>
                    <p className=" font-normal mb-5 text-medium">Media+</p>
                    <p className=" font-normal mb-5 text-medium">
                      Generate Interest👀
                    </p>
                    <p className=" font-normal mb-5 text-medium">
                      Capture Intent🤔
                    </p>
                    <p className=" font-normal mb-5 text-medium">
                      Prove Impact💥
                    </p>
                    <p className=" font-normal mb-5 text-medium">
                      Repurpose Content📣
                    </p>
                  </div>
                  <div className="lg:w-[15vw] mt-5 lg:mt-0">
                    <p className="font-semibold text-lg mb-9">Resources</p>
                    <p className=" font-normal mb-5 text-medium">Webinar+</p>
                    <p className=" font-normal mb-5 text-medium">Media+</p>
                    <p className=" font-normal mb-5 text-medium">
                      Generate Interest👀
                    </p>
                    <p className=" font-normal mb-5 text-medium">
                      Capture Intent🤔
                    </p>
                    <p className=" font-normal mb-5 text-medium">
                      Prove Impact💥
                    </p>
                    <p className=" font-normal mb-5 text-medium">
                      Repurpose Content📣
                    </p>
                  </div>
                  <div className="lg:w-[15vw] mt-5 lg:mt-0">
                    <p className="font-semibold text-lg mb-9">About us</p>
                    <p className=" font-normal mb-5 text-medium">Webinar+</p>
                    <p className=" font-normal mb-5 text-medium">Media+</p>
                    <p className=" font-normal mb-5 text-medium">
                      Generate Interest👀
                    </p>
                    <p className=" font-normal mb-5 text-medium">
                      Capture Intent🤔
                    </p>
                    <p className=" font-normal mb-5 text-medium">
                      Prove Impact💥
                    </p>
                    <p className=" font-normal mb-5 text-medium">
                      Repurpose Content📣
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block w-[55vw] mb-12 border bg-gray-600"></div>
                <div className="hidden lg:flex gap-12">
                  <img src="/Group.png"></img>
                  <img src="/Group.png"></img>
                  <img src="/Group.png"></img>
                  <img src="/Clip path group.png"></img>
                  <img src="/Clip path group (1).png"></img>
                </div>
              </div>

              <div className="lg:w-[27vw] ">
                <div className="lg:shadow-xl lg:border-2 border-gray-200  rounded-xl p-10">
                  <h1 className="font-semibold text-xl">Contact us</h1>
                  <p className="text-gray-400 text-medium mt-5 mb-3">
                    to see what Webinar+ can do for your business
                  </p>
                  <div className="pt-9 flex">
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className=" p-2 border-2 border-gray-200  mb-2 shadow-2xl rounded-xl"
                    ></input>
                    <button className="bg-black w-[9vw] h-[6vh] lg:w-[3vw] rounded-full p-2 ml-3 ">
                      <img src="/image.png" className="lg:w-[2vw]   "></img>
                    </button>
                  </div>
                </div>

                <div className="p-10 mt-5 lg:border-2 border-gray-200 rounded-2xl">
                  <div className=" relative justify-items-center">
                    <img src="g2-seeklogo.com 1.png"></img>
                    <p className="absolute top-5 left-10 rounded-3xl border-2 p-1 border-gray-200">
                      Read our reviews on G2.com
                    </p>
                  </div>
                </div>
                <div className="flex ml-6 gap-3 mt-9">
                  <img
                    src="linkd.png"
                    className="p-5 rounded-xl lg:w-[6vw] lg:border-2 border-gray-200"
                  ></img>
                  <img
                    src="face.png"
                    className="p-5 rounded-xl lg:w-[6vw] lg:border-2 border-gray-200"
                  ></img>
                  <img
                    src="X.png"
                    className="p-5 rounded-xl lg:w-[6vw] lg:border-2 border-gray-200"
                  ></img>
                  <img
                    src="insta.png"
                    className="p-5 rounded-xl lg:w-[6vw] lg:border-2 border-gray-200"
                  ></img>
                </div>
              </div>
            </div>

            <div className=" lg:mt-5 mt-20  mb-10 lg:ml-15 mr-4 lg:flex p-5 lg:border border-gray-200 justify-items-center lg:justify-between rounded-2xl">
              <p className="font-semibold">
                © 2022 Hubilo. All rights reserved
              </p>
              <div className="lg:flex justify-items-center  lg:justify-items-normal lg:gap-16">
                <p className="mt-9 lg:mt-0 ">Terms of Use</p>
                <p className="mt-5 lg:mt-0 ">Privacy Policy</p>
                <p className="mt-5 lg:mt-0 ">Security and Compliance</p>
                <p className="mt-5 lg:mt-0 ">Cookie Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
