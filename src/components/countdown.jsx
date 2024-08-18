// import React, { useState, useEffect } from 'react';
// import { Typography, Card } from 'antd';
// import { motion } from 'framer-motion';
// import moment from 'moment/moment';

// const { Title, Text } = Typography;

// const Countdown = ({ targetDate }) => {

//   const now = moment().format('YYYY-MM-DD HH:mm:ss');

// // console.log(now.toString());

// // console.log(now.format('YYYY-MM-DD HH:mm:ss'));

//   const calculateTimeLeft = () => {
//     const difference = +new Date(targetDate) - +new Date();
//     let timeLeft = {};

//     if (difference > 0) {
//       timeLeft = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     }

//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearTimeout(timer);
//   });

//   const timeComponents = [];

//   Object.keys(timeLeft).forEach((interval) => {
//     if (!timeLeft[interval]) {
//       return;
//     }

//     timeComponents.push(
//       <motion.div
//         key={interval}
//         className="text-center mx-2"
//         initial={{ scale: 0.5, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Card className="w-24 h-24 flex items-center justify-center bg-white bg-opacity-80 font-vibes">
//           <Title level={2} className="m-0 text-indigo-600">
//             {timeLeft[interval]}
//           </Title>
//         </Card>
//         <Text className="text-white">{interval}</Text>
//       </motion.div>
//     );
//   });

//   return (
//     <div className="my-8">
//       <div className="text-center text-2xl font-light tracking-wide text-gray-100 mb-4 font-vibes lowercase">
//         countdown to Your Special Day
//       </div>
//       <div className="flex justify-center">
//         <button onClick={() =>{  targetDate=now; timeComponents.length = 0;}}>Get it</button>
//         {timeComponents.length ? timeComponents : <span>It's time!</span>}
//       </div>
//     </div>
//   );
// };

// export default Countdown;

// import React, { useState, useEffect } from "react";
// import { Typography, Card, Button } from "antd";
// import { motion } from "framer-motion";
// import moment from "moment/moment";
// import Fireworks from "./Fireworks"; // Import your Fireworks component

// const { Title, Text } = Typography;

// const Countdown = ({ targetDate }) => {
//   const now = moment().format("YYYY-MM-DD HH:mm:ss");

//   const calculateTimeLeft = () => {
//     const difference = +new Date(targetDate) - +new Date();
//     let timeLeft = {};

//     if (difference > 0) {
//       timeLeft = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     }

//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
//   const [isEnded, setIsEnded] = useState(false); // Track if the countdown has ended

//   useEffect(() => {
//     if (Object.keys(timeLeft).length === 0 || isEnded) {
//       return;
//     }

//     const timer = setTimeout(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [timeLeft, isEnded]);

//   const endCountdown = () => {
//     setIsEnded(true);
//     setTimeLeft({});
//   };

//   const timeComponents = [];

//   Object.keys(timeLeft).forEach((interval) => {
//     if (!timeLeft[interval]) {
//       return;
//     }

//     timeComponents.push(
//       <motion.div
//         key={interval}
//         className="text-center mx-2"
//         initial={{ scale: 0.5, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Card className="w-24 h-24 flex items-center justify-center bg-white bg-opacity-80 font-vibes">
//           <Title level={2} className="m-0 text-indigo-600">
//             {timeLeft[interval]}
//           </Title>
//         </Card>
//         <Text className="text-white">{interval}</Text>
//       </motion.div>
//     );
//   });

//   return (
//     <div className="my-8">
//       {!isEnded && (
//         <div
//           className="text-center text-2xl font-light tracking-wide text-gray-100 mb-4 font-vibes lowercase"
//         >
//           countdown to Your Special Day  <span className="animate-bounce cursor-pointer font-bold "           onClick={endCountdown}
//  > ↓</span>
//         </div>
//       )}

//       <div className="flex justify-center">
//         {timeComponents.length ? (
//           timeComponents
//         ) : (
//           <div className="text-center font-vibes">
//             <span className="text-pink-100 font-light text-5xl tracking-wide">do we have a minute?</span>
//             <Fireworks />
//           </div>
//         )}
//       </div>
//       {/* {!isEnded && (
//         <div className="flex justify-center mt-4">
//           <Button type="primary" onClick={endCountdown}>
//             End Countdown
//           </Button>
//         </div>
//       )} */}
//     </div>
//   );
// };

// export default Countdown;

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
        <Card className="w-24 h-24 flex items-center justify-center bg-white bg-opacity-80 font-vibes">
          <Title level={2} className="m-0 text-indigo-600">
            {timeLeft[interval]}
          </Title>
        </Card>
        <Text className="text-white">{interval}</Text>
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
