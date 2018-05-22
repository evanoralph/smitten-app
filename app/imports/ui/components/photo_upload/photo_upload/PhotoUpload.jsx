import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class PhotoUpload extends React.Component {
  componentDidMount() {
    $('img[src$=".svg"]').each(function() {
      var $img = jQuery(this);
      var imgURL = $img.attr('src');
      var attributes = $img.prop('attributes');

      $.get(
        imgURL,
        function(data) {
          // Get the SVG tag, ignore the rest
          var $svg = jQuery(data).find('svg');

          // Remove any invalid XML tags
          $svg = $svg.removeAttr('xmlns:a');

          // Loop through IMG attributes and apply on SVG
          $.each(attributes, function() {
            $svg.attr(this.name, this.value);
          });

          // Replace IMG with SVG
          $img.replaceWith($svg);
        },
        'xml'
      );
    });
  }

  preview(e) {
    e.preventDefault();
    const file = e.target.files[0];
    this.props.uploadPhoto(file, this.props.history);
  }

  render() {
    return (
      <div className="row start-xs content-page">
        <div className="col-xs-12 mg-top-100">
          <div className="row center-xs">
            <div className="col-xs-12">
              <p>PLEASE UPLOAD A CURRENT PHOTO!</p>
            </div>
            <div className="col-xs-12 mg-top-30 file-upload-control">
              <label htmlFor="img-upload">
                <img src="/assets/upload icon.svg" alt="" />
                <input
                  type="file"
                  id="img-upload"
                  style={{ display: 'none' }}
                  onChange={this.preview.bind(this)}
                  ref={i => (this.image = i)}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const PhotoUploadWithRouter = withRouter(PhotoUpload);
const mapStateToProps = state => state;
export default connect(mapStateToProps)(PhotoUploadWithRouter);
