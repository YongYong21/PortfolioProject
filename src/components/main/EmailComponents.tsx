/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const formStyle = css`
  max-width: 500px;
  margin: 32px auto;

  padding: 24px;
  border: 1px solid #ccc;
  border-radius: 4px;

  label {
    display: block;

    margin-bottom: 8px;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;

    padding: 12px;
    margin-bottom: 12px;

    border: 1px solid #ccc;
    border-radius: 4px;

    box-sizing: border-box;
    outline: none;
  }

  textarea {
    height: 200px;
    resize: none;
  }

  input[type="submit"] {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    transition: background-color 0.3s;
    &:hover {
      background-color: #0056b3;
    }
  }
`;
const submitWrap = css`
  text-align: center;
`;
function EmailComponents() {
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      if (!userName || !userEmail || !message) {
        alert("작성하지 않은 부분이 있습니다.");
        return;
      }

      emailjs
        .sendForm(
          "service_6vuslku",
          "template_r7gacac",
          formRef.current,
          "7g9iAVjwNRkSjk2c3"
        )
        .then(
          () => {
            alert("성공적으로 발송되었습니다.");
            setUserName("");
            setUserEmail("");
            setMessage("");
          },
          () => {
            alert("발송이 실패했습니다.");
          }
        );
    }
  };
  return (
    <form ref={formRef} css={formStyle} onSubmit={sendEmail}>
      <label>Name</label>
      <input
        type="text"
        name="user_name"
        placeholder="Name"
        autoComplete="off"
        onChange={(e) => setUserName(e.target.value)}
      />
      <label>Email</label>
      <input
        type="email"
        name="user_email"
        placeholder="Email"
        autoComplete="off"
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <label>Message</label>
      <textarea
        name="message"
        placeholder="Message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      <div css={submitWrap}>
        <input type="submit" value="Send" />
      </div>
    </form>
  );
}

export default EmailComponents;
