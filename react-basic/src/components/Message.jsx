const Message = ({ msg, bgColor }) => {
  let styles = {
    padding: ".5rem",
    marginBottom: "1rem",
    textAlign: "center",
    color: "#ffff",
    fontWeight: "bold",
    backgroundColor: bgColor,
  };
  return (
    <div style={styles}>
      <p>{msg}</p>
    </div>
  );
};

export default Message;
