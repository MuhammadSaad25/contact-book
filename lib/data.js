'use server'
import db from './db'
import Contact from '@/models/Contact'

export const getContacts = async () => {
  try {
    db.connect()
    const contacts = await Contact.find({})
    return contacts
  } catch (error) {
    throw new Error('Failed to get Contacts' + error)
  }
}

export const getContact = async (id) => {
  try {
    db.connect()
    let res = await Contact.findById(id)
    // delete contact._id

    const contact = {
      firstName: res.firstName,
      lastName: res.lastName,
      email: res.email,
      phone: res.phone,
      id: String(res._id),
    }
    return contact
  } catch (error) {
    throw new Error('Failed to get Contact' + error)
  }
}
