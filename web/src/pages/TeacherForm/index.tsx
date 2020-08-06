import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg'
import './styles.css';

function TeacherForm() {

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: "", to: "" },
       
    ])

    function addNewScheduleItem() {

        setScheduleItems([
            ...scheduleItems,
            {
                week_day: 0,
                from: '',
                to: ''
            }
        ])
    }
    return (

        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que íncrivel que você quer dar aulas"
                description="O primeiro passo é preencher o formulário de inscrição!">

            </PageHeader>

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome Completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />
                    <Textarea name="bio" label="Biografia" />

                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select name="subject" label="Matéria"
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Fisica', label: 'Fisica' },
                            { value: 'Quimica', label: 'Quimica' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Educação Fisica', label: 'Educação Fisica' },
                            { value: 'História', label: 'História' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Ciências', label: 'Ciências' }
                        ]} />
                    <Input name="cost" label="Custo da sua hora por aula" />

                </fieldset>
                <fieldset>
                    <legend>
                        Horários disponiveis

                    <button type='button' onClick={addNewScheduleItem}>
                            + Novo Horário
                    </button>
                    </legend>

                    {scheduleItems.map(scheduleItem => {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select name="week_day" label="Dia da Semana"
                                    options={[
                                        { value: '0', label: 'Domingo' },
                                        { value: '1', label: 'Segunda-feira' },
                                        { value: '2', label: 'Terça-feira' },
                                        { value: '3', label: 'Quarta-feira' },
                                        { value: '4', label: 'Quinta-feira' },
                                        { value: '5', label: 'Sexta-feira' },
                                        { value: '6', label: 'Sábado' },
                                    ]} />

                                <Input name='from' label="Das" type='time' />
                                <Input name='to' label="Até" type='time' />
                            </div>
                        )
                    })}
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso Importante" />
                        Importante! <br />
                        Preencha todos os dados!
                    </p>

                    <button type="button">Salvar Cadastro</button>
                </footer>
            </main>

        </div>
    );
}

export default TeacherForm;