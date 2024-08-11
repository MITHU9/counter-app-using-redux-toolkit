import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const displayCounter = useSelector((store) => store.count);

  return <p className="lead mb-4">Counter Current Value: {displayCounter}</p>;
};

export default DisplayCounter;
