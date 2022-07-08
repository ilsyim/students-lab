import Score from "./Score";

const Student = (props) => {
  return (
    <>
    <div>
      {props.students.map(student =>
      <>
        <h2>Name: {student.name}</h2>
        <h2>Bio: {student.bio}</h2>
        <Score />
      </>
        
        )}
    </div>
    </>
  );
}

export default Student;