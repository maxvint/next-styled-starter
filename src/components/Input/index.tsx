import styled from 'styled-components'
import { Input as BaseInput } from '@rebass/forms'

const Input = styled(BaseInput)<{ error?: boolean }>`
  flex: 1 1 auto;
  width: 0;
  background-color: ${({ theme }) => theme.bg1};
  transition: color 300ms ${({ error }) => (error ? 'step-end' : 'step-start')};
  border: none;
  outline: none;
  overflow: hidden;
  color: ${({ error, theme }) => (error ? theme.red1 : theme.primary1)};
  text-overflow: ellipsis;
  font-size: 1.25rem;
  font-weight: 500;
  width: 100%;

  ::placeholder {
    color: ${({ theme }) => theme.text4};
  }
  padding: 0px;
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.text4};
  }
`

export default Input
