import { useState, useEffect, useRef } from "react";

export default function useComponentVisible(initialIsVisible:boolean) {
  const [isComponentVisible, setIsComponentVisible] =
    useState<boolean>(initialIsVisible);
  const ref = useRef<any>();

  const handleClickOutside = (event:any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
      console.log("first")
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { ref, isComponentVisible, setIsComponentVisible };
}