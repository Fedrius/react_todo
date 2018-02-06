import React, {Component} from 'react';

//if the file is called index.js inside the data directory, then dont have to add index on last line
import todoData from '../assets/data'

class TodoList extends Component {
    render(){
        const listItems = this.props.list.map((item, index)=>{
            return (
                <li key={index} className='collection-item'>
                    {item.title}
                </li>
            )
        });

        return (
            <div>
                <ul className='collection'>
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default TodoList;