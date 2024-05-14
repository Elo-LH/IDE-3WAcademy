const Form = ({ state, dispatch, handleNewContact }) => {
  const handleChange = (event) => {
    const { value, name } = event.target

    dispatch({ type: 'formInputChange', name, value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (state.id > 0) {
      dispatch({ type: 'update', contact: state })
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

      <button>Add contact</button>
    </form>
  )
}
export default Form
