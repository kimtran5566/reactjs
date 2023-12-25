
function Student(){
    const students = [
        {name: 'A', age: 20},
        {name: 'B', age: 22},
        {name: 'C', age: 23}
    ];

    return(
        <div>
            <h1>List of Students</h1>
            <ul>
                {students.map((student => 
                <li key={student.name}>
                    {`name: ${student.name}; age: ${student.age}`}
                </li>
                ))}
            </ul>
        </div>
      );
}

export default Student;