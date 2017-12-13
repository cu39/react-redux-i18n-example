import { connect } from 'react-redux'
import LocaleSelector from '../components/LocaleSelector'

const mapState = (state, ownProps) => ({
  state,
})

const LocaleSelectorContainer = connect(mapState)(LocaleSelector)

export default LocaleSelectorContainer
