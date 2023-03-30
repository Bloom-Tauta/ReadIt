import React from 'react'
import {FaYoutube, FaFacebookF, FaTwitter, FaInstagram, FaSmileBeam, FaGithub, FaRegCopyright} from "react-icons/fa"
import {GrLinkedinOption}  from "react-icons/gr"
import footer from "./footer.css"

function Footer(){
  // bg--600 text-green min-h-[30vh] pt-7
  return (
    // <footer className='footer '>
    //    <div className='uppercase flex-wrap flex justify-center my-4 gap-6'>
    //      {/* <a href='#'>About us</a>
    //      <a href='#'>Blog</a>
    //      <a href='#'>Questions</a>
    //      <a href='#'>Faqs</a>
    //      <a href='#'>Login</a> */}
    //    </div>
    //      <hr className='border-4' />
    //    <p className='text-center mt-5 leading-tight'>  
    //      ReadIt the smart reading choice.
    //    </p>
    //    <div className='flex gap-8 justify-center my-10 '>
    //       <FaFacebookF size={25} className="hover:text-orange hover:cursor-pointer"/>
    //       <FaTwitter size={25} className="hover:text-orange hover:cursor-pointer"/>
    //       <FaInstagram size={25} className="hover:text-orange hover:cursor-pointer"/>
    //       <FaGithub size={25} className="hover:text-orange hover:cursor-pointer"/>
    //    </div>
    //    <div className='bg-gray-500 p-7 flex items-center justify-center'>
    //       <FaRegCopyright /> <span className='ml-3'>Copyright @2023 All rights reserved | Made by ReadIt Inc</span>
    //    </div>
    // </footer>
    <footer className='footer'>
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links-div">
            <h4>For Business</h4>
            <a href="/employer">
            <p>Employer</p>
            </a>
            <a href="/healthplan">
            <p>Health Plan</p>
            </a>
            <a href="/individual">
            <p>Individual</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Resources</h4>
            <a href="/resource">
              <p>Resource center</p>
            </a>
            <a href="/resource">
              <p>Testimonials</p>
            </a>
            <a href="/resource">
              <p>STV</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Partners</h4>
            <a href="/employer">
              <p>Swing Tech</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Company</h4>
            <a href="/about">
              <p>About</p>
            </a>
            <a href="/press">
              <p>Press</p>
            </a>
            <a href="/career">
              <p>Career</p>
            </a>
            <a href="/contact">
              <p>Contact</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer