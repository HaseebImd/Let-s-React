import React  from "react";

function Greeting(props) {
    console.log(props.data);
    const { info } = props.data
    const { education } = props.data
    return (
        <>
            <h3>Basic Info</h3>
            <ul>
                <li>
                    Name: {info.name}
                </li>
                <li>
                    Age: {info.age}
                </li>
            </ul>
            <h3>Education</h3>
            <ul>
                <li>
                    BSCS Award: {education.BSCS.award}
                </li>
                <li>
                    MSCS Award: {education.MSCS.award}
                </li>
            </ul>
        </>
    )
}

export default Greeting;