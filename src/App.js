import Footer from './components/Footer'
import Navbar from './components/Navbar'
import React from 'react'
import { ImWhatsapp } from 'react-icons/im'
import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import Fade from '@mui/material/Fade'
import Box from '@mui/material/Box'
import { RxCross2 } from 'react-icons/rx'
import IconButton from '@mui/material/IconButton'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

function App() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className="flex flex-col font-body">
      <Navbar />
      <div className="flex flex-col gap-y-2 items-center justify-around w-full sm:m-2">
        <div className="">
          <img
            src="../assets/header-img.png"
            className="max-h-[500px] w-[1000px]"
            alt=""
          />
        </div>
        <div className="flex flex-col font-body  text-xs sm:text-xl items-center sm:justify-around w-full px-5 xl:px-60">
          <div className="m-10 text-lg font-medium">
            <p className="font-medium mb-3">
              Did you know that LearnCab is a unique
              <span className="font-bold">
                #studyanytimeanywhereonanydevice
              </span>{' '}
              online coaching platform for CMA students that works on phones,
              tablets, and computers?
            </p>
            <p className="font-medium mb-3">
              The best thing about LearnCab is that you can use it on all of
              your devices with your single account and switch seamlessly across
              devices, with your view history available across all of them.
            </p>
            <p className="mb-1">
              With a simple student-friendly credit-based subscription system
              you get access to all papers of the group(s) of your course level
              for the entire duration of your subscription.
            </p>

            <div className="flex items-center justify-center border rounded-lg p-6 shadow-md my-5 sm:m-5 md:m-10 md:mx-56 xl:mx-72">
              <ul className="mb-6 font-bold">
                <li>
                  <span className="flex flex-row gap-x-4 items-center mb-3">
                    <span>
                      <img
                        src="../assets/hd-videos-lectures.png"
                        alt=""
                        className="max-h-14 sm:max-h-10"
                      />
                    </span>
                    <span>
                      Access to recorded HD video lectures (In English)
                    </span>
                  </span>

                  <li className="flex flex-row gap-x-4 items-center mb-3">
                    <span>
                      <img
                        src="../assets/download-videos.png"
                        alt=""
                        className="max-h-10"
                      />
                    </span>{' '}
                    Downloadable notes
                  </li>
                  <li className="flex flex-row gap-x-4 items-center mb-3">
                    <span>
                      <img
                        src="../assets/interactive-quizes.png"
                        alt=""
                        className="max-h-10"
                      />
                    </span>{' '}
                    Chapter-wise quizzes, wherever applicable
                  </li>
                </li>
                <li className="flex flex-row gap-x-4 items-center mb-3">
                  <span>
                    <img
                      src="../assets/mock-exams.png"
                      alt=""
                      className="max-h-10"
                    />
                  </span>
                  Mock tests
                </li>
                <li className="flex flex-row gap-x-4 items-center">
                  <span>
                    <img
                      src="../assets/inbuilt-solving.png"
                      alt=""
                      className="max-h-10"
                    />
                  </span>
                  Doubt resolution (Q&A)
                </li>
              </ul>
            </div>

            <p className="mb-1">
              Please sign up for a FREE TRIAL in case you haven't done so
              already, and discover why LearnCab is India's top online coaching
              platform for CMA students
            </p>
            <p className="mb-1 font-bold text-lg sm:text-xl">
              Our prices for the December 2023 attempt are:
            </p>
            <div className="flex flex-row justify-center gap-x-4 mb-6 mt-4">
              <div class="border max-w-md sm:p-16 rounded overflow-hidden shadow-2xl">
                <div class="px-4 py-2">
                  <div class="font-bold sm:text-xl mb-10 text-start ml-1">
                    Single Group
                  </div>
                  <p class="border-[#02ca028c] p-4 rounded bg-[#02ca2e5e] text-[#005312] sm:text-base">
                    pay only ₹13,999
                  </p>
                </div>
              </div>
              <div class="border max-w-md sm:p-16 rounded overflow-hidden shadow-2xl">
                <div class="px-4 py-2">
                  <div class="font-bold sm:text-xl mb-10 text-start ml-1">
                    {' '}
                    Both Group
                  </div>
                  <p class="border-[#02ca028c] p-4 rounded bg-[#02ca2e5e] text-[#005312] sm:text-base">
                    pay only ₹21,999
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-2 flex flex-row items-center justify-center gap-x-4">
              Call or Whatsapp :
              <span className="flex flex-row gap-x-2 items-center justify-center font-bold text-lg sm:text-xl">
                <ImWhatsapp />
                <a href="tel:7483800690">7483800690</a>
              </span>
            </p>
          </div>
        </div>

        <div className="mb-5">
          <button
            data-modal-target="defaultModal"
            data-modal-toggle="defaultModal"
            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl p-5 px-8 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={handleOpen}
          >
            Contact us
          </button>
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
              <span className='flex flex-row items-center justify-between mb-4'>
                <p className='font-body text-xl text-gray-500'>Contact Form</p>
                <span className='border rounded-3xl'>
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
  )
}

export default App
