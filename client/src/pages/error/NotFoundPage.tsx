import Error from "../../components/Error";

function NotFoundPage(){
    return(<Error errorCode={404} errorMessage="Page not found."></Error>)
}

export default NotFoundPage