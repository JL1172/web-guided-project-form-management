import React from 'react'

export default function FriendForm(props) {
  // THESE ARE THE **EXACT PROPS** FriendForm EXPECTS!!!
  const { values, update, submit } = props

  const onChange = evt => {
    // 🔥 STEP 6 - IMPLEMENT the change handler for our inputs and dropdown
    // a) pull the name of the input from the event object
    const {name,value} = evt.target; 
    // b) pull the value of the input from the event object
    // c) use the `update` callback coming in through props
    update(name,value)
  }

  const onSubmit = evt => {
    // 🔥 STEP 7 - IMPLEMENT the submit handler
    // a) don't allow the browser to reload!
    // c) use the `submit` callback coming in through props
    evt.preventDefault();
    submit();
  }


  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label htmlFor='username'>Username
          {/* 🔥 STEP 3 - Make an input of type `text` for username.
              Controlled inputs need `value` and `onChange` props.
              Inputs render what they're told - their current value comes from app state.
              At each keystroke, a change handler fires to change app state. */}
        </label>
        <input type='text'
          name="username"
          id="username"
          placeholder='Type a username'
          value={values.username}
          onChange={onChange}
          maxLength="30" />

        <label htmlFor="email">Email
          {/* 🔥 STEP 4 - Make an input of type `email` or `text` for email. */}
        </label>
        <input type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={onChange}
          placeholder='Type an email' />
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        <label htmlFor='role'>Role
          {/* 🔥 STEP 5 - Make dropdown for role. */}
        </label>
        <select id = "role" value = {values.role} name = "role" onChange={onChange}>
          <option value = "">Select a Role</option>
          <option value = "Student">Student</option>
          <option value = "Instructor">Instructor</option>
          <option value = "Alumni">Alumni</option>
        </select>

        <div className='submit'>
          <button>submit</button>
        </div>
      </div>
    </form>
  )
}
