import { css } from "@emotion/css";

export default {
  navbar: css`
    background-color: transparent;

    & .MuiToolbar-root {
      gap: 50px;
    }

    & .MuiBox-root {
      gap: 20px;
      button {
        text-transform: none;

        &:hover {
          color: #f6bf20;
        }
      }
    }
  `,
};
