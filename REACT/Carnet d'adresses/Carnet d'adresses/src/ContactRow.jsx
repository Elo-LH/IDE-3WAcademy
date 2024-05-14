const ContactRow = ({ contact, key, onEditContact, onDeleteContact }) => {
  const isBirthdayToday = (birthday) => {
    console.log(getCurrentDate())
    console.log(birthday)
    return getCurrentDate().slice(5) === birthday.slice(5)
  }
  const getCurrentDate = () => {
    let currentDate = new Date().toJSON().slice(0, 10)
    return currentDate // "2022-12-30"
  }
  const calculateAge = (birthday) => {
    const birthdayYear = birthday.slice(0, 4)
    const dateYear = getCurrentDate().slice(0, 4)

    return Number(dateYear) - Number(birthdayYear) + ' years!'
  }

  return (
    <tr key={key}>
      <td>{contact.lastName}</td>
      <td>{contact.firstName}</td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
      <td>
        {contact.birthday}

        {isBirthdayToday(contact.birthday) &&
          '🎉 Happy ' + calculateAge(contact.birthday)}
      </td>

      <td>
        <button onClick={() => onEditContact(contact)}>Modify</button>
        <button onClick={() => onDeleteContact(contact)}>Delete</button>
      </td>
    </tr>
  )
}

export default ContactRow
