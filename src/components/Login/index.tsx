import React, { useContext, useState } from 'react'
import { Box } from 'rebass'
import { Label, Checkbox } from '@rebass/forms'
import styled, { ThemeContext } from 'styled-components'
import { AiOutlineWeibo, AiOutlineTwitter } from 'react-icons/ai'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Card from '../Card'
import Column from '../Column'
import Row from '../Row'
import { ButtonPrimary, ButtonLight, ButtonOutlined } from '../Button'
import Slogan from '../Slogan'

const LoginCard = styled(Card)`
  margin: 0 auto;
  padding: 3rem;
`

const LoginWrapper = styled(Column)`
  margin-top: 3rem;
  align-items: center;
`

const LoginItem = styled(ButtonOutlined)`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.primary1};

  > svg {
    margin-right: .5rem;
  }

  > span {
    width: 5rem;
  }
`

const Login = () => {
  const theme = useContext(ThemeContext)
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [actionType, setActionType] = useState<string>('create')
  const router = useRouter()

  const handleAgreementVisible = (option: string) => {
    setModalOpen(true)
    setActionType(option)
  }

  const handleAgreementConfirm = () => {
    setModalOpen(false)
    router.push(actionType)
  }

  return (
    <LoginCard>
      <Slogan />
      <LoginWrapper>
        <LoginItem
          padding=".65rem 0"
        >
          <AiOutlineTwitter size="28" />
          <span>Twitter登录</span>
        </LoginItem>
        <LoginItem
          padding=".65rem 0"
        >
          <AiOutlineWeibo size="28" />
          <span>微博登录</span>
        </LoginItem>
      </LoginWrapper>
    </LoginCard>
  )
}

export default Login
