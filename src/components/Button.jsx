import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ text, name, onclick }) => {
  return (
    <button onClick={onclick} className={name}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
};

export default Button;
