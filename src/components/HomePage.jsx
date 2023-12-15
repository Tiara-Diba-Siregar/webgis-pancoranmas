import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h3>HOMEPAGE ROUTE</h3>

      <button onClick={() => navigate("/map")} style={{ margin: "10px" }}>
        See Map
      </button>
      <button onClick={() => navigate("/schools")}>See schools</button>
    </>
  );
};

export default HomePage;
