import React from 'react';
import './App.css';

const Employee = props => {
  const{img, name, job} = props.employee;
  const { children } = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

  return ( <div className="employee">
      <img src={url} alt="" />

      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        {children}
      </div>
    </div>);
};


const EmployeeList = ()=>{

  const people = [
    {
      img: 20, name: 'John', job: 'developer'
    },
    {
      img: 21, name: 'Jake', job: 'designer'
    },
    {
      img: 22, name: 'Andrew', job: 'qa'
    },
    {
      img: 23, name: 'Yaniv', job: 'web-developer'
    },
    {
      img: 24, name: 'David', job: 'back-end'
    },
    {
      img: 25, name: 'Yakir', job: 'front-end'
    },
    {
      img: 26, name: 'Shmuel', job: 'java'
    },
    {
      img: 27, name: 'Tex', job: 'fullstack'
    },
    {
      img: 28, name: 'Robert', job: 'devops'
    },
    {
      img: 29, name: 'Allan', job: 'team lead'
    },

  ];

  return <section>

    <Employee employee={people[0]} />;
    <Employee employee={people[1]}>
      lorem impsum dolor sit amet. Hfdifj oirf irnri iurjkrr uretrj. Goeirn eionfvb fdtiure fiu rjhirvb kjkre.
       </Employee>;
    <Employee employee={people[2]} />;

  </section>;


};

const App = ()=>(<EmployeeList />) 

export default App;
