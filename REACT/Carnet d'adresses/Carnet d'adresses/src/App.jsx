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
          birthday: '',
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
    case 'delete': {
      const contacts = [...state.contacts]
      const indexToUpdate = state.contacts.findIndex(
        (elt) => elt.id === action.contact.id
      )
      console.log(contacts)
      contacts.splice(indexToUpdate, 1)
      console.log(contacts)

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
      birthday: '',
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
    console.log(state)
    dispatch({ type: 'edit', contact })
  }
  const handleDeleteContact = (contact) => {
    console.log(state)
    dispatch({ type: 'delete', contact })
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
        onDeleteContact={handleDeleteContact}
      />
    </>
  )
}

export default App
