import React, {Component} from 'react';
import ListItem from './list_item';

//if the file is called index.js inside the data directory, then dont have to add index on last line
import todoData from '../assets/data'

class TodoList extends Component {
    render(){
        const listItems = this.props.list.map((item, index)=>{
            return <ListItem key={index} title={item.title} delete={()=>{this.props.delete(item._id)}}/>
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