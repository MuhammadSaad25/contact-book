"use client"
import React, { useState, useEffect } from 'react';
import HeadingText from '@/components/HeadingText';
import Input from '@/components/Input';
import Navbar from '@/components/Navbar';
import { getContact } from '@/lib/data';
import { updateContact } from '@/lib/action';

const SingleContact = ({ params }) => {
  const { id } = params;
  const [contact, setContact] = useState(null);

  
  const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    });

    
    
    useEffect(() => {
        const fetchContact = async () => {
            try {
                
                const fetchedContact = await getContact(id);
                  setContact(fetchedContact);
                setFormData({
                    firstName: fetchedContact.firstName || '',
                    lastName: fetchedContact.lastName || '',
                    email: fetchedContact.email || '',
                    phone: fetchedContact.phone || ''
                });
            } catch (error) {
                
            }
        };
        fetchContact();
    }, [id]);
    


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSubmit = new FormData(e.target);
    await updateContact(formDataToSubmit);
  };

  if (!contact) return <div>Loading...</div>;

  return (
    <section>
      <HeadingText
        title='Single Contact'
        description='View & Update Contact Below'
      />
      <Navbar />
      <div className='flex flex-col py-4 px-4'>
        <form
          onSubmit={handleSubmit}
          className='bg-gray-100 flex flex-col items-center p-2 rounded'
        >
          <div className='flex mb-4'>
            <div className='w-1/2 pr-2'>
              <input type='text' name='id' hidden value={contact.id} readOnly />
              <label className='text-gray-700'>FirstName</label>
              <Input
                type='text'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
              />
            </div>
            <div className='w-1/2 pr-2'>
              <label className='text-gray-700'>LastName</label>
              <Input
                type='text'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className='flex mb-4'>
            <div className='w-1/2 pr-2'>
              <label className='text-gray-700'>Email</label>
              <Input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
            <div className='w-1/2 pr-2'>
              <label className='text-gray-700'>Contact Number</label>
              <Input
                type='number'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                placeholder="Contact Number"
              />
            </div>
          </div>
          <button
            className='btn btn-wide bg-orange-400'
            type='submit'
          >
            Update Contact
          </button>
        </form>
      </div>
    </section>
  );
};

export default SingleContact;
