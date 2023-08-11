function LogoBox({ backgroundColor, clickColor, dotColor }) {
  const logo = {
    width: "38px",
    height: "140px",
    backgroundColor: backgroundColor || "#9FECC2",
    borderRadius: "20px",
    margin: "10px",
    paddingTop: "12px",
    paddingLeft: "104px",
  };
  const dot = {
    width: "26px",
    height: "26px",
    backgroundColor: dotColor || "white",
  };
  const handleBackgroundColor = (e) => {
    e.target.style.background = clickColor;
  };
  return (
    <div style={logo} onClick={handleBackgroundColor}>
      <div style={dot}></div>
    </div>
  );
}

export default LogoBox;
