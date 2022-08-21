import cn from "classnames";


function FlipCard({ card }) {
  return (
    <div className="flip-card-outer">
      <div
        className={cn("flip-card-inner", {
          "hover-trigger": card.variant === "hover"
        })}
      >
      
        <div className="card front">
          <div  className="card-body d-flex justify-content-center align-items-center ">
            <p className="card-text fs-1 fw-bold">{card.front}</p>
          </div>
        </div>
        <div className="card back">
          <div className="card-body d-flex justify-content-center align-items-center">
            <p className="card-text fs-1 fw-bold">{card.back}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;