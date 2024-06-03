import React, { useEffect, useState } from "react";
import TemplateGallery from "@/components/template/peace/TemplateGallery";
import axios from "axios";
import { ImageData } from "@/components/template/types";
import showToast from "@/utils/showToast";
import Link from "next/link";

const PeacePage: React.FC<{ images: ImageData[] }> = ({ images }) => {
  const [loadedImages, setLoadedImages] = useState<ImageData[]>(images || []);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [wallet, setWallet] = useState<string | null>(null);
  const [peacemakers, setPeacemakers] = useState([
    {
      name: "A.T. Yilmaz",
      wallet: "",
      citizenship: "TR",
      language: "EN",
    },
    {
      name: "Deli Dumrul",
      citizenship: "TR",
      wallet: "0x000000",
      language: "EN",
    },
  ]);

  useEffect(() => {
    const userWallet = localStorage.getItem("user");
    console.log("userWallet >>", userWallet);
    setWallet(userWallet);

    fetch("/api/peace/list-images")
      .then((response) => response.json())
      .then((data) => setLoadedImages(data.images))
      .catch((error) => console.error("Error:", error));
  }, []);

  useEffect(() => {
    if (wallet) {
      setPeacemakers((prevPeacemakers) => [
        {
          ...prevPeacemakers[0],
          wallet: wallet,
        },
        ...prevPeacemakers.slice(1),
      ]);
    }
  }, [wallet]);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const sendPostRequest = async () => {
    console.log("@sendPostReq");
    if (selectedImageIndex === null) {
      alert("please choose a template to submit!");
      return;
    }

    const languageCode = loadedImages[selectedImageIndex].filename
      .split("_")[1]
      .split(".")[0];
    console.log("languageCode", languageCode);
    const updatedPeacemaker = {
      ...peacemakers[0],
      language: languageCode.toUpperCase(),
    };

    try {
      await axios.post("http://localhost:3030/peace", {
        peacemakers: [updatedPeacemaker, peacemakers[1]],
      });
      alert("Update successful!");
    } catch (error) {
      console.error("Error sending POST request:", error);
      alert("Failed to update.");
    }
  };

  return (
    <div className="peace-container">
        <Link className="back-arrow" href="/">
        {"<|"}
      </Link>
      <h3>Proof of Peacemaking</h3>
      <TemplateGallery images={loadedImages} onImageClick={handleImageClick} />
      <button className="submit-btn" onClick={sendPostRequest}>
        Submit
      </button>
    </div>
  );
};

export default PeacePage;
