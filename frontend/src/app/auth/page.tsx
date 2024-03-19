import createUser from "./createUser";

export default function Authentication() {
    return(
        <form action={createUser}>
            <div>
                <label htmlFor="username" className="form-label">username</label>
                <input id="username" name="username" type="text" className="form-control" required/>
            </div>
            <div>
                <label htmlFor="password" className="form-label">password</label>
                <input id="password" name="password" type="password" className="form-control" required/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}