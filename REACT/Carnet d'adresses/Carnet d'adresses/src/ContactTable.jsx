import ContactRow from './ContactRow.jsx'

const ContactTable = ({ contacts, onEditContact, onDeleteContact }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Last Name</th>
            <th>Fisrt Name</th>
            <th>Phone Number</th>
            <th>Email adress</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, i) => (
            <ContactRow
              contact={contact}
              key={i}
              onEditContact={onEditContact}
              onDeleteContact={onDeleteContact}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ContactTable
