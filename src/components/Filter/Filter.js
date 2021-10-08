import PropTypes from "prop-types";
import s from "./Filter.module.css";

export default function Filter(props) {
  return (
    <>
      <p className={s.text}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={props.filter}
        onChange={props.changeFilter}
      ></input>
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
