import React from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './LocaleSelector.css'

const LocaleSelector = ({ locale, handleChange }) => {
  const options = [
    { value: 'en', label: 'EN' },
    { value: 'ja', label: 'JA' },
  ]

  return (
    <Select
      name="locale-selector"
      value={locale}
      onChange={handleChange}
      options={options}
      clearable={false}
      removeSelected={false}
    />
  )
}

export default LocaleSelector
