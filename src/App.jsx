import { useState } from "react";
import './App.css'

const App = () => {

  const [team, setTeam] = useState([]);

  const [money, setMoney] = useState(100);

  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ]);



  const handleAddFighter = (fighter) => {

    if (money < fighter.price) {
      console.log('not enough money')
    }
    else {
      setMoney(money - fighter.price)
      setTeam([...team, fighter])
      setZombieFighters(zombieFighters.filter(f => f.id !== fighter.id))
    }
  }


  const handleRemoveFighter = (fighter) => {
    setMoney(money + fighter.price)
    setTeam(team.filter(f => f.id !== fighter.id))
    setZombieFighters([...zombieFighters, fighter])
  }

  const zombieFightersList = zombieFighters.map((fighter) => {
    return (<li>
      <div key={fighter.id}>
        <ul>
          <li>Name: {fighter.name}</li>
          <li>Price: ${fighter.price}</li>
          <li>Strength: {fighter.strength}</li>
          <li>Agility: {fighter.agility}</li>
          <li><img src={fighter.img} alt={fighter.name} width="100" /></li>
          <button onClick={() => handleAddFighter(fighter)}>Add to Team</button>
        </ul>
      </div>
      </li>
    )
  })


  const teamList = team.map((fighter) => {
    return (
      <div key={fighter.id}>
        <ul>
          <li>Name: {fighter.name}</li>
          <li>Price: ${fighter.price}</li>
          <li>Strength: {fighter.strength}</li>
          <li>Agility: {fighter.agility}</li>
          <li><img src={fighter.img} alt={fighter.name} width="100" /></li>
          <button onClick={() => handleRemoveFighter(fighter)}>Remove from Team</button>
          
        </ul>
      </div>
    )
  })
  const totalStrength = team.reduce((acc, fighter) => acc + fighter.strength, 0)
  const totalAgility = team.reduce((acc, fighter) => acc + fighter.agility, 0)
  return (
    <> 
      <h1>Zombie Fighter Team</h1>
      <p>Money: $ {money}</p>
      <h2>Available Zombie Fighters</h2>
      {zombieFightersList}
      {team.length === 0 ? <h1> Pick some team members!</h1> : <h1>Team Members</h1>}
      <h3>Money: ${money}</h3>
      <span>
      <p>Total Strength: {totalStrength}</p>
      <hr />
      <p>Total Agility: {totalAgility}</p>
      </span>
      <hr />
      <h3>Cheats</h3>
      <button onClick={() => setMoney(money + 100)}>Add 100$</button>
      {teamList}
      
    </>
  );
}



export default App
