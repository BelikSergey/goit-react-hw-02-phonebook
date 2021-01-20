import PropTypes from 'prop-types';
import s from './ContactsList.module.css';

function ContactListItem({ id, name, phone, onRemove }) {
    // console.log(id);
    return (
        <li className={s.listItem}>
            {name} : {phone}{' '}
            <button className={s.buttonDelete} onClick={() => onRemove(id)}>
                delete
            </button>
        </li>
    );
}

function ContactsList({ contacts, onRemove }) {
    if (contacts.length === 0) return null;
    // console.log(contacts);
    return (
        <ul>
            {/* <h3>Contacts</h3> */}
            {contacts.map(contact => (
                <ContactListItem
                    key={contact.id}
                    {...contact}
                    onRemove={onRemove}
                />
            ))}
        </ul>
    );
}

ContactsList.propTypes = {
    onRemove: PropTypes.func,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            // name: PropTypes.string.isRequired,
            // phone: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        }),
    ),
};
ContactListItem.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        }),
    ),
};

export default ContactsList;
