import "./Button.css";

const Button = (props) => {
  const { title, children } = props;
  return (
    <>
      <h4>{title}</h4>
      <button
        className="custom-button"
        onClick={() => {
          console.log("Button clicked!");
        }}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
