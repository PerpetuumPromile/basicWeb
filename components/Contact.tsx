import React, { useState } from 'react'

const Contact = () => {
    // State to store the form data
    const [name, setName] = useState("");
  
    // Function to handle form submission
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      // Prevent the default form submission behavior
      event.preventDefault();
  
      // Submit the form data to the API endpoint
      try {
        const response = await fetch("/api/contactApi", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name }),
        });
        const data = await response.json();
  
        // Handle the response from the API endpoint
        console.log(data.success)
        if (data.success) {
          // Show a success message
          alert(data.message);
        } else {
          // Show an error message
          alert("An error 20 occurred while submitting the form.");
        }
      } catch (err) {
        console.error(err);
        alert("An error 30 occurred while submitting the form.");
      }
    };
  
  
  
  
  
    /*const submitContact = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = (event.target as HTMLInputElement).name.valueOf;
    const res = await fetch('/api/contact', {
      body: JSON.stringify({
        name: name,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    const result = await res.json();
    alert(`Is this your full name: ${result.name}`);
  };*/
  
  
  
  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen'>
      <h1 className='text-2xl font-bold text-center p-4'>Contact me</h1>
      <form className='max-w-[600px] m-auto' onSubmit={handleSubmit}>
          <div className='grid grid-cols-2 gap-2'>
            <input className='border shadow-lg p-3' type="text" placeholder='Name' id='name' name='name' value={name} required onChange={event => setName(event.target.value)}/>
            <input className='border shadow-lg p-3' type="email" placeholder='Email'/>
          </div>
          <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder='Subject' />
          <button type='submit' className='border shadow-lg p-3 w-full'>Submit</button>
      </form>

    </div>
  )
}

export default Contact