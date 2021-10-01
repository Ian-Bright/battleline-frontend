import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  cta: {
    border: "1px solid #959595",
    borderRadius: "3px",
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
  wrapper: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100vh",
  },
});

export default function Home() {
  const styles = useStyles();
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>BATTLELINE</div>
      <div className={styles.description}>
        A Battleship style game built using the Baseline Protocol
      </div>
      <div className={styles.ctaContainer}>
        <div className={styles.cta} style={{ marginRight: "20px" }}>
          Learn More
        </div>
        <div className={styles.cta}>Play</div>
      </div>
    </div>
  );
}
