import React from 'react';

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryRibbonProps {
  images: GalleryImage[];
  reverse?: boolean;
}

const GalleryRibbon: React.FC<GalleryRibbonProps> = ({ images, reverse = false }) => {
  const allImages = [...images, ...images]; // Duplicate for seamless loop

  return (
    <div>
      <div className="scrolling-ribbon scroll-animate fade-in delay-1">
        <div className={`scrolling-ribbon-content ${reverse ? 'reverse' : ''}`}>
          {allImages.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryRibbon;