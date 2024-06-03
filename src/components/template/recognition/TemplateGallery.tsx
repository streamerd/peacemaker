// components/TemplateGallery.tsx
import React, { useEffect, useState } from 'react';

export interface ImageData {
  filename: string;
  url: string;
}

interface TemplateGalleryProps {
  images?: ImageData[]; // Optional prop in case you decide to pass images as props initially
}

const TemplateGallery: React.FC<TemplateGalleryProps> = ({ images }) => {
  const [loadedImages, setLoadedImages] = useState<ImageData[]>(images || []);

  useEffect(() => {
    fetch('/api/recognition/list-images')
     .then(response => response.json())
     .then(data => setLoadedImages(data.images))
     .catch(error => console.error('Error:', error));
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {loadedImages.map((image, index) => (
        <div key={index} style={{ width: '200px', height: 'auto' }}>
          <img src={image.url} alt={`Template ${index + 1}`} style={{ width: '100%', objectFit: 'cover' }} />
        </div>
      ))}
    </div>
  );
};

export default TemplateGallery;
