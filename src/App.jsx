import { useState } from 'react';

const App = () => {

  const [team, setTeam] = useState([]);

  const [money, setMoney] = useState(100);

  const [totalStrength, setTotalStrength] = useState(0);
  const calculateTotalStrength = (team) => {
    let total = 0;
    team.forEach((fighter) => {
      total += fighter.strength;
    });
    setTotalStrength(total);
  }

  const [totalAgility, setTotalAgility] = useState(0);
  const calculateTotalAgility = (team) => {
    let total = 0;
    team.forEach((fighter) => {
      total += fighter.agility;
    });
    setTotalAgility(total);
  }

  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://cdn.discordapp.com/attachments/1146189053398630510/1239026819525775460/adammartelbrown_a_an_asian_zombie_fighter_d43ee3a4-374b-4934-94a3-45898c2c0b26.png?ex=66416d25&is=66401ba5&hm=d0369e1d0ff5d0f73c85a309aee01ce03470d708849ccfe1efc7ca78cb50daf1&',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://cdn.discordapp.com/attachments/1146189053398630510/1239028031700340836/adammartelbrown_an_australian_zombie_fighter_named_scavenger_d6d5491d-f22e-432c-a24a-1aed05e742f7.png?ex=66416e46&is=66401cc6&hm=9b592a8f139b1f76fdf2bd17a42fe68c1501280eb286b8136755dd8be1188423&',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://cdn.discordapp.com/attachments/1146189053398630510/1239027421114662963/adammartelbrown_a_an_asian_zombie_fighter_394754ab-483b-452a-8470-ffa95cffcad7.png?ex=66416db5&is=66401c35&hm=84cd60e1270b6ff9726f4e214f9945087d3d50f4d41f6459cf01d71271962324&',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://cdn.discordapp.com/attachments/1146189053398630510/1239028639740198912/adammartelbrown_an_america_zombie_fighter_named_tracker_9839fb9e-bc4d-4dab-a4ad-39c4d2ec5c7f.png?ex=66416ed7&is=66401d57&hm=6e8d810e8049d3f9b07cfc2b045049498d1ec822694270757551b8772a75f30e&',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://cdn.discordapp.com/attachments/1146189053398630510/1239029024974438472/adammartelbrown_a_brazilian_zombie_fighter_named_sharpshooter_e823474d-4c68-4658-abe9-f8d9d768e2bb.png?ex=66416f33&is=66401db3&hm=61817f61e807b453d9baa3e0c66ab23d2dea5501543e96a160cd1b861a741505&',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://cdn.discordapp.com/attachments/1146189053398630510/1239031060763770880/adammartelbrown_a_canadian_zombie_fighter_named_medic._photorea_994bc8ca-45d7-4b05-8e1f-1503eea7f723.png?ex=66417118&is=66401f98&hm=b8fec95b0e312b12052d0175f03a91284b9f59e5f12db05ff563fd4c02ef0dfa&',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://cdn.discordapp.com/attachments/1146189053398630510/1239032715819483186/adammartelbrown_a_battle_worn_german_soldier_named_engineer._ph_6d75aab5-6bf7-459e-a087-a3a8acc8d8b8.png?ex=664172a3&is=66402123&hm=05f3d028819231b1585abd0bcdacec1e1c7c724b95c44bb26c61bd6a252e1ff0&',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://cdn.discordapp.com/attachments/1146189053398630510/1239033080426139708/adammartelbrown_a_battle_worn_british_soldier_named_brawler._ph_594fd40b-a358-4ba5-83e8-32472f5c3103.png?ex=664172fa&is=6640217a&hm=aca4b878692390cd90a123ae77ff8c5bcea046f88c2fff0abcf0f5b8f7ca4855&',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://cdn.discordapp.com/attachments/1146189053398630510/1239033507297362020/adammartelbrown_a_battle_worn_russian_soldier_named_infiltrator_aeff0233-7e2a-4bf7-ac1a-43b6d2282ab5.png?ex=66417360&is=664021e0&hm=a2210f4ff7e45621bd89c91f4ae3d24101f6c78bc877eadea1e7ca9898427cf6&',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://cdn.discordapp.com/attachments/1146189053398630510/1239034122911875194/adammartelbrown_a_battle_worn_african_soldier_named_leader._he__1bd38715-f19d-45dd-bc6a-02016ebd8d55.png?ex=664173f3&is=66402273&hm=ed8ada97b11af62a664b862e9af97c9eca843c78fea18a936d30f2edc9bc2b56&',
    },
  ]);
const [addFighter, setAddFighter] = useState(null);

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      const newTeam = ([...team, fighter]);
      setTeam(newTeam);
      setMoney(money - fighter.price);
      calculateTotalStrength(newTeam);
      calculateTotalAgility(newTeam);
    } else {
      alert('Not enough money!');
    }
  
  setAddFighter(fighter);
  }

  const [removeFighter, setRemoveFighter] = useState(null);

  const handleRemoveFighter = (fighter) => {
    const newTeam = team.filter((teamMember) => teamMember !== fighter);
    setTeam(newTeam);
    setMoney(money + fighter.price);
    calculateTotalStrength(newTeam);
    calculateTotalAgility(newTeam);
    setRemoveFighter(fighter);
  }


  return (
    <>
    <h1> Fighters! Your budget is ${money}! </h1>
    <h2>Total Strength: {totalStrength}</h2>
    <h2>Total Agility: {totalAgility}</h2>
    {team.length === 0 ? (
      <p>Pick some team members!</p>
    ) : (
      <ul>
        {team.map((fighter) => (
          <li key={fighter.name}>
            <h2>{fighter.name}</h2>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <img src={fighter.img} alt={fighter.name} />
            <button onClick={() => handleRemoveFighter(fighter)}>Remove from team</button>
          </li>
          
        ))}
      </ul>
    )}    
    <ul>

      <hr />

{zombieFighters.map((fighter) => (
  <li key={fighter.name}>
    <h2>{fighter.name}</h2>
    <p>Price: {fighter.price}</p>
    <p>Strength: {fighter.strength}</p>
    <p>Agility: {fighter.agility}</p>
    <img src={fighter.img} style={{ width: '150px'}} />
    <button onClick={() => handleAddFighter(fighter)}>Add to team</button>
  </li>
    ))}
</ul>
</>
  )
}
export default App