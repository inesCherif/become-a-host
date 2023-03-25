import React from 'react';
import Cropper from './Cropper';

const ProfilePhoto = () => {

  return (
    <div className='profile-photo-container'>
      <h1 className="header2 profile-photo-title">Profile Photo</h1>
      <div className="tips">
        <h2 className="body tips-title">Tips</h2>
        <p className="type16">
          It’s important that guests can see your face. No company logos, favorite pets, blank images, etc.
          <br />
          We can’t accept photos that don’t show the real you.
        </p>
      </div>
      <Cropper/>
    </div>
  );
};

export default ProfilePhoto;
