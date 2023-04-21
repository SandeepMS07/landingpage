import Navbar from "../Navbar";
import Footer from "../Footer";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import { RxCross2 } from "react-icons/rx";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import Testimonials from "../Testimonials";
import KnowYourTeacher from "../KnowYourTeacher";
import WhatYouGet from "../WhatYouGet";
import PriceCard from "../PriceCard";
import Note from "../Note";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const MainPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex flex-col font-body bg-gray-200">
      <Navbar />
      <div className="mb-2 text-2xl font-extrabold leading-none tracking-tight text-center text-gray-900 md:text-3xl lg:text-4xl">
        <h1>CS EXECUTIVE Syllabus 2022 Online Live Classes</h1>
      </div>
      <div className="flex flex-col gap-y-2 items-center justify-around m-1 sm:m-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-auto h-auto mt-4">
          <div>
            <img
              src="../assets/1.png"
              className="border  rounded-t-2xl rounded-bl-2xl w-[350px] sm:w-[450px] drop-shadow-lg"
              alt=""
            />
          </div>
          <div>
            <img
              src="../assets/2.png"
              className="border  rounded-t-2xl rounded-bl-2xl w-[350px] sm:w-[450px] drop-shadow-lg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col font-body  text-xs sm:text-xl items-center sm:justify-around w-full xl:px-32 2xl:px-80">
          <Testimonials handleOpen={handleOpen} />
          <KnowYourTeacher handleOpen={handleOpen} />
          <WhatYouGet handleOpen={handleOpen} />
          <PriceCard handleOpen={handleOpen} />
          <Note />
        </div>
      </div>

      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <span className="flex flex-row items-center justify-between mb-4">
                <p className="font-body text-xl text-gray-500">Contact Form</p>
                <span className="border rounded-3xl">
                  <IconButton onClick={handleClose}>
                    <RxCross2 />
                  </IconButton>
                </span>
              </span>
              <iframe
                width="100%"
                height="90%"
                src="https://offers.learncab.com/#/forms/47153D93"
                title="Forms"
              ></iframe>
            </Box>
          </Fade>
        </Modal>
      </div>

      <Footer />
    </div>
  );
};

export default MainPage;
