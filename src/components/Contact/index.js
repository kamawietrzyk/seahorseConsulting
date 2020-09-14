import React from 'react';
import './styles.scss';

const Contact = () => (
    <div className="Contact" id="contact">
        <div className="Contact-main">
            <h2>Kontakt</h2>
            <hr className="h-underline" />
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur? <br /> Vel illum qui dolorem eum fugiat quo voluptas!</p>
            <div className="Contact-main_form">
                <form>
                    <div class="form-group custom-div mb-0">
                        <div className="col1">
                            <label for="exampleInputName">*Imię i nazwisko</label>
                            <input type="text" className="form-control" id="exampleInputName" required />
                        </div>
                        <div className="col2">
                            <label for="exampleInputEmail">*Twój e-mail</label>
                            <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" required />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputSubject">Temat</label>
                        <input type="text" className="form-control" id="exampleInputSubject" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea">*Twoja wiadomość</label>
                        <textarea className="form-control" id="exampleFormControlTextarea" rows="3" required></textarea>
                    </div>
                    <button type="submit" className="btn">Wyślij</button>
                </form>
            </div>
        </div>
    </div>
)

export default Contact