import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { loadTranslations, setLocale, syncTranslationWithStore, i18nReducer } from 'react-redux-i18n'

const configStore = (reducers) => {
  const translationsObject = {
    en: {
      application: {
        title: 'Awesome app with i18n!',
        hello: 'Hello, %{name}!',
        intro: 'To get started, edit <code>src/App.js</code> and save to reload.',
      },
      date: {
        long: 'MMMM Do, YYYY'
      },
    },
    ja: {
      application: {
        title: '国際化されてる最高のアプリ！',
        hello: '%{name}さん、こんにちは！',
        intro: '開発を始めるには <code>src/App.js</code> を編集してください。編集を保存すると自動でリロードされます。',
      },
      date: {
        long: 'YYYY年 MMMM D日'
      },
    }
  }

  const middlewares = [
    thunk, logger
  ]
  const store =  createStore(
    combineReducers({
      ...reducers,
      i18n: i18nReducer
    }),
    applyMiddleware(...middlewares)
  )
  syncTranslationWithStore(store)
  store.dispatch(loadTranslations(translationsObject))
  store.dispatch(setLocale('en'))

  return store
}

export default configStore
