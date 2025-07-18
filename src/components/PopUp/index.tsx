import React, { useEffect } from "react";
import './styles.css';
import { PopUpProps } from "../../types";

export default function PopUp({ hero, onClose }: PopUpProps) {
    
    useEffect(() => {
      const closePopUp = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", closePopUp);
      return () => window.removeEventListener("keydown", closePopUp);
    }, [onClose]);
  
    return (
      <div className="container-popup" onClick={onClose}>
        <div
          className="container-popup-content"
          onClick={event => event.stopPropagation()} 
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
        >
          <button className="botao" onClick={onClose}>Voltar</button>
          <img src={hero.image} alt={hero.name} className="image-popup" />
          <h2>{hero.name}</h2>
          <p><strong>Idade:</strong> {hero.age}</p>
          <p>{hero.biography}</p>
        </div>
      </div>
    );
  
}