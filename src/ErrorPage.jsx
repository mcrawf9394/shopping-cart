import { Link } from "react-router-dom";

export default function ErrorPage () {
    return (
        <div className="mb-80">
            <h1>An error has occurred, use the link to go back to the main page.</h1>
            <Link to="/">
                Back to Home
            </Link>
        </div>
    )
}