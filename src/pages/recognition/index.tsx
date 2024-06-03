// pages/recognition/[...slug].tsx
import React from "react";
import TemplateGallery
 from "@/components/template/recognition/TemplateGallery";
import { ImageData } from "@/components/template/types";

const RecognitionPage: React.FC<{ images: ImageData[] }> = ({ images }) => {
  return (
    <div>
      <h1>Proof of Recognition Templates</h1>
      <TemplateGallery images={images} />
    </div>
  );
};

export default RecognitionPage;
