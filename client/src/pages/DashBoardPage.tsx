import { useUser } from "../context/UserContext";

function DashBoardPage(){
    const {user} = useUser();
    return (
        <div>
            <h1>This is a dashboard</h1>
            <h2>you are signed in as {user
          ? `${user?.username}`
          : "You are not signed in."}</h2>
        </div>
)
}

export default DashBoardPage