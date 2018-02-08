import React from 'react';

export default (props)=> {

    const backgroundStyle = {
        backgroundColor: null
    };

    const textStyle = {
        textDecoration: null
    }

    backgroundStyle.backgroundColor = (props.completion)? 'green' : 'red';
    textStyle.textDecoration = (props.completion)? 'line-through' : 'none';

    return(
        <li className='collection-item' style={backgroundStyle}>
            <div className='row'>
                <div className='col s6'>
                    <h4 style={textStyle}>{props.title}</h4>
                </div>
                <div className='col s6 right-align'>
                    <button onClick={props.toggle} className='btn btn-floating green btn-large'>
                        <i className='material-icons'>local_pizza</i>
                    </button>
                    <button onClick={props.delete} className='btn btn-floating red btn-large'>
                        <i className='material-icons'>local_pizza</i>
                    </button>
                </div>
            </div>
        </li>
    )
}