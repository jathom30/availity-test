import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { Modal } from 'Components'
import { useValidatedMask, useValidatedState } from 'Hooks'
import './RegistrationRoute.scss'

export const RegistrationRoute = () => {
  const [showRegistration, setShowRegistration] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [npi, setNpi, isValidNPI] = useValidatedMask({
    initialState: '',
    validation: /^[0-9]{10}$/,
    mask: (value) => {
      if (value.length > 10)
        return npi
      return value.replace(/\D/g, '')
    },
  })
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip, isValidZip] = useValidatedMask({
    initialState: '',
    validationMask: 'zip-code',
  })
  const [phone, setPhone, isValidPhone] = useValidatedMask({
    initialState: '',
    validationMask: 'phone-number',
  })
  const [email, setEmail, isValidEmail] = useValidatedState('', 'email')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowRegistration(false)
    setHasSubmitted(true)

  }

  const handleOpenModal = () => {
    setShowRegistration(true)
    setHasSubmitted(false)
    setFirst('')
    setLast('')
    setNpi('')
    setStreet('')
    setCity('')
    setState('')
    setZip('')
    setPhone('')
    setEmail('')
  }

  const canSubmit = [
    first,
    last,
    npi,
    street,
    city,
    state,
    zip,
    phone,
    email,
    isValidEmail,
    isValidNPI,
    isValidPhone,
    isValidZip,
  ].every((value) => value)

  return (
    <div className="RegistrationRoute">
      <h1>Sample Registration</h1>
      <div className="RegistrationRoute__body">
        <button
          className="RegistrationRoute__register-btn"
          type="button"
          onClick={handleOpenModal}
        >
          Register
        </button>
        {hasSubmitted && <div className="RegistrationRoute__section">
          <span>Output:</span>
          <code className="RegistrationRoute__code">
            {
`{
  first_name: ${first},
  last_name: ${last},
  npi_number: ${npi},
  street: ${street},
  city: ${city},
  state: ${state},
  zip_code: ${zip},
  phone_number: ${phone},
  email_address: ${email},
}`}
          </code>
        </div>}
      </div>
      {showRegistration && ReactDOM.createPortal(
        <Modal offClick={() => setShowRegistration(false)}>
          <div className="RegistrationRoute__modal">
            <div className="RegistrationRoute__new">
              <span className="RegistrationRoute__title">Create your account</span>
              <form className="RegistrationRoute__form" onSubmit={handleSubmit}>
                <FormInput
                  label="First name"
                  value={first}
                  onChange={setFirst}
                />
                <FormInput
                  label="Last name"
                  value={last}
                  onChange={setLast}
                />
                <FormInput
                  label="NPI number"
                  value={npi}
                  onChange={setNpi}
                  hasError={!isValidNPI}
                />
                <FormInput
                  label="Street"
                  value={street}
                  onChange={setStreet}
                />
                <FormInput
                  label="City"
                  value={city}
                  onChange={setCity}
                />
                <FormInput
                  label="State"
                  value={state}
                  onChange={setState}
                />
                <FormInput
                  label="Zip code"
                  value={zip}
                  onChange={setZip}
                  hasError={!isValidZip}
                />
                <FormInput
                  label="Phone number"
                  value={phone}
                  onChange={setPhone}
                  hasError={!isValidPhone}
                />
                <FormInput
                  label="Email address"
                  value={email}
                  onChange={setEmail}
                  hasError={!isValidEmail}
                />
                <button
                  className="RegistrationRoute__register-btn"
                  type="submit"
                  disabled={!canSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="RegistrationRoute__existing">
              <span>Already have an account?</span>
              <button className="RegistrationRoute__sign-in-btn">Sign in</button>
            </div>
          </div>
        </Modal>,
        document.body,
      )}
    </div>
  )
}

const FormInput: React.FC<{
  label: string
  value: string
  onChange: (newValue: string) => void
  hasError?: boolean
}> = ({ label, value, onChange, hasError }) => {
  const [inFocus, setInFocus] = useState(false)

  const showError = !!hasError && !inFocus
  return (
    <div className={`FormInput ${showError ? 'FormInput--has-error' : ''}`}>
      <label className="FormInput__label" htmlFor={label}>
        {label}
        <div className="FormInput__input-wrapper">
          <input
            className="FormInput__input"
            value={value}
            onChange={e => onChange(e.target.value)}
            onFocus={() => setInFocus(true)}
            onBlur={() => setInFocus(false)}
          />
          {showError && <span className="FormInput__warning">!</span>}
        </div>
      </label>
    </div>
  )
}