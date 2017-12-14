import React from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { setLocale } from 'react-redux-i18n'
import './LocaleSelector.css'

const LocaleSelector = ({ locale, dispatch }) => {
  const handleChange = (selectedOption) => {
    const nextLocale = selectedOption.value
    dispatch(setLocale(nextLocale))
  }

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
