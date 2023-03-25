import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useLoadingDots() {
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const dotTimer = setInterval(() => {
      setActiveDotIndex((activeDotIndex) => (activeDotIndex + 1) % 3);
    }, 1000);

    return () => clearInterval(dotTimer);
  }, []);

  useEffect(() => {
    if (activeDotIndex === 2) {
      setTimeout(() => navigate("/profileInformation"), 1000); // Wait 1 second before navigating to '/steps'
    }
  }, [activeDotIndex, navigate]);

  return { activeDotIndex };
}
