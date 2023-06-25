import "./Button.module.css";

const Button = ({
  actionFunction = () => {},
  label,
  color,
  background,
  height = "33px",
  width = "97px",
  fontSize = "12px",
  boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius = "4px",
  propsClasses = [],
}) => {
  const cssStyle = {
    color: color,
    backgroundColor: background,
    width,
    height,
    fontSize,
    borderRadius,
    boxShadow,
  };

  const classes = ["btn class-btn", ...propsClasses];

  return (
    <button
      className={classes}
      style={cssStyle}
      onClick={() => actionFunction()}
    >
      {label}
    </button>
  );
};

export default Button;
