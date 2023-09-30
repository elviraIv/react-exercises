const LatestGame = ({
    game
}) => {
  return (
    <div className={game.imageUrl}>
      <div className="image-wrap">
        <img src="./images/CoverFire.png" alt="" />
      </div>
      <h3>{game.title}</h3>
      <div className="rating">
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
      </div>
      <div className="data-buttons">
        <button href="" className="btn details-btn">
          Details
        </button>
      </div>
    </div>
  );
};

export default LatestGame;
