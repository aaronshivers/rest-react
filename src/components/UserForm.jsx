import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UserForm = ({ label, value, checked, submitData }) => {
  const [name, setName] = useState(value);
  const [isHungry, setIsHungry] = useState(checked);

  const onInputChange = (event) => setName(event.target.value);

  const onCheckboxChange = () => setIsHungry(!isHungry);

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (name.length > 0) {
      submitData({ name, isHungry });
      setName('');
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <label>
          <div>{label}</div>
          <input
            type="text"
            onChange={onInputChange}
            value={name}
          />
        </label>
      </div>
      <div>
        <label>
          isHungry
          <input
            type="checkbox"
            name="isHungry"
            onChange={onCheckboxChange}
            checked={isHungry}
          />
        </label></div>
      <button type="submit">Submit</button>
    </form>
  );
};

UserForm.defaultProps = {
  value: '',
  checked: false
};

UserForm.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  checked: PropTypes.bool,
  submitData: PropTypes.func.isRequired
};

export default UserForm;
