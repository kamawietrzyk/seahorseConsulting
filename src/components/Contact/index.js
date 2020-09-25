import React, { useState } from 'react';
import './styles.scss';

const Contact = () => {

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ rodo, setRodo ] = useState(false);
    // const [ error, setError ] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        window.Pageclip.send("4XU6umLZPA1dXD4HI0fwOTMh0zH7FwUl", "SeahorseConsulting", { name, email, message, rodo }, (error, response) => {
            console.log(error, response)
        })
    }

    return (
        <div className="Contact" id="contact">
            <div className="Contact-main">
                <h2>Kontakt</h2>
                <hr className="h-underline" />
                <p className="text-center">Jeżeli jesteś zainteresowana / zainteresowany współpracą, zapraszam do kontaktu!</p>
                <div className="Contact-main_form">
                    <form className="pageclip-form">
                        <div className="form-group custom-div mb-0">
                            <div className="col1">
                                <label htmlFor="exampleInputName">*Imię i nazwisko</label>
                                <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" name="sender" id="exampleInputName" required />
                            </div>
                            <div className="col2">
                                <label htmlFor="exampleInputEmail">*Twój e-mail</label>
                                <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail" name="email" aria-describedby="emailHelp" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea">*Twoja wiadomość</label>
                            <textarea value={message} onChange={e => setMessage(e.target.value)} className="form-control" name="message" id="exampleFormControlTextarea" rows="3" required />
                        </div>
                        <div className="form-group rodo">
                            <input type="checkbox" name="rodo" id="rodo" required />
                            <label value={rodo} onChange={e => setRodo(e.target.value)} htmlFor="rodo"><small>*Wyrażam zgodę na przetwarzanie moich danych osobowych, na podstawie ogólnego Rozporządzenia o Ochronie Danych Osobowych z dnia 27 kwietnia 2016 r., przez Seahorse Consulting Joanna Kawalec, NIP: 886-25-31-596</small></label>
                        </div>
                        <button
                        onClick={handleSubmit}
                        type="submit"
                        className="pageclip-form__submit"
                        >
                            <span>Wyślij</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact