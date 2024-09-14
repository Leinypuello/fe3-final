import { Link } from "react-router-dom";
import { useDentistStates } from './utils/globalContext'

const Card = ({ dentist }) => {
  const {state, dispatch} = useDentistStates()
  const isDentistInFavorites = state.favs.some(fav => fav.id == dentist.id)

  const handleFavoriteDentist = () => {
    isDentistInFavorites
      ? dispatch({ type: "DELETE_FAV", payload: dentist })
      : dispatch({ type: "ADD_FAV", payload: dentist });

    localStorage.setItem('favs', JSON.stringify(state.favs));
  };

  return (
    <div className="card">
      <Link to={"/dentist/" + dentist.id}>
      <img src="./images/doctor.jpg" alt='doctor' width={210} />
      <h4>{dentist.name}</h4>
      </Link>
      <h5>
        {dentist.username}
      </h5>
        <button onClick={handleFavoriteDentist} className="favButton">
          {isDentistInFavorites
            ? '❌'
            : '⭐'}
        </button>
    </div>
  );
};

export default Card;