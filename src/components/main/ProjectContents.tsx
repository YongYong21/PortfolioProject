/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Project1 from "../../asset/img/Project1.png";
import Project2 from "../../asset/img/Project2.png";
import Project3 from "../../asset/img/Project3.png";
import { useState, useEffect, useRef } from "react";

const ProjectContentsContainer = css`
  display: flex;

  position: sticky;
  /* transform: translateX(${-50}%); */

  top: 25%;
  overflow: hidden;
`;
const ProjectContentsList = (valueTranslateX: number) => css`
  width: 100%;

  padding-left: 25vw;
  padding-right: 25vw;

  transform: translateX(${-valueTranslateX}%);
  img {
    width: 50vw;
    height: 50vh;
    cursor: pointer;
  }
`;
const ProjectContentsTitle = css`
  margin-top: 36px;
  text-align: center;
  font-size: 48px;
  font-weight: 600;

  padding: 8px;
  span {
    cursor: pointer;
  }
`;
function ProjectContents(): JSX.Element {
  const [valueTranslateX, setValueTranslateX] = useState(0);
  const ProjectContentsContainerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const initialContainerTop =
      ProjectContentsContainerRef.current?.getBoundingClientRect().top;
    const handleScroll = () => {
      if (ProjectContentsContainerRef.current && initialContainerTop) {
        const scrollPosition = window.scrollY;
        console.log(
          ProjectContentsContainerRef.current.getBoundingClientRect().top
        );
        console.log((window.innerHeight * 25) / 100);
        if (
          ProjectContentsContainerRef.current.getBoundingClientRect().top -
            0.5 <=
            (window.innerHeight * 25) / 100 &&
          scrollPosition - initialContainerTop < window.innerHeight * 2
        ) {
          const x = scrollPosition - initialContainerTop + 100;
          const m = 200 / (window.innerHeight * 2 - 50);
          const translatedX = x * m;

          // 범위를 제한하여 valueTranslateX를 업데이트
          const newValueTranslateX = Math.min(200, Math.max(0, translatedX));

          setValueTranslateX(newValueTranslateX);
        } else if (
          ProjectContentsContainerRef.current.getBoundingClientRect().top -
            0.5 >
          (window.innerHeight * 25) / 100
        ) {
          setValueTranslateX(0);
        } else {
          setValueTranslateX(200);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const HandleClickProject = (url: string) => {
    const newTab = window.open(url, "_blank");
    if (newTab) {
      newTab.focus(); // 새 탭을 활성화
    }
  };
  return (
    <>
      <div css={ProjectContentsContainer} ref={ProjectContentsContainerRef}>
        <div css={ProjectContentsList(valueTranslateX)}>
          <img
            src={Project1}
            alt="Project 1"
            onClick={() =>
              HandleClickProject(
                "https://github.com/YongYong21/clone-coding-kakao"
              )
            }
          />
          <div css={ProjectContentsTitle}>
            <span
              onClick={() =>
                HandleClickProject(
                  "https://github.com/YongYong21/clone-coding-kakao"
                )
              }
            >
              HTML & CSS
            </span>
          </div>
        </div>

        <div css={ProjectContentsList(valueTranslateX)}>
          <img
            src={Project2}
            alt="Project 2"
            onClick={() =>
              HandleClickProject("https://github.com/YongYong21/javascript")
            }
          />
          <div css={ProjectContentsTitle}>
            <span
              onClick={() =>
                HandleClickProject("https://github.com/YongYong21/javascript")
              }
            >
              JavaScript
            </span>
          </div>
        </div>
        <div css={ProjectContentsList(valueTranslateX)}>
          <img
            src={Project3}
            alt="Project 3"
            onClick={() =>
              HandleClickProject("https://github.com/YongYong21/Toy1_team2")
            }
          />
          <div css={ProjectContentsTitle}>
            <span
              onClick={() =>
                HandleClickProject("https://github.com/YongYong21/Toy1_team2")
              }
            >
              React & TypeScript
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectContents;
