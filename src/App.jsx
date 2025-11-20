import { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import "./App.css";

export default function App() {
  const [open, setOpen] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const audioRef = useRef(null);

  const fullText =
    "Chúc tiệm Châm luôn đông khách, doanh thu tăng vọt, rực rỡ và xinh đẹp!";

  const toggleCard = () => {
    const willOpen = !open;
    setOpen(willOpen);

    if (willOpen) {
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.3 },
        colors: ["#ff6f91", "#ffc75f", "#f9f871", "#00c1d4", "#8d72e1"]
      });
      audioRef.current?.play(); // phát nhạc khi mở
    } else {
      audioRef.current?.pause();
      audioRef.current.currentTime = 0;
    }
  };

  // Typing effect
  useEffect(() => {
    if (!open) {
      setDisplayText(""); // reset khi đóng
      return;
    }

    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1)); // ⭐ lấy từ 0 đến index
        index++;
      } else {
        clearInterval(interval); // dừng khi hết chuỗi
      }
    }, 40);

    return () => clearInterval(interval);
  }, [open]);


  return (
    <div className="page">
      {/* Audio effect */}
      <audio ref={audioRef} src="/sound/open.mp3" preload="auto" />


      <div className="card" onClick={toggleCard}>
        <div className={`card-inner ${open ? "open" : ""}`}>
          {/* Mặt trước */}
          <div className="card-front">
            <h1 className="title-glow">✨ Thiệp Khai Trương ✨</h1>
            <p>Nhấn để mở thiệp</p>
            <div className="decor decor1">💅</div>
            <div className="decor decor2">✂️</div>
          </div>

          {/* Mặt sau */}
          <div className="card-back">
            <h2 className="gold">🎉 Chúc mừng khai trương 🎉</h2>
            <p className="message">{displayText}</p>
            <div className="decor decor3">🌸</div>
            <div className="decor decor4">🌺</div>
            <p className="sender">
              💖 Từ hội chị em xênh đẹp của m 💖
            </p>
            <img className="group-img" src="/images/girls.jpg" alt="Hội chị em" />

            <div className="hint">Nhấn thiệp để mở / đóng</div>
          </div>
        </div>
      </div>

      
    </div>
  );
}
