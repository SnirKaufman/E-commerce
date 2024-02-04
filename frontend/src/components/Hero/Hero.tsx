import { PiShoppingCartSimpleFill } from "react-icons/pi";

function Hero() {
  return (
    <div className="container hero_container">
      <div className="hero_text_container">
        <h1 className="hero_title">Apple Vision Pro</h1>
        <p className="hero_paragraph">
          The Apple Vision Pro combines a stunning display, lightning-fast
          performance, and an innovative camera system for a seamless and
          immersive digital experience. Elevate your lifestyle with its sleek
          design and user-friendly interface.
        </p>
        <div className="hero_btn_container">
          <button className="read_more-btn">Read more</button>
          <button className="shopping_cart-btn">
            <PiShoppingCartSimpleFill />
            Add to cart
          </button>
        </div>
      </div>
      <div className="hero_svg_container">
        <img src="\src\assets\apple vision pro 1.png" alt="vision_pro_pic" />
      </div>
    </div>
  );
}

export default Hero;
