'use client';

export default function Post() {
    return(
        <div className="container">
            <h1 className="text-center">Create Post</h1>
            <hr />
            <div className="card mb-2">
                <div className="border-bottom bg-secondary" style={{height:"70vh"}}>
                    <img id="image" className="text-center" style={{objectFit:"contain", width:"100%", height:"70vh"}} />
                </div>
                <div className="card-body">
                    <form action="#" method="post">
                        <div className="">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input id="title" type="text" className="form-control"/>
                        </div>
                        <div className="">
                            <label htmlFor="location" className="form-label">Location</label>
                            <input id="location" type="text" className="form-control"/>
                        </div>
                        <div className="">
                            <label htmlFor="imageLink" className="form-label">Image</label>
                            <input id="imageLink" type="text" className="form-control"/>
                        </div>
                        <div className="">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea id="description" className="form-control"></textarea>
                        </div>
                        <div className="d-flex pt-3">
                            <a href="/" className="btn btn-outline-secondary">Cancel</a>
                            <button type="submit" className="btn btn-outline-primary ms-auto">Post ➦</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}