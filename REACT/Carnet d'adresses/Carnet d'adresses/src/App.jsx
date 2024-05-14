import { useReducer, useEffect } from 'react'
import Form from './Form.jsx'
import ContactTable from './ContactTable.jsx'

const reducer = (state, action) => {
  switch (action.type) {
    case 'loadContacts':
      return {
        ...state,
        contacts: action.contacts,
      }
    case 'formInputChange': {
      const newContact = { ...state.edittingContact }
      newContact[action.name] = action.value
      console.log(newContact, action)
      return {
        ...state,
        edittingContact: newContact,
      }
    }
    case 'new':
      return {
        ...state,
        edittingContact: {
          lastName: '',
          firstName: '',
          phone: 0,
          email: '',
        },
      }
    case 'edit':
      return { ...state, edittingContact: action.contact }
    case 'create': {
      const contact = {
        id: state.contacts.length + 1,
        ...action.contact,
      }
      return {
        ...state,
        contacts: [...state.contacts, contact],
      }
    }
    case 'update': {
      const contacts = [...state.contacts]
      const indexToUpdate = state.contacts.findIndex(
        (elt) => elt.id === action.contact.id
      )
      contacts[indexToUpdate] = action.contact
      return {
        ...state,
        contacts: [...contacts],
      }
    }
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    contacts: [],
    edittingContact: {
      lastName: '',
      firstName: '',
      phone: 0,
      email: '',
    },
  })

  useEffect(() => {
    const contacts = localStorage.getItem('contacts')
    dispatch({ type: 'loadContacts', contacts: JSON.parse(contacts) })
  }, [])

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(state.contacts))
  }, [state.contacts])

  const handleNewContact = () => {
    dispatch({ type: 'new' })
  }

  const handleEditContact = (contact) => {
    console.log(contact)
    dispatch({ type: 'edit', contact })
  }

  return (
    <>
      <Form
        state={state.edittingContact}
        dispatch={dispatch}
        handleNewContact={handleNewContact}
      />
      <ContactTable
        contacts={state.contacts}
        onEditContact={handleEditContact}
      />
    </>
  )
}

export default App
