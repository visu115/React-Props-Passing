import React from 'react'

function CounterBaby(props) {

    const { value } = props;
    // console.log('counterBaby :',value)

    let newArr = [];
    newArr = value;




    return (
        // obj=newArr
        <div >
            <table className='container table table-responsive table-hover table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {newArr.map((item,index) => {
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.title}</td>

                            </tr>
                        )
                    })}

                </tbody>

            </table>

            {/* <button onClick={props.onClickIncrement}>plus</button>
            <p>{props.value}</p>
            <button onClick={props.onClickDecrement}>minus</button> */}
        </div>
    )
}

export default CounterBaby;

