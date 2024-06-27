'use server'
import Contact from '@/models/Contact'
import db from './db'
import { revalidatePath } from 'next/cache'
// import { redirect } from "next/navigation"

export const addContact = async (FormData) => {
  const { firstName, lastName, email, phone } = Object.fromEntries(FormData)
  try {
    db.connect()
    const newContact = new Contact({
      firstName,
      lastName,
      email,
      phone,
    })
    await newContact.save()
  } catch (error) {
    throw new Error ("Failed To Create Contact" + error) 
  }
}
