import { useSelector } from 'react-redux'

import { AppState } from '../index'

export const useAliossTokenManager = (): string => {
  return useSelector((state: AppState) => state.storage.name || '')
}