const User = (props) => {
    return (
        <>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            <h1>{props.email}</h1>
        </>
    )
}

export default User