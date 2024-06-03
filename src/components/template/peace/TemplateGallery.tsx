// components/TemplateGallery.tsx
import React, { useEffect, useState } from 'react';
import { ImageData } from '../types';

interface TemplateGalleryProps {
  images?: ImageData[];
  onImageClick?: (index: number) => void;
}

const TemplateGallery: React.FC<TemplateGalleryProps> = ({ images, onImageClick }) => {
  const [loadedImages, setLoadedImages] = useState<ImageData[]>(images || []);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/peace/list-images')
    .then(response => response.json())
    .then(data => setLoadedImages(data.images))
    .catch(error => console.error('Error:', error));
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {loadedImages.map((image, index) => (
        <div 
          key={index} 
          style={{
            width: '200px', 
            height: 'auto',
            border: selectedImageIndex === index? '2px solid #000' : 'none' // Conditionally apply border
          }}
          onClick={() => {
            onImageClick?.(index);
            setSelectedImageIndex(index)
          }}
        >
          <img 
            src={image.url} 
            alt={`Template ${index + 1}`} 
            style={{ width: '100%', objectFit: 'cover' }} 
          />
        </div>
      ))}
    </div>
  );
};

export default TemplateGallery;