import { motion } from 'framer-motion'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const imgURL = "https://s3-alpha-sig.figma.com/img/37e4/1b74/2e57c61c7bf0271ade32327ddb9d9d17?Expires=1664755200&Signature=LAEbBMm7DpS1wgk7YUVGVB3YaMeYNwslFUGg9Wy6enGaReCxFJnBV7NzSbdPAemGwV~0pmqOP5pJVZE1rgpCnKfmmvdeFCxOcDg6VYafPKt5pa9T6xxhduQtjvkmDH63r1OBaN9XwVL4inWrSmiLVjoPA8FDc16tmH6Bn3aAjJCu765A-5rOdqlGVa7xTQGSNHeNAhtfq6qWupx2m9DKhJa7OYxry9qlc1yqc7luXQxR0-hjk1x2Xj270n5BGHL8-appXOaKm5yw9RfIQfSf-gtq5LoR5h04v2v0ldVbOLNjZ966WVqvD5v2YbEm-vWJx51TClqzZPePuXTLGn7DXQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    const [activeTab, setActiveTab] = useState("home")
    const [toggle, setToggle] = useState(false)
    const [tabMenus, setTabMenus] = useState([
        ['Home', 'home'],
        ['Tickets', 'tickets'],
        ['Destinations', 'destinations'],
        ['Train Schedule', 'schedule'],
      ])

      const handleTabs = (url) => {
        setActiveTab(url)
        setToggle(!toggle)
      }
  return (
    <div className='py-5 px-[7%] flex max-w-[800px] justify-between items-center'>
      <img src={imgURL} alt="nrc"  className="md:w-[84px] w-[56px]"/>
      <ul className='md:flex  hidden'>
      {tabMenus.map(([title, url]) => (
        <li key={`${url}`} className={`px-2 relative ${url === activeTab ? 'text-main' : 'text-main-light hover:text-main'}`}>
            <a href={`#${url}`} onClick={()=>setActiveTab(url)}>
                {title}
        {url === activeTab && <span
        style={{ background: '#5CB33C' }}
        className="absolute inline-flex rounded-full h-2 w-2 left-[50%] -top-3"
      />}
        </a></li>
  ))}
      </ul>

      <div className="md:hidden flex items-center justify-center w-[35px] h-[35px] bg-yellow rounded-full text-night">
            <MenuIcon onClick={() => setToggle(true)} className="cursor-pointer" />

            {
              toggle && (
                <motion.div
                  whileInView={{ x: [300, 0]}}
                  transition={{ duration: 0.85, ease: 'easeOut'}}
                  className="fixed top-0 right-0 bottom-0 w-[80%] z-10 bg-white flex justify-end items-end flex-col shadow-3xl"
                >
                  <CloseIcon onClick={() => setToggle(false)} className="m-6 cursor-pointer" />
                  <ul className="flex justify-start items-start flex-col w-full h-full mt-4">
          {tabMenus.map(([title, url]) =>(
             <li key={`${url}`} className={`m-4 relative ${url === activeTab ? 'text-main ' : 'text-main-light hover:text-main'}`}>
            <a href={`#${url}`} onClick={()=>handleTabs(url)}>
                {title}
        {url === activeTab && <span
        style={{ background: '#5CB33C' }}
        className="absolute inline-flex rounded-full h-2 w-2 left-[50%] -top-3"
      />}
        </a></li>
          ))}
        </ul>
                </motion.div>
              )}
        </div>
    </div>
  )
}

export default Navbar
