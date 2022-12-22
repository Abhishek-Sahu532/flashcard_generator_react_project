import React  ,{useEffect, useState}from 'react'
import Facebook from '../Images/facebook-new.png'
import Linkedin from "../Images/linkedin-circled.png";
import Twitter from "../Images/twitter--v3.png";
import WhatsApp from "../Images/whatsapp.png";
import {Button, Modal} from 'react-daisyui'
import {IoMdClose} from 'react-icons/io'
import {BsShare} from 'react-icons/bs'
import {TbCopy} from 'react-icons/tb'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from "react-share";

const ShareCom = ({isOpen, closeModal}) => {

const LINK = `https://www/almabetter.com/abcdefght`;
const [isLinkCopied, setIsLinkCopied] = useState(false);

//this will set default status, after copying the link
 useEffect(()=>{
    isLinkCopied && setTimeout(()=>{
        setIsLinkCopied(false)
    },2000)
 },[isLinkCopied])


    return (
      <>
        <Modal open={isOpen} onClickBackdrop={closeModal} dataTheme={"light"}>
          <Button> ✕ </Button>
          <Modal.Header className="font-bold">Share</Modal.Header>

          <Modal.Body>
            <div className="m-5 flex flex-col">
              <IoMdClose
                onClick={closeModal}
                className="absolute text-slate-500 right-3 top-3 text-2xl cursor-pointer"
              />

              <div className="flex items-center space-x-3">
                <p className="flex items-center flex-1 border-2 p-2 text-xs text-slate-500 border-slate-300 rounded-md border-dashed">
                  Link:
                  <span className="mx-2 font-semibold text-xs overflow-x-hidden text-black">
                    http://www.almabetter.com/asdfjasfdlj
                  </span>
                </p>
                <CopyToClipboard
                  text={LINK}
                  onCopy={() => setIsLinkCopied(true)}
                >
                  <TbCopy className="text-xl text-slate-500 scale-x-[-1] cursor-pointer" />
                </CopyToClipboard>

                <BsShare className="text-xl text-slate-500 cursor-pointer" />
              </div>
              <h2 className="p-2 h-5 ml-3 text-sm text-red-500 font-semibold">
                {isLinkCopied && "Link copied to clipboard"}
              </h2>
              <div className="mt-6 flex items-center space-x-10 justify-center">
                <FacebookShareButton url="https://www.facebook.com/">
                  <img
                    src={Facebook}
                    alt="Facebook"
                    className="w-10 p-2 bg-slate-100 rounded-lg cursor-pointer"
                  />
                </FacebookShareButton>
                <LinkedinShareButton url="https://www.linkedin.com/">
                  <img
                    src={Linkedin}
                    alt="Linkedin"
                    className="w-10 p-2 bg-slate-100 rounded-lg cursor-pointer"
                  />
                </LinkedinShareButton>
                <WhatsappShareButton url="https://web.whatsapp.com/">
                  <img
                    src={WhatsApp}
                    alt="Whatsapp"
                    className="w-10 p-2 bg-slate-100 rounded-lg cursor-pointer"
                  />
                </WhatsappShareButton>
                <TwitterShareButton url="https://twitter.com/">
                  <img
                    src={Twitter}
                    alt="Twitter"
                    className="w-10 p-2 bg-slate-100 rounded-lg cursor-pointer"
                  />
                </TwitterShareButton>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
}

export default ShareCom