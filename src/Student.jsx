import Score from "./Score";

const Student = (props) => {
  return (
    <>
    <div>
        <h2>Name: {props.student.name}</h2>
        <h2>Bio: {props.student.bio}</h2>
        <Score />
    </div>
    </>
  );
}

export default Student;