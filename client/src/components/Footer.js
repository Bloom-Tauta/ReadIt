import React from 'react'
import {FaYoutube, FaFacebookF, FaTwitter, FaInstagram, FaSmileBeam, FaRegCopyright} from "react-icons/fa"
import {GrLinkedinOption}  from "react-icons/gr"
import footer from "./footer.css"

function Footer(){
  // bg--600 text-white min-h-[30vh] pt-7
  return (
    <footer className='footer '>
       <div className='uppercase flex-wrap flex justify-center my-4 gap-6'>
         {/* <a href='#'>About us</a>
         <a href='#'>Blog</a>
         <a href='#'>Questions</a>
         <a href='#'>Faqs</a>
         <a href='#'>Login</a> */}
       </div>
         <hr className='border-4' />
       <p className='text-center mt-5 leading-tight'>  
         It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,<br />
         Aldus PageMaker including versions of Lorem Ipsum.
       </p>
       <div className='flex gap-8 justify-center my-10 '> 
          <FaYoutube size={25} className="hover:text-orange-600 hover:cursor-pointer"/>
          <GrLinkedinOption size={25} className="hover:text-orange-600 hover:cursor-pointer" />
          <FaFacebookF size={25} className="hover:text-orange-600 hover:cursor-pointer"/>
          <FaTwitter size={25} className="hover:text-orange-600 hover:cursor-pointer"/>
          <FaInstagram size={25} className="hover:text-orange-600 hover:cursor-pointer"/>
          <FaSmileBeam size={25} className="hover:text-orange-600 hover:cursor-pointer"/>
       </div>
       <div className='bg-gray-500 p-7 flex items-center justify-center'>
          <FaRegCopyright /> <span className='ml-5'>Copyright 2023</span>
       </div>
    </footer>
    // <div class="card text-center">
    //         {/* <div class="card-header">
    //             Featured
    //         </div>
    //         <div class="card-body">
    //             <h5 class="card-title">Special title treatment</h5>
    //             <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    //             <a href="#" class="btn btn-primary">Go somewhere</a>
    //         </div> */}
    //         <div style={{}}class="card-footer text-muted">
    //             <h4>Bloom Tauta</h4>
    //             <p>Simple yet precise!!!</p>
    //             <p></p>
    //             <p></p>
    //             <p></p>
    //         </div>
    //     </div>
  )
}

export default Footer