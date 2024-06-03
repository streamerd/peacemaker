// components/TemplateGallery.tsx
import React, { useEffect, useState } from "react";
import { ImageData } from "../types";
import Image from "next/image";

interface TemplateGalleryProps {
  images?: ImageData[];
  onImageClick?: (index: number) => void;
}

const TemplateGallery: React.FC<TemplateGalleryProps> = ({
  images,
  onImageClick,
}) => {
  const [loadedImages, setLoadedImages] = useState<ImageData[]>(images || []);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [hoveredImageIndex, setHoveredImageIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/peace/list-images")
     .then((response) => response.json())
     .then((data) => setLoadedImages(data.images))
     .catch((error) => console.error("Error:", error));
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {loadedImages.map((image, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredImageIndex(index)}
          onMouseLeave={() => setHoveredImageIndex(null)}
          onClick={() => {
            onImageClick?.(index);
            selectedImageIndex === index
             ? setSelectedImageIndex(null)
              : setSelectedImageIndex(index);
          }}
          style={{
            width: "200px",
            height: "auto",
            border: selectedImageIndex === index? "2px solid #000" : "none", // Conditionally apply border
            transition: "transform 0.5s ease-in-out", // Smooth transition for scaling
            transformOrigin: "center", // Ensure scaling starts from the center
           ...(hoveredImageIndex === index && {
              transform: "scale(3)", // Triple size on hover
            }),
          }}
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
