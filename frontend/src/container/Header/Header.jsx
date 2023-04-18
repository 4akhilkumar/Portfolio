import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { client } from '../../client';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {

  const [headersData, setHeadersData] = useState([]);

  useEffect(() => {
    client().then((data) => {
      const headerdata = data.Header;
      setHeadersData(headerdata);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">{headersData.nickname && headersData.nickname}</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            {headersData.professional_roles && headersData.professional_roles.map((role, index) => (
              <p key={index} className="p-text">{role}</p>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        {/* <img src={images.profile} alt="profile_bg" /> */}
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {headersData.tech_stack && headersData.tech_stack.map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle.imageUrl} alt={circle.name} />
          </div>
        ))}
      </motion.div>
    </div>
  )
};

export default AppWrap(Header, 'home');
