import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Blob from "../components/Blob";
import HeroForm from "../components/HeroForm";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <section className="flex justify-around  pt-28  ">
        {/* Left Section */}
        <div className="flex flex-col max-w-md  space-y-1 my-10  items-center py-5  ">
          <h1 className=" text-2xl font-semibold">Book your Free Class</h1>
          <p className=" font-semibold text-gray-500 ">
            Learn from India's Best Teachers
          </p>
          <h2 className=" text-xl font-semibold ">Enter Your Details</h2>
          <HeroForm></HeroForm>
        </div>
        {/* Right Section */}
        <div className="flex relative  w-1/3">
          <div className="absolte ">
            <Blob color="#59B2FF" width="500px"></Blob>
          </div>
          <div className="relative top-[300px] right-24 ">
            <Blob color="#80B2BD" width="300px"></Blob>
          </div>
          <div className="relative top-[250px] left-[300px] ">
            <Blob color="#FDCB6E" width="300px"></Blob>
          </div>

          <img
            src="/assets/home/hero_boy.png"
            alt=""
            className=" absolute -bottom-24 right-28"
          />
          <img
            src="/assets/home/hero_cat.png"
            alt=""
            className=" absolute -bottom-24 -right-20"
          />
        </div>
      </section>
      {/* Dashboard */}
      <section className=" mt-64 flex justify-evenly ">
        <div className="flex bg-[#EBFBF3] h-80 w-[549px] p-3 rounded">
          <div className="flex flex-col   justify-center  ">
            <h1 className=" font-bold  text-xl">Student Dashboard</h1>
            <h3 className=" w-72  text-gray-500 font-medium text-lg mt-5">
              Get Study Material, Sample Papers, Notes & NCERT Textbook Solution
            </h3>
            <button className="bg-gradient-to-r from-orange-400 to-rose-400 h-9  w-48 rounded-md text-white font-semibold mt-9">
              Student Dashboard
            </button>
          </div>
          <div className=" relative flex  items-end">
            <img
              src="/assets/home/dashboard/dna.png"
              alt=""
              className="absolute top-0 left-16 "
            />
            <img
              src="/assets/home/dashboard/earth.png"
              alt=""
              className="absolute  top-16 left-0 "
            />
            <img
              src="/assets/home/dashboard/satelite_small.png"
              alt=""
              className="absolute bottom-14 -left-3 "
            />
            <img
              src="/assets/home/dashboard/satelite.png"
              alt=""
              className="absolute  top-8 right-8"
            />
            <img
              src="/assets/home/dashboard/setting.png"
              alt=""
              className="absolute  bottom-20 -left-2"
            />
            <img
              src="/assets/home/dashboard/stu_boy.png"
              alt=""
              className="  z-10"
            />
          </div>
        </div>
        <div className="flex bg-[#EBFBF3] h-80 w-[549px] p-3 relative">
          <div className="flex flex-col   justify-center ">
            <h1 className="font-bold  text-xl">Teacher Dashboard</h1>
            <h3 className="w-72  text-gray-500 font-medium text-lg mt-5 z-10">
              View Your Dashboard and Manage Your Classes
            </h3>
            <button className="bg-gradient-to-r from-orange-400 to-rose-400 h-9  w-48 rounded-md text-white font-semibold mt-9">
              Teacher Dashboard
            </button>
          </div>

          <img
            src="/assets/home/dashboard/teacher.png"
            alt=""
            className="absolute bottom-12 right-3"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
