function UserCard(){
    const userName = "Afzal";
    const userAge = 21;

    const styleOuter = {
        backgroundColor : "white",
        fontWeight: "bold",
        color : "blue",
        display : "flex",
        justifyContent : "center",
        margin : "100px"
    }

    const styleInnerUserName = {
        backgroundColor : "red",
        fontWeight: "bold",
        color : "blue",
        display : "flex",
        justifyContent : "center",
        margin : "100px"
    }

    const styleInnerAge = {
        backgroundColor : "yellow",
        fontWeight: "bold",
        color : "blue",
        display : "flex",
        justifyContent : "center",
        margin : "100px"
    }
    return (
        <div style = {styleOuter}>
            <div style = {styleInnerUserName}>
            <h1>Name : {userName} </h1>
            </div>

            <div style = {styleInnerAge}>
            <h4>Age : {userAge} </h4>
            </div>
        </div>

    );
}

export default UserCard;