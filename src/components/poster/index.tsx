import React, { useState } from 'react';
import styled from 'styled-components';
import fallbackImage from 'assets/image_not_found.png';

type PosterProps = {
  url: string;
  altText?: string;
  className?: string;
};

const Image: React.FC<PosterProps> = ({ url, altText, className }) => {
  const [loaded, setLoaded] = useState(false);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = fallbackImage;
  };

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <>
      {!loaded && <Skeleton />}
      <Poster
        src={url !== 'N/A' ? url : fallbackImage}
        alt={altText}
        loading='lazy'
        className={className}
        onError={handleError}
        onLoad={handleLoad}
        decoding='async'
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </>
  );
};

export default Image;

const Skeleton = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #484848 0px, #5e5e5e 100%);
`;

const Poster = styled.img`
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease-in;
`;
