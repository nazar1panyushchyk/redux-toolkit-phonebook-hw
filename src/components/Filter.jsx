import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../redux/slice/phonebookSlice";
import "./css/contacts.css";

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  return (
    <>
       <div className="filter-contacts">
          <label>Find contacts by name:</label>
          <input type="text" id="filter" value={filter} onChange={e => dispatch(updateFilter(e.target.value))}/>
        </div>
    </>
  )
}

