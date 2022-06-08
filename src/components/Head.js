import PropType from "prop-types";
import Button from "./Button";
const Head = ({ title }) => {
  const onClick = () => {
    console.log("Click");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Hello" onClick={onClick} />
      <Button color="blue" text="Hello 1" />
      <Button color="red" text="Hello 2" />
    </header>
  );
};
Head.defaultProps = {
  title: "task tracker",
};
/*
Head.PropType = {
  title: PropType.String.isRequired,
};*/
export default Head;
