import { RefObject } from "react";

export default function randomChangePosition(ref: RefObject<HTMLElement>, event?: React.MouseEvent) {
  if (ref.current) {

    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;        
    let randomTop, randomLeft;

    if (event) {
      let cursorX = event.clientX;
      let cursorY = event.clientY;

      // Generates random position for the element checking if 
      // the new position is not over the cursor
      let randomTop, randomLeft;
      do {
        randomTop = Math.floor(Math.random() * windowHeight);
        randomLeft = Math.floor(Math.random() * windowWidth);
      } while (Math.abs(randomTop - cursorY) < 150 && Math.abs(randomLeft - cursorX) < 150);

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
    else {      
      // Generates random position for the element
      randomTop = Math.floor(Math.random() * windowHeight);
      randomLeft = Math.floor(Math.random() * windowWidth);

      // It sures element doesnt go out of the window
      let buttonHeight = ref.current.offsetHeight;
      let buttonWidth = ref.current.offsetWidth;
      if (randomTop + buttonHeight > windowHeight) {
        randomTop = windowHeight - buttonHeight;
      }
      if (randomLeft + buttonWidth > windowWidth) {
        randomLeft = windowWidth - buttonWidth;
      }
    }

    // Changes element position
    ref.current.style.position = 'absolute';
    ref.current.style.top = `${randomTop}px`;
    ref.current.style.left = `${randomLeft}px`;
  }
}