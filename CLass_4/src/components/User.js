const User = (props) => {
  const {Name} = props;
    return (
      <div className="User">
        <h3>Name : {Name}</h3>
        <h3>Location : Delhi, India</h3>
        <h3>Email : ayush.bhardwaj5588@gmail.com</h3>
      </div>  
    )
}

export default User;