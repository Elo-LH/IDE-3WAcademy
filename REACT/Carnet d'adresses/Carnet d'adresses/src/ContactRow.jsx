const ContactRow = ({ contact, key, onEditContact, onDeleteContact }) => {
  return (
    <tr key={key}>
      <td>{contact.lastName}</td>
      <td>{contact.firstName}</td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
      <td>
        <button onClick={() => onEditContact(contact)}>Modify</button>
        <button onClick={() => onDeleteContact(contact)}>Delete</button>
      </td>
    </tr>
  )
}

export default ContactRow
