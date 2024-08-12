import React, { useState } from 'react';

const GeneralList = (props) => {
    return (
        <div className={`bg-${props.color} text-white p-2`}>
            {props.list.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
    );
}

function ActionButton(props) {
    const handleClick = () => {
        props.callback();
    }
    return <button onClick={handleClick}>{props.text}</button>
}

function SortedList(props) {
    const [toSort, setToSort] = useState(false);
    const getList = () => toSort ? [...props.list].sort() : props.list;
    const toggleSort = () => setToSort(true);

    return (
        <>
            <GeneralList color='info' list={getList()} />
            <div className='text-center m-2'>
                <ActionButton text='Sort' callback={toggleSort} />
            </div>
        </>
    );
}

// Function that accepts a component and returns an enhanced component
function higherOrderComponent(FeatureComponent) {
    return function (props) {
        const { pro, ...childProps } = props;
        if (pro) {
            return <FeatureComponent {...childProps} />;
        } else {
            return (
                <h4 className='bg-warning text-white text-center m-2 p-2'>
                    This is a pro feature
                </h4>
            );
        }
    }
}

// Creating an enhanced version of SortedList using higherOrderComponent
const EnhancedComponent = higherOrderComponent(SortedList);

export default function ProFeatureContainer() {
    const [fruits, setFruits] = useState(['apple', 'banana', 'orange', 'pineapple', 'mango', 'watermelon']);
    const [cities, setCities] = useState(['London', 'New York', 'Paris', 'Milan', 'Delhi']);

    const [proMode, setProMode] = useState(false);
    const toggleProMode = () => {
        setProMode(!proMode);
    }

    return (
        <>
            <div className='row'>
                <div className='col-12 text-center p-2'>
                    <div className='form-check'>
                        <input 
                            type='checkbox' 
                            className='form-check-input' 
                            checked={proMode} 
                            onChange={toggleProMode} 

                            style={{marginLeft: "10px"}}
                        />
                        <label className='form-check-label'>Pro Mode</label>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-3'>
                    <GeneralList color='primary' list={fruits} />
                </div>
                <div className='col-3'>
                    <EnhancedComponent color='primary' list={fruits} pro={proMode} />
                </div>
                <div className='col-3'>
                    <GeneralList color='primary' list={cities} />
                </div>
                <div className='col-3'>
                    <EnhancedComponent list={cities} pro={proMode} />
                </div>
            </div>
        </>
    );
}
