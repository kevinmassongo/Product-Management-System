function Input({
  label,
  error,
  startIcon,
  endContent,
  className = "",
  ...props
}) {
  return (
    <div className="input-group">
      {label && (
        <label className="input-label">
          {label}
        </label>
      )}

      <div className={`input-wrapper ${className}`}>
        {startIcon && (
          <span className="input-start-icon">
            {startIcon}
          </span>
        )}

        <input
          className={`input ${error ? "input-error" : ""}`}
          {...props}
        />

        {endContent && (
          <span className="input-end-content">
            {endContent}
          </span>
        )}
      </div>

      {error && (
        <span className="input-error-message">
          {error}
        </span>
      )}
    </div>
  );
}

export default Input;