import React, {useState} from 'react';

export default function TestChildren(props:any) {
    const [list, setList] = useState(['2']);

    const push = (item:any) => {
        const newList = [...list];

        newList.push(item);
        setList(newList);
    };

    return (
        <div>
            <h3>Random number</h3>
            {props.children(list, push)}
        </div>
    );
}
