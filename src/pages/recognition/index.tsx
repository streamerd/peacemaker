// pages/recognition/[...slug].tsx
import React from "react";
import TemplateGallery, {
  ImageData,
} from "@/components/template/recognition/TemplateGallery";

const RecognitionPage: React.FC<{ images: ImageData[] }> = ({ images }) => {
  return (
    <div>
      <h1>Proof of Recognition Templates</h1>
      <TemplateGallery images={images} />
    </div>
  );
};

export default RecognitionPage;
