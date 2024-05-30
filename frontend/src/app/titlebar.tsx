export default function Titlebar({isAuthenticated}:{isAuthenticated:boolean}) {
    return (
        <nav className="navbar navbar-expand bg-body-tertiary border-bottom container-fluid">
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
                    {isAuthenticated ? 
                        <a href="/api/auth/signout" className="btn btn-outline-primary me-2">Log out</a>
                        :
                        <a href="/api/auth/signin" className="btn btn-outline-primary me-2">Login</a>
                    }
                </div>
            </div>
        </nav>
    )
}