import { createUseStyles } from "react-jss";
import { useMemo, useState } from "react";

const SQUARES = new Array(6).fill("").map((_) => new Array(6).fill(""));
const LETTERS = ["A", "B", "C", "D", "E", "F"];

const useStyles = createUseStyles({
  body: {
    fontSize: "24px",
    fontWeight: 400,
    lineHeight: "29px",
  },
  console: {
    background: "#666666",
    color: "#00FF85",
    fontWeight: 300,
    marginTop: "40x",
    minHeight: "327px",
    padding: "27px 14px",
  },
  container: {
    display: "flex",
    padding: "12px 31px",
    minHeight: "100vh",
  },
  coordinateBadge: {
    background: "#FFFFFF",
    border: "2px solid #666666",
    fontSize: "36px",
    fontWeight: 400,
    lineHeight: "44px",
  },
  cta: {
    border: "1px solid #959595",
    borderRadius: "3px",
    background: "#D4D4D4",
    cursor: "pointer",
    marginTop: "114px",
    padding: "14px 26px",
  },
  left: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: "20px",
    width: "100%",
  },
  heading: {
    fontSize: "42px",
    fontWeight: 500,
    lineHeight: "51px",
  },
  label: {
    fontSize: "32px",
    fontWeight: 300,
    lineHeight: "39px",
  },
  launchContainer: {
    background: "#C4C4C4",
    marginTop: "4px",
    padding: "12px",
  },
  moveContainer: {
    border: "2px solid #000000",
    marginTop: "20px",
    padding: "6px 12px 12px 12px",
  },
  right: {
    flexShrink: 0,
    width: "267px",
  },
  row: {
    alignItems: "center",
    display: "flex",
    marginTop: "1px",
  },
  selectedDot: {
    background: "#C4C4C4",
    borderRadius: "50%",
    height: "28px",
    width: "28px",
  },
  square: {
    alignItems: "center",
    border: "2px solid #666666",
    display: "flex",
    flexDirection: "column",
    height: "76px",
    justifyContent: "center",
    marginRight: "1px",
    width: "76px",
  },
  top: {
    fontSize: "28px",
    fontWeight: 400,
    marginBottom: "20px",
    textAlign: "center",
  },
});

export default function Game() {
  const [consoleMessages, setConsoleMessages] = useState(["ready"]);
  const [coordinate, setCoordinate] = useState('');
  const [selected, setSelected] = useState({ end: null, front: null });
  const [showConsole, setShowConsole] = useState(false);
  const styles = useStyles();

  const bothSelected = useMemo(() => {
    return selected.end && selected.front;
  }, [selected]);

  const calculateValidPositions = () => {};

  const isSelected = (index) => {
    return index === selected.end || index === selected.front;
  };

  const selectPosition = (index) => {
    if (index === selected.front) {
      setSelected({
        ...selected,
        front: null,
      });
    } else if (selected.front) {
      setSelected({
        ...selected,
        end: index,
      });
    } else {
      setSelected({
        ...selected,
        front: index,
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div>
          {SQUARES.map((row, index) => (
            <>
              <>
                {index === 0 && (
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "10px", width: "20px" }} />
                    {LETTERS.map((letter) => (
                      <div
                        className={styles.label}
                        style={{
                          marginRight: "5px",
                          width: "76px",
                          textAlign: "center",
                        }}
                      >
                        {letter}
                      </div>
                    ))}
                  </div>
                )}
              </>
              <div className={styles.row}>
                <div
                  className={styles.label}
                  style={{ marginRight: "10px", width: "20px" }}
                >
                  {index + 1}
                </div>
                {row.map((_, index2) => (
                  <>
                    <div
                      className={styles.square}
                      onClick={() =>
                        !bothSelected &&
                        selectPosition((index + 1) * 6 + index2)
                      }
                      style={{ cursor: !bothSelected ? "pointer" : "default" }}
                    >
                      {isSelected((index + 1) * 6 + index2) && (
                        <div className={styles.selectedDot} />
                      )}
                    </div>
                  </>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.heading}>BATTLELINE</div>
        <div className={styles.moveContainer}>
          <div className={styles.top}>Place Ships</div>
          {!showConsole ? (
            <>
              <div className={styles.body}>
                Placing your ships adds their position to the system of record.{" "}
                <br />
                <br />
                Drag them to the desired location in your system of record
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className={styles.cta} style={{ marginRight: "15px" }}>
                  Back
                </div>
                <div
                  className={styles.cta}
                  onClick={() => bothSelected && setShowConsole(true)}
                  style={{
                    cursor: bothSelected ? "pointer" : "default",
                    opacity: bothSelected ? 1 : 0.3,
                  }}
                >
                  Next
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={styles.console}>
                {consoleMessages.map((message) => (
                  <div style={{ marginTop: "15px" }}>{message}</div>
                ))}
              </div>
              <div className={styles.launchContainer}></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
