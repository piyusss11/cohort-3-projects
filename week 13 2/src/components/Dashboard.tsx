import React from "react";
import {
  calendar,
  camera,
  joinWebinar,
  leftArrow,
  openRecordings,
  rightArrow,
  scheduleWebinar,
} from "../assets/exportingSvg";

const Dashboard = () => {
  return (
    <div className="w-full bg-[#eeeee4]">
      <div className="flex flex-col h-full">
        <img
          className="h-[15%] object-cover"
          src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
        <div className="grid grid-cols-10 h-full">
          <div className="col-span-2 bg-white ml-12 -mt-8 h-72 w-52 rounded-lg shadow-lg p-8 flex flex-col justify-center items-center">
            <img
              className="w-20 h-20 rounded"
              src="https://avatars.githubusercontent.com/u/143982052?v=4"
              alt=""
            />
            <h1 className="font-semibold text-lg mt-4 ">Piyush Chauhan</h1>
            <h1 className="text-gray-600 text-sm my-2">piyusss11@gmail.com</h1>
            <h1 className="text-gray-600 text-sm">9988776655</h1>
            <h1 className="text-gray-600 text-sm mt-2">Delhi,India</h1>
          </div>
          <div className="col-span-5 bg-[#eeeee4] p-4  h-full">
            <h1 className="tracking-tighter my-2">Monday, 14 October</h1>
            <h1 className="text-3xl font-semibold my-2">
              Good morning, Piyush!👋
            </h1>
            <div className="w-[95%] h-80 mt-12 p-4 bg-white rounded-lg shadow-lg">
              <div className="flex justify-between bg-[#F5F7F7] px-4 py-2 rounded">
                <div className="flex items-center gap-4">
                  <img className="w-6 h-6" src={calendar} alt="" />
                  Monday, 14 October 2024
                </div>
                <div className="flex items-center gap-2">
                  <img className="w-6 h-6" src={leftArrow} alt="" />
                  <img className="w-6 h-6" src={rightArrow} alt="" />
                </div>
              </div>
              <div className="flex gap-4 mt-4 border-b-2 pb-3  border-gray-200">
                <div className="pr-2 border-r-2 border-[#3fdccf]">
                  <h2 className="text-lg">11:30 AM</h2>
                  <h2 className="text-xs text-gray-500">11:30 AM</h2>
                </div>
                <div className="">
                  <div className="flex items-center gap-2">
                    <h1 className="text-sm text-gray-500">Live</h1>
                    <img className="w-4 h-4" src={camera} alt="" />
                  </div>
                  <h1>Ux Webinar</h1>
                </div>
              </div>
              <div className="flex gap-4 mt-4 border-b-2 pb-3  border-gray-200">
                <div className="pr-2 border-r-2 border-[#3fdccf]">
                  <h2 className="text-lg">11:30 AM</h2>
                  <h2 className="text-xs text-gray-500">11:30 AM</h2>
                </div>
                <div className="">
                  <div className="flex items-center gap-2">
                    <h1 className="text-sm text-gray-500">Live</h1>
                    <img className="w-4 h-4" src={camera} alt="" />
                  </div>
                  <h1>Ux Webinar</h1>
                </div>
              </div>
              <div className="flex gap-4 mt-4  pb-3  border-gray-200">
                <div className="pr-2 border-r-2 border-[#3fdccf]">
                  <h2 className="text-lg">11:30 AM</h2>
                  <h2 className="text-xs text-gray-500">11:30 AM</h2>
                </div>
                <div className="">
                  <div className="flex items-center gap-2">
                    <h1 className="text-sm text-gray-500">Live</h1>
                    <img className="w-4 h-4" src={camera} alt="" />
                  </div>
                  <h1>Ux Webinar</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 h-full bg-[#eeeee4]">
            <div className="bg-white mt-36 p-4 flex flex-wrap items-center gap-10 w-80 h-64 rounded-lg shadow-lg">
              <div className="flex flex-col items-center justify-center">
                <div className="bg-[#3fdccf] w-12 h-12 rounded flex justify-center items-center">
                  <img
                    className=" w-6 h-6 rounded"
                    src={scheduleWebinar}
                    alt=""
                  />
                </div>
                <h1 className="text-sm">Schedule a Webinar</h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="bg-[#3fdccf] w-12 h-12 rounded flex justify-center items-center">
                  <img className=" w-6 h-6 rounded" src={joinWebinar} alt="" />
                </div>
                <h1 className="text-sm">Schedule a Webinar</h1>
              </div>
              <div className=" flex flex-col items-center justify-center">
                <div className="bg-[#3fdccf] w-12 h-12 rounded flex justify-center items-center">
                  <img
                    className="w-6 h-6 rounded"
                    src={openRecordings}
                    alt=""
                  />
                </div>
                <h1 className="text-sm">Schedule a Webinar</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
