import { Alert, Button, Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import { Href } from "../Href";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


export function Profil({}) {
    let { userId } = useParams();

    let [ProfilUser, setProfilUser] = useState([]);
    let [Loading, setLoading]= useState(true);

    useEffect(() =>{
        axios
        .get(`https://reqres.in/api/users/${userId}`)
        .then((json) =>setProfilUser(json.data.data));
        setLoading();
    }, [])

    console.log(ProfilUser);

    return (
        <div >
            {
                ProfilUser && <>
                    <Alert color="primary">
                        <h2 className="text-center">Profil</h2>
                    </Alert>
                    { Loading && <h2>Loading...</h2>}
                    <Button outline color="info"><Link to={"/"}>Home</Link></Button>
                    <Card className="mt-3 w-[200px] flex items-center py-3">
                        <img className="rounded-[50%]" width="100" src={ProfilUser.avatar}/>
                        <CardBody className="flex row justify-center items-center ">
                            <CardTitle className="text-center fs-6">Name:{ProfilUser.first_name}</CardTitle>
                            <CardSubtitle className="text-center fs-5">Las Name:{ProfilUser.last_name} 
                            </CardSubtitle>
                            <a href={`mailto:${ProfilUser.email}`} className="text-center ml-2 ">
                            {ProfilUser.email}</a>
                        </CardBody>
                    </Card>
                </>
            }
        </div>

    )
}