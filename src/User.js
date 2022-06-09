import React from "react";

const UserComponent = (props) => {
    console.warn(props.data);
    console.warn(props.rollno);
    return(
        <>
        <h1>UserComponent</h1>
        <h4>{props.data}</h4>
        <h4>{props.rollno}</h4>
        </>
    );
}
export default UserComponent;