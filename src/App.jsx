import "./styles/index.css";

const App = () => {
  return (
    <>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlink:href="#bootstrap" />
              </svg>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2 text-secondary">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  About
                </a>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-bg-white"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" className="btn btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container py-5" id="featured-3">
        <h2 className="pb-2 border-bottom text-white">MIS TAREAS</h2>
        <div className="row py-5">
          <div className="col-sm-3 gy-3 gx-3">
            <div className="card" style={{ width: "18rem;" }}>
              <div className="card-body">
                <h5 className="card-title ">Tarea N°: 1</h5>
                <p className="card-text">Texto para reemplazar</p>
                <button type="button" className="btn btn-sm btn-danger">
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-3 col-5">
          <input
            type="text"
            className="form-control"
            placeholder="Agregar una tarea"
          />
        </div>
        <div class="mb-3 col-5">
          <button className="btn btn-success">AGREGAR</button>
        </div>
      </div>
    </>
  );
};

export default App;
