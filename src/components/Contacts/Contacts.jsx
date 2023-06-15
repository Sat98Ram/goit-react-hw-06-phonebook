import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';

import { selectContacts, selectFilter } from 'redux/selector';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filteredContacts = filterContacts();

  return (
    <div>
      <ul>
        {filteredContacts.map((contact, index) => (
          <ContactItem
            key={index}
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
