import React from 'react';

const ChildComponent = (props)=>{
    return(
        <div>
            <h2>Thong tin nhan vien</h2>
            <p>Name: {props.user.name}</p>
            <p>Age: {props.user.age}</p>
        </div>
    )
}
export default ChildComponent