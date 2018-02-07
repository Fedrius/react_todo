import React from 'react';

export default (props)=> {
    return(
        <li className='collection-item'>
            <div className='row'>
                <div className='col s6'>
                    {props.title}
                </div>
                <div className='col s6 right-align'>
                    <button onClick={props.delete} className='btn btn-floating red btn-large'>
                        <i className='material-icons'>local_pizza</i>
                    </button>
                </div>
            </div>
        </li>
    )
}