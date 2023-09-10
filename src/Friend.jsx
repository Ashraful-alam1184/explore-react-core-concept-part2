export default function Friend({friend}){
    const {name, email, username, phone, website} = friend;
    return(
        <div className="box">
            <h3>Name: {name} </h3>
            <p>Email: {email}</p>
            <p>Username: {username} </p>
            <p>Phone: {phone} </p>
            <p>Website: {website} </p>

        </div>
    )
}