import { Container } from "@mui/material";
import classses from "./Cover.styles";

export const Cover = () => {
  return (
    <div className={classses.cover}>
      <Container maxWidth="xl">
        <div className={"coverWrapper"}>
          <div className="text">
            Get the insights you need to improve your business
            <p>
              Use our analytics, reporting, and AI-assisted optimization tools
              to monitor trends, track performance, and create better campaigns
              that reach more customers likely to engage and convert.
            </p>
          </div>
          <div className="backgroundImage"></div>
        </div>
      </Container>
    </div>
  );
};
