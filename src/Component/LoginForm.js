import React from "react";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.getEmployee} method="POST">
            <input type="text" name="username" />
            <input type="password" name="password" />
            <button>Submit</button>
        </form>
    );
}

export default LoginForm;