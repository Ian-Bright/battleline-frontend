import { createUseStyles } from "react-jss";
import { useState } from "react";
import { useHistory } from "react-router";

const useStyles = createUseStyles({
  cta: {
    background: "#D4D4D4",
    border: "1px solid #959595",
    borderRadius: "3px",
    cursor: "pointer",
    fontSize: "32px",
    fontWeight: 400,
    lineHeight: "38px",
    padding: "13px 43px",
  },
  ctaContainer: {
    display: "flex",
    marginTop: "165px",
  },
  description: {
    fontSize: "28px",
    fontWeight: 300,
    lineHeight: "34px",
    marginTop: "9px",
    maxWidth: "521px",
  },
  heading: {
    fontSize: "48px",
    fontWeight: 600,
    lineHeight: "59px",
  },
  input: {
    width: "306px",
  },
  organization: {
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "29px",
  },
  preplayMessage: {
    fontSize: "24px",
    fontWeight: 400,
    lineHeight: "29px",
    margin: "60px 0px",
    maxWidth: "487px",
  },
  wrapper: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100vh",
  },
});

export default function Home() {
  const history = useHistory();
  const [play, setPlay] = useState(false);
  const [text, setText] = useState("");
  const styles = useStyles();
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>BATTLELINE</div>
      <div className={styles.description}>
        {play
          ? "Your Team"
          : "A Battleship style game built using the Baseline Protocol"}
      </div>
      {play && (
        <div className={styles.preplayMessage}>
          Your team, or{" "}
          <span className={styles.organization}>organization</span>, will be a
          counterparty in the battlefield
        </div>
      )}
      {!play ? (
        <div className={styles.ctaContainer}>
          <div className={styles.cta} style={{ marginRight: "20px" }}>
            Learn More
          </div>
          <div className={styles.cta} style={{ width: "141px" }}>
            Play
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", maxWidth: "487px" }}>
          <div className={styles.cta} onClick={() => setPlay(true)}>
            Next
          </div>
        </div>
      )}
    </div>
  );
}
