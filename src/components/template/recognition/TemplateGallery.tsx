// components/TemplateGallery.tsx
import React, { useEffect, useState } from "react";
import { ImageData } from "../types";
import Image from "next/image";

interface TemplateGalleryProps {
  images?: ImageData[]; // Optional prop in case you decide to pass images as props initially
}

const TemplateGallery: React.FC<TemplateGalleryProps> = ({ images }) => {
  const [loadedImages, setLoadedImages] = useState<ImageData[]>(images || []);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    fetch("/api/recognition/list-images")
      .then((response) => response.json())
      .then((data) => setLoadedImages(data.images))
      .catch((error) => console.error("Error:", error));
  }, []); // Empty dependency array means this effect runs once after initial render

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {loadedImages.map((image, index) => (
        <div
          key={index}
          style={{
            width: "200px",
            height: "auto",
            border: selectedImageIndex === index ? "2px solid #000" : "none",
          }}
          onClick={() => handleImageClick(index)}
        >
            <Image 
            src={image.url} 
            alt={`Template ${index + 1}`} 
            width={200} // Specify the width
            height={150} // Specify the height
          />
        </div>
      ))}
    </div>
  );
};

export default TemplateGallery;
