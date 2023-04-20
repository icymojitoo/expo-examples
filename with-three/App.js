import { GLView } from "expo-gl";
import { useEffect } from "react";
import onContextCreate from "./config/scene";

export default function Loading() {
  let timeout;

  useEffect(() => {
    // Clear the animation loop when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  

  return <GLView style={{ flex: 1 }} onContextCreate={onContextCreate} />;
}
