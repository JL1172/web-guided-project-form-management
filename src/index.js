import React, { useState } from 'react'
import { render } from 'react-dom'
// 👉 App contains a more sophisticated form we'll flesh out later
import App from './components/App'

// 👉 First let's build a SimpleForm to add more pets:
const petsList = [
  { petName: 'Fido', petType: 'dog' },
  { petName: 'Tweetie', petType: 'canary' },
  { petName: 'Goldie', petType: 'fish' },
]

function SimpleForm() {
  const [pets, setPets] = useState(petsList);
  const [formValues, setFormValues] = useState({ petName: '', petType: '' })

  const change = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    })
  }

  const submitHander = event => {
    event.preventDefault();
    setPets(pets.concat({petName : formValues.petName, petType : formValues.petType}));
    setFormValues({petName : '' , petType : ''})
  }
  return (
    <div className='container'>
      <h1>Simple form app</h1>
      {pets.map((pet, i) => {
        return <div key={i}>{pet.petName} is a {pet.petType}</div>
      })}
      <form onSubmit={submitHander}>
        <input name="petName" id="petName"
          type="text" placeholder='pet name'
          onChange={change} value={formValues.petName} />

        <input name="petType" id="petType"
          type="text" placeholder='pet type'
          onChange={change} value={formValues.petType} />

          <input type = "submit" value = "Create a Pet!" />
      </form>
    </div>
  )
}

render(
  <>
    {/* <SimpleForm /> */}
    <App />
  </>
  , document.querySelector('#root')
)
