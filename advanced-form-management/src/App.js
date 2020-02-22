import React, {useState} from 'react';
import './App.css';
import OnboardingForm from './Form';
import TeamMemberCard from './TeamMemberCard'

function App() {
  const [team, setTeam] = useState([{
    name: 'Ted Smith',
    email: 'tedsmith@fakemail.org',
    role: 'Fake-end Fakegineer'
  },
  {
    name: 'Rob Fulmer',
    email: 'robfulmer@fakemail.org',
    role: 'Fake-end Fakegineer'
  }])

  const addMember = (member) => {
    setTeam([...team, member])
  }
  return (
    <div className="App">
      <div className="cardDiv">
      {team.map((element) => {
        return <TeamMemberCard teamMember={element} key={Math.random()}/>
      })}
      </div>
      <div className='form-container'>
        <OnboardingForm name='John' email='fakeemail@fakemail.com' addMember={addMember}/>
      </div>
    </div>
  );
}

export default App;
