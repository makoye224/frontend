import React, { useEffect, useState } from 'react';
import blur from '../media/blur.webp'

const ImageComponent = ({ alt, cls, styl, name }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const fetchImageUrlFromCDN = async (imageName) => {
    try {
      const cdnUrl = 'https://d3ski4a8qseigv.cloudfront.net';
      const imageUrl = `${cdnUrl}/${imageName}`;
      return imageUrl;
    } catch (error) {
      console.error('Error retrieving image from CDN:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const url = await fetchImageUrlFromCDN(name);
        setImageUrl(url);
      } catch (error) {
        console.error(`Error fetching image URL for ${name}:`, error);
      }
    };

    fetchImageUrl();
  }, [name]);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = imageUrl;
  }, [imageUrl]);

  return (
    <>
      {!imageLoaded && (
        <div style={{ padding: '250px' }}>
        <img src={blur} style={{ filter: 'blur(50px)' }} />
      </div>      
      )}
      {imageLoaded && (
        <img
          className={cls ? cls : 'img-fluid'}
          loading="lazy"
          src={imageUrl} // Update the src prop with imageUrl
          alt={alt}
          style={
            styl
              ? styl
              : {
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'opacity 1s ease-in-out',
                }
          }
        />
      )}
    </>
  );
};

export default ImageComponent;
