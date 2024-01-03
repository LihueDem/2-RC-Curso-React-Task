export const Banner = () => {
  return (
    <div className="container">
      <div
        className="row"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <div className="col-12 p-3">
          <div style={{ fontSize: "40px", fontWeight: "bold" }}>
            RollingCode
          </div>
          <div style={{ fontSize: "30px" }}>Ejercicio Practico Task!</div>
          <div style={{ fontSize: "13px" }}>
            Elevacion de Estado, UseState y useEffect
          </div>
        </div>
      </div>
    </div>
  );
};
