"use client";
import React from "react";
import Countdown from "react-countdown";

const endingDate = Date.now() + 100 * 24 * 60 * 60 * 1000;

function CountDown() {
  return <Countdown className="font-bold text-5xl text-yellow-300" date={endingDate} />;
}

export default CountDown;
