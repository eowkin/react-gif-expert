import { useEffect, useState } from "react";
import { getGifByCategory } from "../helpers/getGifByCategory";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifByCategory(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
