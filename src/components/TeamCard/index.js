// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDeatails} = props
  const {name, id, teamImageURL} = teamDeatails
  return (
    <li className="team-item">
      <Link to={`/team-matches/${id}`}>
        <img src={teamImageURL} alr={name} />
        <p>{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
