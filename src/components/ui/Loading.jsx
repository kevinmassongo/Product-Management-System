import Spinner from "./Spinner";

function Loading({
  message = "Chargement...",
}) {
  return (
    <div className="loading">
      <Spinner />

      <span className="loading-message">
        {message}
      </span>
    </div>
  );
}

export default Loading;