
import React, { useCallback, useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { SITE_TITLE } from '../../const'
import Row from '../../components/Row'
import Settings from '../../components/Settings'

const LayoutContainer = styled.div`
  margin: 0 auto;
  padding: 3rem .5rem;
`

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  width: 100%;
  min-width: auto;
  height: 3rem;
  background-color: ${({ theme }) => theme.bg1};
  z-index: 1000;
`

const LogoWrapper = styled.div`
  display: flex;
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
  color: ${({ theme }) => theme.text1};
  font-weight: 500;
`

const HeaderSetting = styled(Row)`
  width: auto;
  cursor: pointer;

  > span {
    margin-right: .5rem;
    color: ${({ theme }) => theme.text3};
  }
`

const MainContainer = styled.main`
  position: relative;
  display: flex;
  flex-grow: 1;
  margin-top: 1rem;
`

const FooterContainer = styled.footer`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text3};
`

interface BaseProps {
  children: React.ReactChild
}

const BaseLayout = ({ children }: BaseProps) => {
  return (
    <LayoutContainer>
      <HeaderContainer>
        <Link href="/">
          <LogoWrapper>
            <LogoText>{SITE_TITLE}</LogoText>
          </LogoWrapper>
        </Link>
        <HeaderSetting>
          <Settings />
        </HeaderSetting>
      </HeaderContainer>
      <MainContainer>
        {children}
      </MainContainer>
      <FooterContainer>
        &copy; 2020 Fileguard All Rights Reserved.
      </FooterContainer>
    </LayoutContainer>
  )
}

export default BaseLayout