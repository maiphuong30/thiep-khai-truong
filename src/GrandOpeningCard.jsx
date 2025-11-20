import { useState } from "react";
import confetti from "canvas-confetti";
import "./card.css";

export default function GrandOpeningCard() {
  const [opened, setOpened] = useState(false);

  const toggleCard = () => {
    const willOpen = !opened;
    setOpened(willOpen);

    if (willOpen) {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.3 } });
    }
  };

  return (
    <div className="card-container">
      <div className={`card ${opened ? "opened" : ""}`} onClick={toggleCard}>

        {/* Mặt trước */}
        <div className="card-front">
          <h1 className="title-glow">✨ Thiệp Khai Trương ✨</h1>
          <p>Nhấn để mở thiệp</p>
          <div className="decor decor1">💅</div>
          <div className="decor decor2">✂️</div>
        </div>

        {/* Mặt trong */}
        <div className="card-inner">
          <h2 className="gold">🎉 Chúc mừng khai trương 🎉</h2>
          <p className="message">
            Chúc tiệm Nail – Tóc luôn đông khách,  
            <br />doanh thu tăng vọt, rực rỡ và xinh đẹp!
          </p>
          <div className="decor decor3">🌸</div>
          <div className="decor decor4">🌺</div>
        </div>

      </div>
      <div className="hint">Nhấn thiệp để mở · Nhấn lại để đóng</div>
    </div>
  );
}
