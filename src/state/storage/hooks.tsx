import { useSelector } from 'react-redux'

import { AppState } from '../index'

export const useAliossTokenManager = (name: string): string => {
  return useSelector((state: AppState) => state.storage.name)
}