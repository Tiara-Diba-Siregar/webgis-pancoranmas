import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h3>HOMEPAGE ROUTE</h3>
      <button onClick={() => navigate("/map")}>See Map</button>
    </>
  );
};

export default HomePage;
