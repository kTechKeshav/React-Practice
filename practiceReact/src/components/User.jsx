import '../styles/user.css'

const User = ({name, age, isMarried, hobbies, img}) => {
  return (
    <section>
      <img
        width={"200px"}
        style={{ borderRadius: "20px" }}
        src={img}
        alt="Profile"
      />
      <span>{name} </span>
      {age}
      {isMarried}
      Hobbies : {hobbies.map((hobby) => hobby + ", ")}
    </section>
  );
};

export default User;