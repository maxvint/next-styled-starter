import React, { useContext, useState } from 'react'
import { Box } from 'rebass'
import { Label, Checkbox } from '@rebass/forms'
import styled, { ThemeContext } from 'styled-components'
import { AlertCircle, Plus } from 'react-feather'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Card from '../Card'
import Column from '../Column'
import Row from '../Row'
import { ButtonPrimary, ButtonLight } from '../Button'
import Modal from '../Modal'
import Slogan from '../Slogan'

const LoginCard = styled(Card)`
  margin: 0 auto;
  padding: 3rem 0;
`

const LoginWrapper = styled(Column)`
  margin-top: 2rem;
  align-items: center;
`

const LoginItem = styled.a`
  color: ${({ theme }) => theme.primary1};
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
        <LoginItem>
          Twitter登录
        </LoginItem>
        <LoginItem>
          微博登录
        </LoginItem>
      </LoginWrapper>
    </LoginCard>
  )
}

export default Login
