import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <nav className="navbar navbar-expand-sm bg-body-tertiary border-bottom container-fluid">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">Home</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>    
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/post">Create Post</a>
                  </li>    
                </ul>
                <a href="#" className="btn btn-outline-primary me-2">Login</a>
                <a href="#" className="btn btn-outline-primary me-2">Log out</a>
              </div>
            </div>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
