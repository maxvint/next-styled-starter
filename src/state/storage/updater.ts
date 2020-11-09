import { useDispatch } from 'react-redux'
import { AppDispatch } from '../index'

export default function Updater(): null {
  useDispatch<AppDispatch>()
  return null
}
