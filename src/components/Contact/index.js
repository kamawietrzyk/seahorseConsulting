import React from 'react';
import './styles.scss';

const Contact = () => (
    <div className="Contact" id="contact">
        <div className="Contact-main">
            <h2>Kontakt</h2>
            <hr className="h-underline" />
            <p>Jesteś zainteresowany współpracą? Nie wahaj się ani chwili dłużej - wyślij do mnie swoją wiadomość. Zażółć gęślą jaźń, raz dwa trzy - to jest test polskich znaków typu ż, ź, ł, ó, ą, ę, ć, ś, ń... i tak dalej. Vel illum qui dolorem eum fugiat quo voluptas!</p>
            <div className="Contact-main_form">
                <form action="https://send.pageclip.co/4XU6umLZPA1dXD4HI0fwOTMh0zH7FwUl/SeahorseConsulting" className="pageclip-form" method="post">
                    <div class="form-group custom-div mb-0">
                        <div className="col1">
                            <label htmlFor="exampleInputName">*Imię i nazwisko</label>
                            <input type="text" className="form-control" name="sender" id="exampleInputName" required />
                        </div>
                        <div className="col2">
                            <label htmlFor="exampleInputEmail">*Twój e-mail</label>
                            <input type="email" className="form-control" id="exampleInputEmail" name="email" aria-describedby="emailHelp" required />
                        </div>
                    </div>
                    <div class="form-group">
                        <label htmlFor="exampleInputSubject">Temat</label>
                        <input type="text" className="form-control" name="subject" id="exampleInputSubject" />
                    </div>
                    <div class="form-group">
                        <label htmlFor="exampleFormControlTextarea">*Twoja wiadomość</label>
                        <textarea className="form-control" name="message" id="exampleFormControlTextarea" rows="3" required />
                    </div>
                    <button type="submit" className="pageclip-form__submit">
                        <span>Wyślij</span>
                    </button>
                </form>
            </div>
        </div>
    </div>
)

export default Contact