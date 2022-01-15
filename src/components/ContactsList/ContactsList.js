import { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ContactsListItem } from 'components/ContactsListItem';

const Ul = styled.ul`
  color: green;
  font-weight: 100;
`;

const Li = styled.li`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;
class ContactsList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        // name: PropTypes.string.isRequired,
        // number: PropTypes.string.isRequired,
      }),
    ).isRequired,
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const { contacts, onClick } = this.props;
    return (
      <Ul>
        {[...contacts]
          .sort((contactA, contactB) =>
            contactA.name.localeCompare(contactB.name),
          )
          .map(contact => (
            <Li key={contact.id}>
              <ContactsListItem contact={contact} onClick={onClick} />
            </Li>
          ))}
      </Ul>
    );
  }
}

export default ContactsList;
