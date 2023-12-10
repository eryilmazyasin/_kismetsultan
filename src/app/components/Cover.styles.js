import { css } from "@emotion/css";

export default {
  cover: css`
    /* min-height: calc(100vh - 70px); */
    background: rgb(25, 25, 16);
    background: linear-gradient(
      180deg,
      rgba(25, 25, 16, 1) 0%,
      rgba(75, 73, 73, 1) 100%,
      rgba(0, 212, 255, 1) 100%
    );
    padding-top: 150px;
    /* padding-bottom: 50px; */

    & .coverWrapper {
      color: white;
      font-size: 3rem;
      display: flex;
      gap: 50px;
      height: 70vh;
      padding: 50px 0;
      position: relative;

      & .backgroundImage {
        background-image: url("/phonemockup.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position-x: right;
        height: 100%;
        position: absolute;
        width: 100%;
        right: 0;
        bottom: 0;
        z-index: 9;
      }
    }

    & .text {
      width: 50%;
      z-index: 99;

      p {
        font-size: 1rem;
        color: #666666;
      }
    }
  `,
};
