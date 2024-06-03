// pages/peace/[...slug].tsx
import React from 'react';
import TemplateGallery, { ImageData } from '@/components/template/peace/TemplateGallery';

const PeacePage: React.FC<{ images: ImageData[] }> = ({ images }) => {
  return (
    <div>
      <h1>Proof of Peace Templates</h1>
      <TemplateGallery images={images } />
    </div>
  );
};

export default PeacePage;
