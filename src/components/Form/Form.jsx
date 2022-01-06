import React, { useState } from 'react';
import { Section } from 'components/Section/Section';
import s from 'components/Form/Form.module.scss';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { addContact } from 'store/contacts/contacts-operations';

function Form({ onSubmit }) {
  const contacts = useSelector(state => state.contacts.items);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const findName = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
  };
  const findNumber = number => {
    return contacts.find(contact => contact.number === number);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const currName = e.currentTarget.elements.name.value;
    const currPhone = e.currentTarget.elements.number.value;
    findName(currName);
    findNumber(currPhone);
    if (findName(currName)) {
      alert(`${currName} is already in contacts!`);
      return;
    } else if (findNumber(currPhone)) {
      alert(`Number ${currPhone} is already in contacts!`);
      return;
    } else {
      onSubmit({ name, number });
      reset();
    }
  };
  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Section className="Phonebook" text="Let's add new contacts!">
      <form onSubmit={handleSubmit} className={s.Form}>
        <label htmlFor="input-name" className={s.Form__item}>
          Name
        </label>
        <input
          className={s.Form__input}
          id="input-name"
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Type the name..."
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <label htmlFor="input-tel" className={s.Form__item}>
          Phone number
        </label>
        <input
          onChange={handleChange}
          className={s.Form__input}
          id="input-tel"
          type="tel"
          name="number"
          value={number}
          placeholder="Type the number..."
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />

        <button type="submit" className={s.Form__button}>
          Add contact
        </button>
      </form>
    </Section>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ name, number }) => dispatch(addContact({ name, number })),
});

export default connect(null, mapDispatchToProps)(Form);
