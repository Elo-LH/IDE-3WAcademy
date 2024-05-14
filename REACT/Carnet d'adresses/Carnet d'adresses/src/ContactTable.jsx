import ContactRow from './ContactRow.jsx'

const ContactTable = ({ contacts, onEditContact }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Last Name</th>
            <th>Fisrt Name</th>
            <th>Phone Number</th>
            <th>Email adress</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, i) => (
            <ContactRow
              contact={contact}
              key={i}
              onEditContact={onEditContact}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ContactTable
