export default function Home() {
  return (
    <div className="container">
      <h1 className="text-center">Travel Journal Feed</h1>
      <hr />
      <div className="card mb-2">
        <div className="border-bottom bg-secondary">
          <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" style={{ objectFit: "contain", width: "100%", maxHeight: "70vh" }} alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title d-flex align-items-end">
            <div className="me-1">null</div>
            <div className="text-secondary fs-6 fst-italic">by user</div>
            <div className="ms-auto text-secondary fs-6">📍
              <span>null</span>
            </div>
          </h5>
          <p className="card-text">null</p>
          <div className="text-end">
            <a className="btn btn-outline-primary">
              <span>0</span> 👍
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
