import React from 'react';

function Credentials(props) {
    return (
        <nav style={{textAlign: 'right'}}>Username: <b>{props.username}</b> - Roles: <b>{props.roles}</b></nav>
    );
}

export default Credentials;
