import "./../App.css";

const Square = ({ onclick, value }) => {
  return (
    <button className="square" onClick={() => onclick(value)}>
      {value}
    </button>
  );
};

export default Square;
