import React from 'react';

function Email() {
  return (

    <div className='newEmail'>
        <div className='newInput'>
            <form>
                <input type='text' placeholder='ex: myname@example.com'></input>
                <button value='Submit'>Submit</button>
            </form>

        </div>
    
    </div>
  )
}

export default Email;
