import React, { useCallback, useContext, useState } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { darken, lighten, rgba } from 'polished'
import { useRouter } from 'next/router'
import Card from '../Card'
import Column from '../Column'
import Row from '../Row'
import { ButtonWhite } from '../Button'
import Slogan from '../Slogan'

const LoginCard = styled(Card)`
  margin: 0 auto;
  padding: 3rem;
`

const LoginWrapper = styled(Column)`
  margin-top: 3rem;
  align-items: center;
`

const LoginItem = styled(ButtonWhite)`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  box-shadow: 0 0 3px 0 ${darken(0.005, '#edeef2')};
  color: ${({ theme }) => theme.primary1};

  > i {
    margin-right: .5rem;
    font-size: 1.5rem;
  }

  > span {
    width: 5rem;
  }
`

const Login = () => {
  const theme = useContext(ThemeContext)
  const router = useRouter()

  const handleTwitterLogin = () => {
    router.push('/home')
  }

  const handleWeiboLogin = () => {
    router.push('/home')
  }

  return (
    <LoginCard>
      <Slogan />
      <LoginWrapper>
        <LoginItem
          onClick={handleTwitterLogin}
        >
          <i className="iconfont">&#xe726;</i>
          <span>Twitter登录</span>
        </LoginItem>
        <LoginItem
          onClick={handleWeiboLogin}
        >
          <i className="iconfont">&#xe641;</i>
          <span>微博登录</span>
        </LoginItem>
      </LoginWrapper>
    </LoginCard>
  )
}

export default Login
