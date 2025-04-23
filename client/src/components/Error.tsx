type ErrorProps = {
    errorCode: number,
    errorMessage: string
}

function Error({errorCode, errorMessage} : ErrorProps){
    return(
        <div>
            <h1>An error occured</h1>
            <h2>{errorCode}: {errorMessage}</h2>
        </div>
    )
}

export default Error;