import "./Button.scss";

function Button({ type, css, children, onClick }) {
  return (
    <button type={type} className={css} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
