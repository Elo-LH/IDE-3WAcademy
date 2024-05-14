const formatLastName = (lastName) => {
  return lastName.toUpperCase()
}

const formatFirstName = (firstName) => {
  firstName = firstName.toLowerCase()
  return firstName.charAt(0).toUpperCase() + firstName.slice(1)
}
const formatPhoneNumber = (phone) => {
  return phone.replace(/(.{2})/g, '$1 ')
}

const Form = ({ state, dispatch, handleNewContact }) => {
  const handleChange = (event) => {
    const { value, name } = event.target

    dispatch({ type: 'formInputChange', name, value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('stateis', state)
    // Formatting Inputs
    state.lastName = formatLastName(state.lastName)
    state.firstName = formatFirstName(state.firstName)
    state.phone = formatPhoneNumber(state.phone)
    // End of formatting Inputs

    if (state.id > 0) {
      dispatch({ type: 'update', contact: state })
      dispatch({ type: 'new' })
      return
    }

    dispatch({ type: 'create', contact: state })
    dispatch({ type: 'new' })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="lastNameId">Last Name</label>
      <input
        type="text"
        name="lastName"
        id="lastNameId"
        value={state.lastName}
        onChange={handleChange}
      />

      <label htmlFor="firstNameId">First Name</label>
      <input
        type="text"
        name="firstName"
        id="firstNameId"
        value={state.firstName}
        onChange={handleChange}
      />

      <label htmlFor="phoneId">Phone Number</label>
      <input
        type="phone"
        name="phone"
        id="phoneId"
        value={state.phone}
        onChange={handleChange}
      />

      <label htmlFor="emailId">Email adress</label>
      <input
        type="email"
        name="email"
        id="emailId"
        value={state.email}
        onChange={handleChange}
      />

      <label htmlFor="birthdayId">Birthday</label>
      <input
        type="date"
        name="birthday"
        id="birthdayId"
        value={state.birthday}
        onChange={handleChange}
      />

      <button>Save Contact</button>
    </form>
  )
}
export default Form
