// pages/peace/[...slug].tsx
import React, { useEffect, useState } from 'react';
import TemplateGallery from '@/components/template/peace/TemplateGallery';
import axios from 'axios';
import { ImageData } from '@/components/template/types';

const PeacePage: React.FC<{ images: ImageData[] }> = ({ images }) => {
  const [loadedImages, setLoadedImages] = useState<ImageData[]>(images || []);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [peacemakers, setPeacemakers] = useState([
    {
      name: "A.T. Yilmaz",
      citizenship: "TR",
      language: "EN"
    },
    {
      name: "Deli Dumrul",
      citizenship: "TR",
      language: "EN"
    }
  ]);

  useEffect(() => {
    fetch('/api/peace/list-images')
   .then(response => response.json())
   .then(data => setLoadedImages(data.images))
   .catch(error => console.error('Error:', error));
  }, []); // Empty dependency array means this effect runs once after initial render

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const sendPostRequest = async () => {
    if (!selectedImageIndex) return;

    const languageCode = loadedImages[selectedImageIndex].filename.split('_')[1].split('.')[0];
    console.log("languageCode", languageCode)
    const updatedPeacemaker = {
     ...peacemakers[0],
      language: languageCode.toUpperCase()
    };

    // console.log("peacemakers", peacemakers)
    try {
      await axios.post('http://localhost:3030/peace', { peacemakers: [ ...peacemakers, updatedPeacemaker] });
      alert('Update successful!');
    } catch (error) {
      console.error('Error sending POST request:', error);
      alert('Failed to update.');
    }
  };

  return (
    <div>
      <h1>Welcome to the Peace page!</h1>
      <TemplateGallery images={loadedImages} onImageClick={handleImageClick} />
      <button onClick={sendPostRequest}>Submit</button>
    </div>
  );
};

export default PeacePage;
