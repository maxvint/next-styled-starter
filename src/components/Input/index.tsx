import styled from 'styled-components'
import { transparentize } from 'polished'

export const InputPrimary = styled.input < {
  padding?: string
  state?: 'default' | 'success' | 'error' | 'warning'
}>`
  position: relative;
  display: flex;
  padding: ${({ padding }) => (padding ? padding : `calc(.75rem - 1px)`)};
  align-items: center;
  width: 100%;
  white-space: nowrap;
  background: none;
  border: none;
  outline: none;
  border-radius: .5rem;
  color: ${({ theme }) => theme.text1};
  border-width: 1px;
  border-color: ${({ theme, state }) => (
    state === 'success' && transparentize(0.4, theme.green)) ||
    (state === 'error' && transparentize(0.4, theme.red)) ||
    (state === 'warning' && transparentize(0.4, theme.yellow)) ||
    theme.bg3
  };
  border-style: solid;
  -webkit-appearance: none;
  font-size: 1rem;
  transition: all .2s cubic-bezier(.645, .045, .355, 1);

  :active,
  :hover {
    border-color: ${({ theme, state, disabled }) => !disabled ? (
      (state === 'success' && transparentize(0.4, theme.green)) ||
      (state === 'error' && transparentize(0.4, theme.red)) ||
      (state === 'warning' && transparentize(0.4, theme.yellow)) ||
      transparentize(0.4, theme.primary1)
      ) : 'none'};
  }

  &:disabled {
    cursor: auto;
    opacity: 0.8;
  }

  ::placeholder {
    color: ${({ theme }) => theme.text3};
  }

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

export const InputShadowed = styled(InputPrimary)`
  :focus {
    box-shadow: 0 0 0 2px ${({ theme, state, disabled }) => !disabled ? (
      (state === 'success' && transparentize(0.8, theme.green)) ||
      (state === 'error' && transparentize(0.8, theme.red)) ||
      (state === 'warning' && transparentize(0.8, theme.yellow)) ||
      transparentize(0.8, theme.primary1)
    ) : 'none'};
  }
`