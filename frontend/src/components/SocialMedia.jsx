import React, { useState, useEffect } from 'react';
import { BsLinkedin, BsTelegram, BsInstagram } from 'react-icons/bs';

import { client } from '../client';

const SocialMedia = () => {

  const [socialMediaDatum, setSocialMediaDatum] = useState([]);

  useEffect(() => {
    client().then((data) => {
      const socialmediadata = data.SocialMedia;
      setSocialMediaDatum(socialmediadata);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div className="app__social">
      <div>
        <a href={socialMediaDatum.LinkedIn} target='_blank' rel='noreferrer'>
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href={socialMediaDatum.Telegram} target='_blank' rel='noreferrer'>
          <BsTelegram />
        </a>
      </div>
      <div>
        <a href={socialMediaDatum.Instagram} target='_blank' rel='noreferrer'>
          <BsInstagram />
        </a>
      </div>
    </div>
  )
};

export default SocialMedia;
