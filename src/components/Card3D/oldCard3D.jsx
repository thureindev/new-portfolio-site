import React, { useEffect } from 'react';
import './style.css';

// import { VisibilityContext } from "react-horizontal-scrolling-menu";

const Card3D = () => {

    // const visibility = React.useContext(VisibilityContext);

    // const visible = visibility.isItemVisible(itemId);

    
  const angle = 20;

  const lerp = (start, end, amount) => {
    return (1 - amount) * start + amount * end;
  };

  const remap = (value, oldMax, newMax) => {
    const newValue = ((value + oldMax) * (newMax * 2)) / (oldMax * 2) - newMax;
    return Math.min(Math.max(newValue, -newMax), newMax);
  };

  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((e) => {

      e.addEventListener("mousemove", (event) => {
        const rect = e.getBoundingClientRect();
        const centerX = (rect.left + rect.right) / 2;
        const centerY = (rect.top + rect.bottom) / 2;
        const posX = event.pageX - centerX;
        const posY = event.pageY - centerY;
        const x = remap(posX, rect.width / 2, angle);
        const y = remap(posY, rect.height / 2 + centerY, -angle);
        e.dataset.rotateX = x;
        e.dataset.rotateY = y;
      });

      e.addEventListener("mouseout", (event) => {
        e.dataset.rotateX = 0;
        e.dataset.rotateY = 0;
      });
    });

    const update = () => {
      cards.forEach((e) => {
        let currentX = parseFloat(e.style.getPropertyValue('--rotateY'));
        let currentY = parseFloat(e.style.getPropertyValue('--rotateX'));
        if (isNaN(currentX)) currentX = 0;
        if (isNaN(currentY)) currentY = 0;
        const x = lerp(currentX, e.dataset.rotateX, 0.05);
        const y = lerp(currentY, e.dataset.rotateY, 0.05);
        e.style.setProperty("--rotateY", x + "deg");
        e.style.setProperty("--rotateX", y + "deg");
      });
    };

    const interval = setInterval(update, 1000 / 60);

    return () => {
      clearInterval(interval);
    };
  }, []);



  return (
    <div className="centered">
      <div className="card border-left-behind">
        <div className="shadow" style={{ "--url": "url('https://i.ibb.co/PM4ghD4/full.png')" }}></div>
        <div className="image background" style={{ "--url": "url('https://i.ibb.co/JpJVJxq/Background.png')" }}></div>
        <div className="image cutout" style={{ "--url": "url('https://i.ibb.co/Dw3q3tZ/cutout.png')" }}></div>
        <div className="content">
          <h2>Hover me!</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>
      <div className="card border-right-behind border-bottom-behind">
        <div className="shadow" style={{ "--url": "url('https://i.ibb.co/DC0MbxS/m-full.png')" }}></div>
        <div className="image background" style={{ "--url": "url('https://i.ibb.co/ZdGBm4K/m-background.png')" }}></div>
        <div className="image cutout" style={{ "--url": "url('https://i.ibb.co/RC70XmC/m-cutout.png')" }}></div>
        <div className="content">
          <h2>Hover me!</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="card border-left-behind">
        <div className="shadow" style={{ "--url": "url('https://i.ibb.co/gSBp82C/b-full.png')" }}></div>
        <div className="image background" style={{ "--url": "url('https://i.ibb.co/MDBcyMW/b-background.png')" }}></div>
        <div className="image cutout" style={{ "--url": "url('https://i.ibb.co/bQNgD6y/b-cutout.png')" }}></div>
        <div className="content">
          <h2>Hover me!</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Card3D;