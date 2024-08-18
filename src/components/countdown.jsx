

import React, { useState, useEffect } from "react";
import { Typography, Card, Button } from "antd";
import { motion } from "framer-motion";
import moment from "moment/moment";
import Fireworks from "./Fireworks"; // Import your Fireworks component
import VideoDrawer from "../pages/Drawer";

const { Title, Text } = Typography;

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isEnded, setIsEnded] = useState(false); // Track if the countdown has ended
  const [drawerVisible, setDrawerVisible] = useState(false); // State to control Drawer visibility

  useEffect(() => {
    if (Object.keys(timeLeft).length === 0 || isEnded) {
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, isEnded]);

  const endCountdown = () => {
    setIsEnded(true);
    setTimeLeft({});
    {
      setTimeout(() => {
        setDrawerVisible(true); // Open the drawer when countdown ends
      }, 5000);
    }
  };

  const openDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const timeComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timeComponents.push(
      <motion.div
        key={interval}
        className="text-center mx-2"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center bg-white bg-opacity-80 font-vibes">
          <p  className="m-0 text-3xl font-bold text-red-950">
            {timeLeft[interval]}
          </p>
        <p className="text-red-950 text-xl">{interval}</p>
        </Card>
      </motion.div>
    );
  });

  return (
    <div className="my-8">
      {!isEnded && (
        <div className="text-center text-2xl font-light tracking-wide text-gray-100 mb-4 font-vibes lowercase">
          countdown to Your Special Day{" "}
          <span
            className="animate-bounce cursor-pointer font-bold "
            onClick={endCountdown}
          >
            {" "}
            ↓
          </span>
        </div>
      )}
      <div className="flex justify-center">
        {timeComponents.length ? (
          timeComponents
        ) : (
          <div className="text-center font-vibes">
            <span className="text-pink-100 font-light text-5xl tracking-wide">
              do we have a minute?
            </span>
            <Fireworks />
            {/* <Button type="primary" onClick={openDrawer}>
              Watch Video
            </Button> */}
          </div>
        )}
      </div>
      {/* {!isEnded && (
        <div className="flex justify-center mt-4">
          <Button type="primary" onClick={endCountdown}>
            End Countdown
          </Button>
        </div>
      )} */}

      <VideoDrawer
        visible={drawerVisible}
        onClose={closeDrawer}
        videoUrl="your-video-url.mp4" // Replace with your actual video URL
      />
    </div>
  );
};

export default Countdown;
