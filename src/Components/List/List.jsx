import { Item } from "../Itim";
import { Link } from "react-router-dom";
import { Alert, Card, CardBody, CardSubtitle, CardTitle, Table } from "reactstrap";

export function List({ userData }) {



    return (
        <>
            <Alert color="primary">
                <h2 className="text-center">User Data</h2>
            </Alert>
            <div className="p-0 flex gap-3 " >
                {userData.map((user, index) => (
                    <Item key={index}>
                        <Card className="mt-3 w-[200px] py-3">
                            <p className="text-black text-start px-3 py-1 mx-2 border rounded-[50%] w-1">{user.id}</p>
                            <span className=" flex items-center justify-center py-3">
                                <img className="rounded-[50%]" top width="100" src={user.avatar} />
                            </span>
                            <Link className="text-center" to={`/user/${user.id}`}>{user.first_name}</Link>
                        </Card>
                    </Item>
                ))}
            </div>
        </>
    )
}