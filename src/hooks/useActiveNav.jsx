import { useState } from "react";

const useActiveNav = (initialNavItem, nextNavItem) => {
  const [selectedNavItem, setSelectedNavItem] = useState(initialNavItem);

  const handleContinueClick = () => {
    setSelectedNavItem(nextNavItem);
  };

  return {
    selectedNavItem,
    handleContinueClick,
  };
};


export default useActiveNav;


