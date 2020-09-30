import React, { Component } from 'react';
import './styles.scss';

class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        rodo: false,
        formErrors: { name: '', email: '', message: '' },
        nameValid: false,
        emailValid: false,
        messageValid: false,
        formValid: false,
        messageSuccess: ''
    }

    handleSubmit = e => {
        const { name, email, message, rodo } = this.state;

        e.preventDefault();
        this.validateForm();
        window.Pageclip.send("4XU6umLZPA1dXD4HI0fwOTMh0zH7FwUl", "SeahorseConsulting", { name, email, message, rodo }, (error) => {
            if (!error) {
                this.setState({ messageSuccess: 'success' });
                this.resetForm();
            } else {
                this.setState({ messageSuccess: 'error' })
            }
        })
    }

    validateField(fieldName, value) {
        let { formErrors, nameValid, emailValid, messageValid } = this.state

        switch (fieldName) {
            case 'name':
                nameValid = value.length > 0;
                formErrors.name = nameValid ? '' : "Uzupełnij imię i nazwisko!";
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                formErrors.email = emailValid ? '' : 'Format e-maila jest nieprawidłowy!';
                break;
            case 'message':
                messageValid = value.length > 0;
                formErrors.message = messageValid ? '' : "Nie zapomnij wpisać treści..!";
                break;
            default:
                break;
        }
        this.setState({
            formErrors,
            nameValid,
            emailValid,
            messageValid,
        }, this.validateForm());
    }

    validateForm() {
        const { nameValid, emailValid, messageValid, rodo } = this.state;
        this.setState({ formValid: nameValid && emailValid && messageValid && rodo });
    }

    resetForm = () => {
        this.setState({
            name: '',
            email: '',
            message: ''
        })
    }

    handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) })
    }

    handleRodo = e => {
        const value = e.target.checked
        this.setState({
            rodo: value
        },
            () => { this.validateField('rodo', value) })
    }

    render() {
        const { name, email, message, rodo, messageSuccess, formErrors, formValid } = this.state

        if (messageSuccess === 'success' || messageSuccess === 'error') {
            return (
                <div className="Contact" id="contact">
                    <div className="Contact-main">
                        <h2>Kontakt</h2>
                        <hr className="h-underline" />
                        <p className="text-center">Jeżeli jesteś zainteresowana / zainteresowany współpracą, zapraszam do kontaktu!</p>
                        <div className="Contact-main_form">
                            <p className={`${messageSuccess === 'success' && 'text-success'} ${messageSuccess === 'error' && 'text-danger'}`} style={{ textAlign: 'center', marginTop: '1rem', fontSize: '1.25rem' }}>
                                {messageSuccess === 'success' && "Wiadomość została poprawnie wysłana!"}
                                {messageSuccess === 'error' && "Ups, coś poszło nie tak! Spróbuj ponownie później."}
                            </p>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="Contact" id="contact">
                <div className="Contact-main">
                    <h2>Kontakt</h2>
                    <hr className="h-underline" />
                    <p className="text-center">Jeżeli jesteś zainteresowana / zainteresowany współpracą, zapraszam do kontaktu:</p>
                    <p className="Contact-main_contact text-center"><strong>Joanna Kawalec - (+48) 518-320-349</strong></p>
                    <p className="text-center">Możesz także skorzystać z poniższego formularza kontaktowego!</p>
                    <div className="Contact-main_form">
                        <form className="pageclip-form">
                            <div className="form-group custom-div mb-0">
                                <div className="col1">
                                    <label htmlFor="exampleInputName">*Imię i nazwisko</label>
                                    <input value={name} onChange={e => this.handleInput(e)} type="text" className="form-control" id="exampleInputName" name="name" aria-describedby="name" required />
                                    <p className="text-danger" style={{ height: ".25rem", fontSize: "14px", marginTop: ".25rem" }}>{formErrors.name}</p>
                                </div>
                                <div className="col2">
                                    <label htmlFor="exampleInputEmail">*Twój e-mail</label>
                                    <input value={email} onChange={e => this.handleInput(e)} type="email" className="form-control" id="exampleInputEmail" name="email" aria-describedby="emailHelp" required />
                                    <p className="text-danger" style={{ height: ".25rem", fontSize: "14px", marginTop: ".25rem" }}>{formErrors.email}</p>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea">*Twoja wiadomość</label>
                                <textarea value={message} onChange={e => this.handleInput(e)} className="form-control" name="message" id="exampleFormControlTextarea" rows="3" required />
                                <p className="text-danger" style={{ height: ".25rem", fontSize: "14px", marginTop: ".25rem" }}>{formErrors.message}</p>
                            </div>
                            <div className="rodo custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" onChange={this.handleRodo} value={rodo} name="rodo" id="rodo" checked={rodo} />
                                <label htmlFor="rodo"><small>*Wyrażam zgodę na przetwarzanie moich danych osobowych, na podstawie ogólnego Rozporządzenia o Ochronie Danych Osobowych z dnia 27 kwietnia 2016 r., przez Seahorse Consulting Joanna Kawalec, NIP: 886-25-31-596</small>
                                </label>
                            </div>
                            <button
                                onClick={this.handleSubmit}
                                type="submit"
                                className="btn pageclip-form__submit"
                                disabled={!formValid}
                            >
                                <span>Wyślij</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact