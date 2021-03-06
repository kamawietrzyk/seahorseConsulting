import React from 'react';
import './styles.scss';

const Blog = () => {

    const posts = [
        { title: "Pierwszy wpis", img: "https://images.unsplash.com/photo-1510941781581-59620dc6bfdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", date: "24.09.2020", text: 'Tutaj już niebawem (naprawdę - za czas bardzo niedługi!) pojawi się wpis z mojego bloga "Słowna Babka" - oczekujcie niecierpliwie, na pewno będzie co poczytać!' },
        { title: "Drugi wpis", img: "https://images.unsplash.com/photo-1537629720063-3f0892813ddc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", date: "25.09.2020", text: 'Tutaj już niebawem (naprawdę - za czas bardzo niedługi!) pojawi się wpis z mojego bloga "Słowna Babka" - oczekujcie niecierpliwie, na pewno będzie co poczytać!' },
        { title: "Trzeci wpis", img: "https://images.unsplash.com/photo-1595503147345-445c90a74a0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", date: "26.09.2020", text: 'Tutaj już niebawem (naprawdę - za czas bardzo niedługi!) pojawi się wpis z mojego bloga "Słowna Babka" - oczekujcie niecierpliwie, na pewno będzie co poczytać!' }
    ]

    return (
        <div className="Blog" id="blog">
            <h2>Blog</h2>
            <hr className="h-underline" />
            <div className="Blog-grid">
                {posts.reverse().map(({ title, img, date, text }) => (
                    <div className="Blog-grid_box" key={title}>
                        <img src={img} alt={title} />
                        <div className="text">
                            <h4>{title}</h4>
                            <p className="date">{date}</p>
                            <p>{text}</p>
                            <a href="https://slowna-babka.blogspot.com" target="_blank" rel="noopener noreferrer">Czytaj dalej <span>q</span></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blog