const Navbar = () => {

  const total = 25000
  const token = false

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <a className="navbar-brand" href="#">
          🍕 Pizzería Miracle since 1994
        </a>

        <div className="d-flex gap-2">

          <button className="btn btn-outline-light">
            🍕 Home
          </button>

          {token ? (
            <>
              <button className="btn btn-outline-light">
                🔓 Profile
              </button>

              <button className="btn btn-outline-light">
                🔒 Logout
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light">
                🔐 Login
              </button>

              <button className="btn btn-outline-light">
                🔐 Register
              </button>
            </>
          )}

          <button className="btn btn-warning">
            🛒 Total: ${total.toLocaleString('es-CL')}
          </button>

        </div>

      </div>
    </nav>
  )
}

export default Navbar