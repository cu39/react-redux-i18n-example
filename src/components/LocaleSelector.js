import React from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './LocaleSelector.css'

const LocaleSelector = ({ locale, options, handleChange }) => {
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
