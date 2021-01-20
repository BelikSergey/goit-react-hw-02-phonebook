import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';
// import PropTypes from 'prop-types';

export default class ContactForm extends Component {
    state = {
        name: '',
        phone: '',
    };
    // nameId = nanoid()
    // phoneId = nanoid()

    handleInputChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };

    handleSubmitForm = e => {
        e.preventDefault();
        const { name, phone } = this.state;
        // this.props.onSubmit(this.state)
        const isValidForm = this.validateForm();
        if (isValidForm) {
            this.props.onSubmit({ id: nanoid(), name, phone });
        } else return;
        this.reset();
    };
    validateForm = () => {
        const { name, phone } = this.state;
        const { onChekunike } = this.props;
        if (!name || !phone) {
            alert('Empty fields!!! Please fill');
            return false;
        }
        return onChekunike(name);
    };
    reset = () => {
        this.setState({
            name: '',
            phone: '',
        });
    };
    // handleFormSubmit = (e) => {
    //      e.preventDefault()
    //      const { name, phone } = this.state;
    //      const { onAdd }=this.props;

    // }

    render() {
        const { name, phone } = this.state;
        return (
            <form className={s.form} onSubmit={this.handleSubmitForm}>
                <h3>Name</h3>
                <input
                    type="text"
                    name="name"
                    // id={this.nameId}
                    placeholder="Enter name"
                    value={name}
                    onChange={this.handleInputChange}
                ></input>

                <h3>Phone</h3>
                <input
                    type="tel"
                    // id={this.phoneId}
                    name="phone"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                    placeholder="012-345-67-89"
                    value={phone}
                    onChange={this.handleInputChange}
                ></input>
                <button className={s.buttonForm} type="submit">
                    Add contact
                </button>
            </form>
        );
    }
}
