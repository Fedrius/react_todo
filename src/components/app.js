import 'materialize-css/dist/css/materialize.min.css'
import React, {Component} from 'react';
import axios from 'axios';
import todoData from '../assets/data'
import TodoList from './todo_list'
import AddForm from './add_form'

//App should be only manipulating data. owner of the data should only be manipulating that data.

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=notaunqiuekey7';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            list: []
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.toggleComplete = this.toggleComplete.bind(this);
    }

    getData(){
        axios.get(`${BASE_URL}/todos${API_KEY}`).then((response)=>{
            console.log('server ressp', response);

            this.setState({
                list: response.data.todos
            })
        });
    }

    componentDidMount(){
        this.getData();
    }

    addItem(item) {
        axios.post(`${BASE_URL}/todos${API_KEY}`, item).then((response)=>{
            this.getData();
        })
    }

    deleteItem(id){
        axios.delete(`${BASE_URL}/todos/${id + API_KEY}`).then((response)=>{
            this.getData();
        })
    }

    toggleComplete(id){
        axios.put(`${BASE_URL}/todos/${id + API_KEY}`).then((response)=>{
            this.getData();
        })
    }

    render(){

        return (
            <div className='container'>
                <h1 className='center-align'>To Eat App</h1>
                <AddForm add={this.addItem}/>
                <TodoList list={this.state.list} delete={this.deleteItem} toggle={this.toggleComplete}/>
            </div>
        );
    }
}

export default App;
