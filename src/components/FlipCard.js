import cn from "classnames";
import Button from "@mui/material/Button";

function FlipCard({ card }) {
  return (
    <div className="flip-card-outer">
      <div
        className={cn("flip-card-inner", {
          "hover-trigger": card.variant === "hover",
        })}
      >
        <div className="card front">
          <div className="card-body d-flex justify-content-center align-items-center ">
            <p className="card-text fs-1 fw-bold">
              <img src={card.imgSrc} alt={card.imgAlt} />
            </p>
          </div>
        </div>
        <div className="card back">
          <div className="card-body d-flex justify-content-center align-items-center">
            <p className="card-text fs-1 fw-bold">
              <div style={{ textAlign: "center" }}>
                {card.icon}
                <h1 style={{ fontSize: 20 }}>{card.projectTitle}</h1>
                <p
                  style={{
                    fontSize: 15,
                    color: "rgba(255, 255, 255, 0.7)",
                    fontWeight: 400,
                  }}
                >
                  {card.projectDesc}
                </p>
                <p style={{ fontSize: 14 }}>{card.projectTools}</p>
                <Button
                  style={{}}
                  variant="outlined"
                  onClick={() =>
                    window.open(
                      "https://github.com/ReichertA2/Single-Page-App-Flask-.git"
                    )
                  }
                >
                  Featured Project
                </Button>
                {/* <a href=></a> add link of resume scanner and link to code*/}
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
