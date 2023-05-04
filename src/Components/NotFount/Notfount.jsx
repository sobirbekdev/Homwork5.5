import { Button, CardImg } from "reactstrap";
import { Link } from "react-router-dom";

export function NotFount() {
    return (

        <div className="flex  items-center justify-center row ">
            <nav className="mt-4 flex  items-center justify-center row w-[500px]">
                <Button color="info" className=" w-[100px]">
                    <Link className="mt-4 text-white" to={"/"}>Hom Page</Link>
                </Button>
                <CardImg className="w-[500px]" top width="90%" src="https://cdn4.vectorstock.com/i/1000x1000/85/43/error-page-not-found-vector-27898543.jpg" alt="Card image cap" />
            </nav>
        </div>

    )

}