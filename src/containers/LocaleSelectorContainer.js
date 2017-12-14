import { connect } from 'react-redux'
import LocaleSelector from '../components/LocaleSelector'

const mapState = (state, ownProps) => ({
  locale: state.i18n.locale,
})

const LocaleSelectorContainer = connect(mapState)(LocaleSelector)

export default LocaleSelectorContainer
