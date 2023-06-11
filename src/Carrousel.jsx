import { useState } from "react";
import { useEffect } from "react";

/**
 * Carrousel logic:
 *
 * Just show ONE active image!
 * Change "active flag" in an endless setInterval
 * Shift the images using positioning!
 * Once image becomes inactive or gets clicked away:
 * - simply shift the VIEW box
 * - this way we need no CSS!
 * Also after the shift: Swap positions of the two invisible items!
 * - e.g. item 2 becomes item 1. Old item 1 now swaps place
 * We always want to have the MIDDLE image the active one!
 * This way it will be fluent
 *
 * So: Simply move ALL images to
 */
export const Carrousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    { alt: "Apple", url: "http://source.unsplash.com/300x200/?apple" },
    { alt: "Cherry", url: "http://source.unsplash.com/300x200/?cherry" },
    { alt: "Banana", url: "http://source.unsplash.com/300x200/?banana" },
  ];

  const increaseIndex = () => {
    // make sure we cycle back to 0 at upper boundary
    setActiveIndex((index) => (index + 1 === images.length ? 0 : index + 1));
  };
  const decreaseIndex = () => {
    // make sure we cycle to end at 0
    setActiveIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  };

  useEffect(() => {
    // by default: increase index every 3 secs
    const timer = setInterval(() => {
      increaseIndex();
    }, 3000);

    // cleanup of timer
    // prevents creation of multiple timers during development
    // which create a very bizarre carousel :)
    return () => {
      timer && clearInterval(timer);
    };
  }, []);

  const imageWidth = 300;

  return (
    <>
      <div className="carrousel">
        <div
          className="images"
          style={{
            // allocate space for each given image dynamically
            width: images.length * imageWidth,
            // shift / translate content container depending on index horizontally
            transform: `translateX(${-imageWidth * activeIndex}px)`,
          }}
        >
          {images.map((img) => (
            <img key={img.alt} src={img.url} alt={img.alt} />
          ))}
        </div>
      </div>
      <div className="btn-actions">
        <button onClick={decreaseIndex}>&lt;</button>
        <button onClick={increaseIndex}>&gt;</button>
      </div>
    </>
  );
};
