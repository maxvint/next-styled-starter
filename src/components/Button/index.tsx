import styled from 'styled-components'
import { darken } from 'polished'
import { Button as RebassButton } from 'rebass/styled-components'

const Base = styled(RebassButton)<{
  padding?: string
  width?: string
  borderRadius?: string
  altDisabledStyle?: boolean
}>`
  padding: ${({ padding }) => (padding ? padding : '.75rem')};
  width: ${({ width }) => (width ? width : '100%')};
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
  border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : '.5rem'};
  outline: none;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  position: relative;
  transition: all .2s;
  z-index: 1;

  &:disabled {
    cursor: auto;
    opacity: 0.4;
  }

  > * {
    user-select: none;
  }
`

export const ButtonDefault = styled(Base)`
  background-color: ${({ theme }) => theme.primary5};
  color: ${({ theme }) => theme.text2};

  &:focus,
  &:hover,
  &:active {
    background-color: ${({ theme, disabled }) => !disabled && darken(0.03, theme.primary5)};
  }

  &:active {
    box-shadow: 0 0 0 1px ${({ theme, disabled }) => !disabled && darken(0.05, theme.primary5)};
  }

  &:disabled {
    opacity: 0.6;
  }
`

export const ButtonPrimary = styled(Base)`
  background-color: ${({ theme }) => theme.primary1};
  color: white;

  &:focus,
  &:hover,
  &:active {
    background-color: ${({ theme, disabled }) => !disabled && darken(0.1, theme.primary1)};
  }

  &:active {
    box-shadow: 0 0 0 1px ${({ theme }) => darken(0.1, theme.primary1)};
  }
`

export const ButtonSecondary = styled(Base)`
  background-color: ${({ theme }) => theme.secondary1};
  color: ${({ theme }) => theme.white};

  &:focus,
  &:hover,
  &:active {
    background-color: ${({ theme, disabled }) => !disabled && darken(0.1, theme.secondary1)};
  }

  &:active {
    box-shadow: 0 0 0 1px ${({ theme }) => darken(0.1, theme.secondary1)};
  }
`

export const ButtonOutlined = styled(Base)`
  padding: calc(.75rem - 1px);
  border: 1px solid ${({ theme }) => theme.bg3};
  background-color: transparent;
  color: ${({ theme }) => theme.text2};

  &:focus,
  &:hover {
    border-color: ${({ theme }) => theme.bg4};
  }
  &:active {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.bg4};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;

    &:hover {
      border-color: ${({ theme }) => theme.bg3};
    }
  }
`

export const ButtonEmpty = styled(Base)`
  background-color: transparent;
  color: ${({ theme }) => theme.primary1};
`
