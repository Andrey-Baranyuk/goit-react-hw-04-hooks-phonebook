import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from 'components/ContactForm/ContactForm.module.css';

export default function ContactForm({ onSubmit }) {
    

    const [number, setNumber] = useState('');
    const [name, setName] = useState('');

    const handleInputChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                break;
        }
    };

   const handleSubmit = e => {
        e.preventDefault();
        onSubmit({name, number});
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };
        return (
            <form onSubmit={handleSubmit}>
            <div>
            <h2>Name</h2>
                <input
                className={styles.input}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={handleInputChange}
            />
            </div>
            <div>
            <h2>Number</h2>
                <input
                className={styles.input}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={handleInputChange}
            />
            </div>

            <button className={styles.btn}>Add contact</button>
            </form>
        );
    }

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
    };
