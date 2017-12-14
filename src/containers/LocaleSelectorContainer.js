import { connect } from 'react-redux'
import { setLocale } from 'react-redux-i18n'
import LocaleSelector from '../components/LocaleSelector'

const mapState = (state, ownProps) => ({
  locale: state.i18n.locale,
})

const mapDispatch = (dispatch, ownProps) => {
  const handleChange = (selectedOption) => {
    const nextLocale = selectedOption.value
    dispatch(setLocale(nextLocale))
  }

  return {
    handleChange,
  }
}

const LocaleSelectorContainer = connect(mapState, mapDispatch)(LocaleSelector)

export default LocaleSelectorContainer
