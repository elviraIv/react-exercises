import { useState } from "react";
import { useParams, Link } from "react-router-dom";

const GameDetails = ({ games, addComment }) => {
  const { gameId } = useParams();
  const [comment, setComment] = useState({
    username: "",
    comment: "",
  });

  const [error, setError] = useState({
    username: "",
    comment: "",
  });

  const game = games.find((x) => x._id === gameId);

  const addCommentHandler = (e) => {
    e.preventDefault();
    addComment(gameId, `${comment.username}: ${comment.comment}`);
  };

  const onChange = (e) => {
    setComment((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const validateUsername = (e) => {
    const username = e.target.value;
    let errorMessage = "";

    if (username.length < 4) {
      errorMessage = "Username must be longer than 4 characters";
    } else if (username.length > 10) {
      errorMessage = "Username must be shorter than 10 characters";
    }
    setError((state) => ({
      ...state,
      username: errorMessage,
    }));
  };

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={game.imageUrl} alt="" />
          <h1>{game.title}</h1>
          <span className="levels">MaxLevel: {game.maxLevel}</span>
          <p className="type">{game.category}</p>
        </div>
        <p className="text">{game.summary}</p>
        {/* Bonus ( for Guests and Users ) */}
        <div className="details-comments">
          <h2>Comments:</h2>
          <ul>
            {game.comments?.map((x) => (
              <li className="comment">
                <p>{x}</p>
              </li>
            ))}
            {!game.comments && <p className="no-comment">No comments.</p>}
          </ul>
        </div>
        <div className="buttons">
          <Link href="#" className="button">
            Edit
          </Link>
          <Link href="#" className="button">
            Delete
          </Link>
        </div>
      </div>

      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" onSubmit={addCommentHandler}>
          <input
            onChange={onChange}
            value={comment.username}
            onBlur={validateUsername}
            type="text"
            name="username"
            placeholder="John Doe"
          />

              {error.username && 
              <div style={{color:'red'}}>{error.username}</div>}


          <textarea
            name="comment"
            placeholder="Comment......"
            onChange={onChange}
            value={comment.comment}
          />
          <input className="btn submit" type="submit" value="Add Comment" />
        </form>
      </article>
    </section>
  );
};

export default GameDetails;
