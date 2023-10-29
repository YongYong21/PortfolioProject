/** @jsxImportSource @emotion/react */
import { useEffect, useRef } from "react";
import { css } from "@emotion/react";
import profileImage from "../../asset/img/profile.png";

const profileCard = css`
  position: relative;

  display: flex;

  width: auto;

  margin: auto;
  padding: 16px;

  background-color: #f3f3f3;
  opacity: 0;
  transition: opacity 2.5s;
`;

const leftCard = css`
  width: auto;
  img {
    margin-left: 64px;
    border-radius: 12px;
  }
`;
const rightCard = css`
  position: absolute;
  right: 0;
  top: 50%;

  padding-right: 64px;

  width: 100%;

  text-align: right;
`;

const font400 = (fontSize: number) => css`
  font-size: ${fontSize}px;
  font-weight: 400;
  line-height: 1;
`;
const font500 = (fontSize: number) => css`
  font-size: ${fontSize}px;
  font-weight: 500;
  line-height: 1.2;
`;
const font600 = (fontSize: number) => css`
  font-size: ${fontSize}px;
  font-weight: 600;
  line-height: 1.5;
`;
function ProfileCard(): JSX.Element {
  const profileCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const targetProfileCardRef = profileCardRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (targetProfileCardRef) {
            targetProfileCardRef.style.opacity = "1";
          }
        }
      });
    });

    if (targetProfileCardRef) {
      observer.observe(targetProfileCardRef);
    }

    return () => {
      if (targetProfileCardRef) {
        observer.unobserve(targetProfileCardRef);
      }
    };
  }, []);

  return (
    <div>
      <div css={profileCard} ref={profileCardRef}>
        <div css={leftCard}>
          <img src={profileImage} alt="프로필 사진" />
        </div>
        <div css={rightCard}>
          <div>
            <span css={font600(48)}>개발자를 꿈꾸는</span>
            <br />
            <span css={font500(36)}>박 용 희</span>
            <br />
            <span css={font400(32)}>Park YongHui</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
