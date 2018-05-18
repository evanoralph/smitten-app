import React from 'react';
import HeaderNav from '../../components/header/header-nav/HeaderNavContainer';
import PhotoUploadContent from '../../components/photo_upload/photo_upload/PhotoUploadContainer';

const PhotoUpload = props => (
  <div id="photo-upload-page" className="main-content row no-padding no-margin">
    <HeaderNav path="/main" title="photo" />
    <PhotoUploadContent />
  </div>
);

export default PhotoUpload;
