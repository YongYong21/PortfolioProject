/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect, useRef } from "react";
import ProjectContents from "./ProjectContents";

const projectTitleContainer = (rotate: number, translate: number) => css`
  position: sticky;
  top: 0;

  height: 100vh;

  display: flex;
  justify-content: center;

  padding: 16px;

  font-size: 128px;

  background-color: #fdfdfd;

  .letter1 {
    transform: rotate(${rotate}deg) translate(${translate}px, ${-translate}px);
  }

  .letter2 {
    transform: rotate(${rotate}deg)
      translate(${-translate * -0.2}px, ${-translate * 0.2}px);
  }

  .letter3 {
    transform: rotate(${rotate}deg)
      translate(${translate}px, ${-translate * 0.5}px);
  }

  .letter4 {
    transform: rotate(${rotate / 2}deg)
      translate(${translate}px, ${-translate * 0.3}px);
  }

  .letter5 {
    transform: rotate(${rotate / 4}deg)
      translate(${-translate * 0.5}px, ${-translate}px);
  }

  .letter6 {
    transform: rotate(${rotate * 0.6}deg)
      translate(${-translate}px, ${-translate * 0.3}px);
  }

  .letter7 {
    transform: rotate(${rotate}deg)
      translate(${-translate}px, ${-translate * 0.6}px);
  }
`;

function ProjectConponents(): JSX.Element {
  const [rotate, setRotate] = useState(360);
  const [translate, setTransLate] = useState(-500);
  const projectContainerRef = useRef<HTMLDivElement | null>(null);

  const MathRotate = (scrollY: number, maxRotate: number): number => {
    return (scrollY * -maxRotate) / 1000 + maxRotate;
  };

  const MathTransLate = (scrollY: number, maxTranslate: number): number => {
    return (scrollY * -maxTranslate) / 1000 + maxTranslate;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (projectContainerRef.current) {
        const rect = projectContainerRef.current.getBoundingClientRect();
        if (rect.top > -1000 && rect.top < 0) {
          setRotate(MathRotate(-rect.top, 360));
          setTransLate(MathTransLate(-rect.top, -500));
        } else if (rect.top <= -1000) {
          setRotate(0);
          setTransLate(0);
        } else {
          setRotate(360);
          setTransLate(-500);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div css={{ height: 6000 }} ref={projectContainerRef}>
      <div css={projectTitleContainer(rotate, translate)}>
        <span className="letter1">P</span>
        <span className="letter2">r</span>
        <span className="letter3">o</span>
        <span className="letter4">j</span>
        <span className="letter5">e</span>
        <span className="letter6">c</span>
        <span className="letter7">t</span>
      </div>
      <ProjectContents></ProjectContents>
    </div>
  );
}

export default ProjectConponents;
