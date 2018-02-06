import React, {Component} from 'react';

class AddForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            details: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    handleInputChange(event){
        const {name, value} = event.target;

        this.setState({
            [name]: value
        })
    }

    addItem(event){
        event.preventDefault();

        console.log(this.state);

        this.props.add(this.state);

        this.setState({
            title:'',
            details: ''
        })
    }

    render(){
        const {title, details} = this.state;

        return(
            <div className='row'>
                <form className='col s12' onSubmit={this.addItem}>
                    <div className='row'>
                        <div className='input-field col s6'>
                            <input onChange={this.handleInputChange} name='title' value={title} placeholder='Item Title' type='text'/>
                        </div>
                        <div className='input-field col s6'>
                            <input onChange={this.handleInputChange} name='details' value={details} placeholder='Item Details' type='text'/>
                        </div>
                    </div>
                    <div className='center-align'>
                        <button className='btn orange'>Add Item</button>
                    </div>
                </form>
            </div>
        )

    }
}

export default AddForm