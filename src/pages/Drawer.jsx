import React from "react";
import { Drawer, Button } from "antd";
import video from "../assets/video.mp4";

const VideoDrawer = ({ visible, onClose }) => {
  return (
    <Drawer
      title={null} // Remove the title
      placement="right"
      onClose={onClose}
      visible={visible}
      width={500}
      drawerStyle={{ padding: 0 }} // Remove default padding
      bodyStyle={{ padding: 0, margin: 0 }}
      width="100vw"
      height={"100vh"}
    >
      <video controls autoPlay style={{ width: "100%" }}>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Drawer>
  );
};

export default VideoDrawer;
