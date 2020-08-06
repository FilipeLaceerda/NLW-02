import React from 'react';
import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/46356660?s=460&u=a78610f9aedd9308cbb3bf6bae0cd2ab74bb2399&v=4" alt="Filipe Lacerda" />
                <div>
                    <strong>Filipe Lacerda</strong>
                    <span>Física</span>
                </div>
            </header>

            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    <br /> <br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

            <footer>
                <p>
                    Preço/Hora
                            <strong>R$ 80,00</strong>
                </p>
                <button type='button'>
                    <img src={whatsappIcon} alt="whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    );
}

export default TeacherItem;