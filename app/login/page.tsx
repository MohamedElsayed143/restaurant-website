import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";

import { MdLockOutline } from "react-icons/md";

const LoginPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full flex-1
    px-20 text-center min-h-screen py-2 bg-gray-100"
    >
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-4xl">
        {/* SIGN IN */}
        <div className="w-full md:w-3/5 p-5">
          <div className="text-left font-bold text-amber-500">Elkhadry</div>
          <div className="py-10">
            <h2 className="text-3xl font-bold text-amber-500 mb-2">
              Sign in to Account
            </h2>
            <div className="border-2 w-10 border-amber-500 inline-block mb-2"></div>
            {/* SOCIALS LOGIN */}
            <div className="flex justify-center my-2">
              <a
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaGoogle className="text-sm" />
              </a>
              <a
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaFacebookF className="text-sm" />
              </a>
            </div>
            <p className="text-gray-400 my-3">Or Use Your Email Account</p>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                <FaRegEnvelope className="text-gray-400 m-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                <MdLockOutline className="text-gray-400 m-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
              <div className="flex justify-between w-64 mb-5">
                <label className="flex items-center text-xs">
                  <input type="checkbox" name="remember" className="mr-1" />
                  Remember Me
                </label>
                <a href="#" className="text-xs">
                  Forgot Password?
                </a>
              </div>
              <a
                href="#"
                className="border-2 border-amber-500 text-amber-500 rounded-full px-12
           py-2 inline-block font-semibold hover:bg-amber-500 hover:text-white"
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
        {/* SIGN UP */}
        <div
          className="w-full md:w-2/5 bg-amber-500 text-white 
  rounded-b-2xl md:rounded-tr-2xl md:rounded-br-2xl 
  py-12 md:py-36 px-6 md:px-12"
        >
          <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className="mb-10">
            Join us today and enjoy exclusive grilled flavors made just for you!
          </p>
          <a
            href="#"
            className="border-2 border-white rounded-full px-12
           py-2 inline-block font-semibold hover:bg-white hover:text-amber-500"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
