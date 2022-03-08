import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImage, title, summary, hasGenres, genres }) {
  return (
    <div>
      <img src={coverImage} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      {/* gernes가 없는 경우 에러 => 예외처리 필요 */}
      {hasGenres ? (
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  hasGenres: PropTypes.bool.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
