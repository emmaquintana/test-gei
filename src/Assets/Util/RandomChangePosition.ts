import { RefObject } from "react";

export default function randomChangePosition(ref: RefObject<HTMLElement>) {
    if (ref.current) {      

        let windowHeight = window.innerHeight;
        let windowWidth = window.innerWidth;
  
        // Generates random position for the element
        let randomTop = Math.floor(Math.random() * windowHeight);
        let randomLeft = Math.floor(Math.random() * windowWidth);
  
        // It sures element doesnt go out of the window
        let buttonHeight = ref.current.offsetHeight;
        let buttonWidth = ref.current.offsetWidth;
        if (randomTop + buttonHeight > windowHeight) {
          randomTop = windowHeight - buttonHeight;
        }
        if (randomLeft + buttonWidth > windowWidth) {
          randomLeft = windowWidth - buttonWidth;
        }
  
        // Changes element position
        ref.current.style.position = 'absolute';
        ref.current.style.top = `${randomTop}px`;
        ref.current.style.left = `${randomLeft}px`;      
      }   
}