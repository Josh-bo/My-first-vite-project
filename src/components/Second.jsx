import React from 'react';
import  {useState} from 'react';

const Second = () => {
    let myName = "Joshua";
    let mySchool = "SQI";
    let number = 8

        const [first, setfirst] = useState(0)

        const increment = () => {
            setfirst(first+1)
            console.log(first);
        }
        const decrement = () => {
            setfirst(first-1)
            console.log(first);
        }
        const restart = () => {
            setfirst(0)
            console.log(first);
        }

        let allStudents = [
          {name: "Shola", school:"SQI"},
          {name: "Mike", school:"Lautech"},
          {name: "Elijah", school:"Poly"}
        ]

  return (
      <>
      {number == 8 ? <div>even number</div> : <div>Odd number</div>}
      <button onClick={increment} className='btn btn-success mx-2'>Increment</button>
      <button onClick={decrement} className='btn btn-warning'>Decrement</button>
      <button onClick={restart} className='btn btn-danger mx-2'>Restart</button>
        <div>{first}</div>


            <table className='table table-striped table-hover table-bordered'>
              <tr>
                <th>S/N</th>
                <th>NAME</th>
                <th>SCHOOL</th>
              </tr>
        {
          allStudents.map((item, i)=>(
            <tr>
                <td>{i+1}</td>
                <td>{item.name}</td>
                <td>{item.school}</td>
              </tr>
          ))
        }
        </table>
      </>
  );
}

export default Second;
