import React from "react";
import {useNavigate} from "react-router-dom";

const Card = ({ src, url, title }) => {
  const navigate = useNavigate();

const handleClick = (e)=>{
  const checkWord = e.target.closest(".box").querySelector("h3").innerText;

  if(checkWord === "HTML5 Markup"){
    navigate("/html")
  }else if(checkWord === "CSS3 Styling"){
    navigate("/css")
  }else if (checkWord === "Graphic Design") {
    navigate("/logo");
  }
}

  return (
    <div className="box" onClick={handleClick}>
      <img src={src} alt="" />
      <h3>{title}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
        augue, viverra sit amet ultricies
      </p>
    </div>
  );
};

export default Card;
