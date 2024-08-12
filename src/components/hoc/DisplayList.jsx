import React from 'react';

function List(props) {
    const listElements = props.list.map((e, i) => <li key={i}>{e}</li>);
    return (
        <ul>
            {listElements}
        </ul>
    );
}

function TitledList(WrappedComponent) {
    return function (props) {
        return (
            <div>
                <h2>{props.title}</h2>
                <WrappedComponent {...props} />
            </div>
        );
    };
}

const EnhancedComponent = TitledList(List);

export default function RenderList() {
    const fruits = ['peach', 'raspberry', 'apple', 'banana', 'orange', 'pineapple', 'mango', 'watermelon'];
    return (
        <EnhancedComponent title='Fruits Available' list={fruits} />
    );
}
