const ContactRow = ({ contact, key, onEditContact }) => {
  return (
    <tr key={key} onClick={() => onEditContact(contact)}>
      <td>{contact.lastName}</td>
      <td>{contact.firstName}</td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
    </tr>
  )
}

export default ContactRow
