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
import LogoIcon from '../../assets/logo.svg'
import { SITE_TITLE } from '../../const'

const SloganContainer = styled(Column)`
  margin: 0 auto;
  display: flex;
  /* flex-direction: row; */
  /* justify-content: center; */
  /* padding: 10vh; */
`

const LogoWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.text2};
  text-decoration: none;
  cursor: pointer;

  > svg {
    width: 2rem;
    height: 2rem;
  }
`

const LogoText = styled.span`
  margin-left: .5rem;
  color: ${({ theme }) => theme.text1};
  font-weight: 500;
`

const SloganText = styled(Box)`
  text-align: center;
  color: ${({ theme }) => theme.text3};
`

const Slogan = () => {
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
    <SloganContainer>
      <LogoWrapper>
        <LogoIcon />
        <LogoText>{SITE_TITLE}</LogoText>
      </LogoWrapper>
      <SloganText>即刻备份您的重要Twitte、微博到Filecoin</SloganText>
    </SloganContainer>
  )
}

export default Slogan
