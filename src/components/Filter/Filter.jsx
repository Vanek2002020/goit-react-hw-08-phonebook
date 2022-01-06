import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter, clearFilter } from 'store/contacts/contacts-actions';
import { getFilter } from '../../store/contacts/contacts-selectors';
import s from './Filter.module.scss';
import { BsXCircleFill } from 'react-icons/bs';
function Filter({ value, onChange, onClear }) {
  return (
    <label htmlFor="search" className={s.Filter}>
      Find contacts by name
      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
        className={s.Filter__input}
      />
      <button className={s.Filter__clear} onClick={onClear}>
        <BsXCircleFill />
      </button>
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStateToProps = state => ({ value: getFilter(state) });

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
  onClear: e => dispatch(clearFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
