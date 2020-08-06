import React from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';


function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys dísponíveis" >
                <form id="search-teachers">
                <Select name="subject" label="Matéria" 
                    options={[
                        {value: 'Artes', label: 'Artes'},
                        {value: 'Biologia', label: 'Biologia'},
                        {value: 'Matemática', label: 'Matemática'},
                        {value: 'Fisica', label: 'Fisica'},
                        {value: 'Quimica', label: 'Quimica'},
                        {value: 'Português', label: 'Português'},
                        {value: 'Educação Fisica', label: 'Educação Fisica'},
                        {value: 'História', label: 'História'},
                        {value: 'Geografia', label: 'Geografia'},
                        {value: 'Ciências', label: 'Ciências'}
                    ]}/>
                    <Select name="week_day" label="Dia da Semana" 
                    options={[
                        {value: '0', label: 'Domingo'},
                        {value: '1', label: 'Segunda-feira'},
                        {value: '2', label: 'Terça-feira'},
                        {value: '3', label: 'Quarta-feira'},
                        {value: '4', label: 'Quinta-feira'},
                        {value: '5', label: 'Sexta-feira'},
                        {value: '6', label: 'Sábado'},
                    ]}/>
                    <Input type="time" name="time" label="Hora"/>


                </form>

            </PageHeader>

            <main>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </main>

        </div>
    )
}

export default TeacherList;