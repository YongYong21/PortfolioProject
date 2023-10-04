/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";

const introduceContainer = css`
  height: 360vh;
  background-color: rgba(0, 0, 0);
`;
const cardBox = (opacityY: number = 1) => css`
  height: 100vh;

  color: rgba(255, 255, 255, ${opacityY});
  text-align: center;
  font-size: 128px;
  font-weight: 700;
  line-height: 1.5;
  position: sticky;
  top: 0;
  transition: background-color 0.2s;
`;

function IntroduceCard(): JSX.Element {
  const [cardBoxState, setCardBoxState] = useState([
    { opacity: 1 },
    { opacity: 1 },
    { opacity: 1 }
  ]);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY < window.innerHeight) {
      const opacity = (-1 / window.innerHeight) * scrollY + 1;
      let copy = [...cardBoxState];
      copy[0].opacity = opacity;
      copy[1].opacity = 1 - opacity;
      setCardBoxState(copy);
    } else if (scrollY < window.innerHeight * 2) {
      const opacity = (-1 / window.innerHeight) * scrollY + 2;
      let copy = [...cardBoxState];
      copy[0].opacity = 0;
      copy[1].opacity = opacity;
      copy[2].opacity = 1 - opacity;
      setCardBoxState(copy);
    } else if (scrollY >= window.innerHeight * 2) {
      const opacity = (-1 / window.innerHeight) * scrollY + 3;
      let copy = [...cardBoxState];
      copy[0].opacity = 0;
      copy[1].opacity = 0;
      copy[2].opacity = opacity;
      setCardBoxState(copy);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div css={introduceContainer}>
        <div css={cardBox(cardBoxState[0].opacity)}>안녕하세요</div>
        <div css={cardBox(cardBoxState[1].opacity)}>
          프론트엔드 개발자를 꿈꾸는
        </div>
        <div css={cardBox(cardBoxState[2].opacity)}>박용희 입니다.</div>
      </div>
    </>
  );
}

export default IntroduceCard;
