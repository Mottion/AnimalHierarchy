import React from "react";
import { ButtonComponentProps } from "../@types/ButtonComponentProps";

const ButtonComponent: React.FC<ButtonComponentProps> = ({title, style}) => {
  const styleList = {
    full: "bg-yellow-400 text-black-500 border-yellow-400",
    border: "text-yellow-400 bg-neutral-900 border-yellow-400"
  }
  
  return(
    <button className={"w-[90%] rounded font-normal text-xl p-0.5 border-2 " + styleList[style]}>
      {title.toUpperCase()}
    </button>
  );
} 

export default ButtonComponent; 