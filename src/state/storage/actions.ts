import { createAction } from '@reduxjs/toolkit'

export const updateAliossToken = createAction<{ name: string }>('updateAliossToken')
