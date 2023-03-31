import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaRegCopyright} from "react-icons/fa"
import "./footer.css"

const Footer=()=>{
  // bg--600 text-green min-h-[30vh] pt-7
  return (
    <footer className='footer '>
       <div className='uppercase flex-wrap flex justify-center my-4 gap-6'></div>
         <hr className='border-1' />
       <p className='text-center mt-5 leading-tight'>  
         ReadIt the smart reading choice.
       </p>
       <div className='flex gap-8 justify-center my-10 '>
          <FaFacebookF size={25} className="hover:text-orange hover:cursor-pointer"/>
          <FaTwitter size={25} className="hover:text-orange hover:cursor-pointer"/>
          <FaInstagram size={25} className="hover:text-orange hover:cursor-pointer"/>
          <div className="footer_anchor">
            <FaGithub size={25} className="hover:text-orange hover:cursor-pointer"/>
            <link url={"https://github.com/Bloom-Tauta/ReadIt"}/>
          </div>
       </div>
       <div className='copyright_bg p-4 flex items-center justify-center'>
          <FaRegCopyright /> <span className='ml-3'>Copyright @2023 All rights reserved | Made by ReadIt Inc</span>
       </div>
    </footer>
   
  )
}

export default Footer