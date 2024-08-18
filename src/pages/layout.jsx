// import React from "react";
// import { motion } from "framer-motion";
// import { Typography, Button } from "antd";
// import { HeartFilled } from "@ant-design/icons";

// const { Title } = Typography;

// const LandingPage = () => {
//   return (
//     <div className=" min-h-screen bg-gradient-to-r from-pink-950 via-pink-700 to-pink-900 flex flex-col items-center justify-center">
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-center"
//       >
//         <p className="text-white text-6xl mb-8 drop-shadow-md leading-relaxed">
//           Happy Birthday, My Love!
//         </p>
//       </motion.div>

//       <motion.div
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 0.5, delay: 1 }}
//       >
//         <HeartFilled className="text-red-950 drop-shadow-lg text-9xl mb-8 animate-pulse" />
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 1.5 }}
//       >
//         <Button
//           type="primary"
//           size="large"
//           className="bg-pink-500 border-pink-500 hover:bg-pink-600 hover:border-pink-600"
//         >
//           Click to Start Your Surprise!
//         </Button>
//       </motion.div>
//     </div>
//   );
// };

// export default LandingPage;

import React from "react";
import { motion } from "framer-motion";
import { Typography, Button } from "antd";
import { HeartFilled } from "@ant-design/icons";
import Countdown from "../components/countdown";

const { Title } = Typography;

const LandingPage = () => {
  const birthdayDate = "2024-08-21T00:00:00"; // Example date, adjust as needed

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-950 via-pink-800 to-red-900">
      <div className="flex flex-col items-center justify-center h-screen ">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <div className="flex flex-col gap-5 text-white text-9xl mb-8 drop-shadow-md leading-relaxed">
            Happy Birthday
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
            <p className=" text-pink-300 text-6xl text-right">
              My Love!{" "}
              <span>
                {" "}
                  <HeartFilled className="text-pink-300 drop-shadow-lg text-6xl mb-8 animate-pulse" />
              </span>
            </p>
                </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Countdown targetDate={birthdayDate} />

          {/* <Button
            type="primary"
            size="large"
            className="bg-pink-500 border-pink-500 hover:bg-pink-600 hover:border-pink-600"
          >
            Click to Start Your Surprise!
          </Button> */}
        </motion.div>{" "}
      </div>
      {/* <Timeline /> */}
      {/* <CampingComponent /> */}
    </div>
  );
};

export default LandingPage;
