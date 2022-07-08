

const Student = (props) => {
  return (
    <>
    <div>
      {props.students.map(student =>
      <>
      <h2>Name: {student.name}</h2>
      <h2>Bio: {student.bio}</h2>
      
      </>
        
        )}
    </div>
    </>
  );
}

export default Student;