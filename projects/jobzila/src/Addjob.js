/* import React, { useState } from 'react'

const Addjob = () => {

    const [newTitle, setNewTitle] = useState('');
    const [newCompany, setNewCompany] = useState('');
    const [newCity, setNewCity] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
            if (!newTitle && !newCompany && !newCity && !newDescription)
        return;
    };


  return (
    <main>
        <section id="add-form-section">
            <h2>Add Jobs</h2>
                <div className='add-form-div'>
                    <form id='add-form' method='post'>
                        <label for='title'> Title</label>
                        <input
                            type='text'
                            name='Title'
                            id='title'
                            placeholder='Job Title'/>
                    
                            <div>
                            <label for='company'> Company</label>
                            <input
                                type='company'
                                name='Company'
                                id='company'
                                placeholder='Company'/>
                            </div>

                            <div>
                            <label for='city'> City</label>
                            <input
                                type='city'
                                name='City'
                                id='city'
                                placeholder='City'/>
                            </div>

                            <div>
                            <label for='description'> Description</label>
                            <input
                                type='description'
                                name='Description'
                                id='description'
                                placeholder='Description'/>
                            </div>

                            <button type="submit" value="Add Jobs"> Add Jobs </button>
                    </form>
                </div>
        </section>
    </main>
  );
};

export default Addjob; */