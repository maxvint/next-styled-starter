import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Box } from 'rebass/styled-components'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Card from '../../components/Card'
import LogoIcon from '../../assets/logo.svg'
import { SITE_TITLE } from '../../const'

const LayoutContainer = styled(Box)`

`

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  height: 3rem;
  background-color: rgba(255, 255, 255, .6);
`

const LogoWrapper = styled.span`
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
  margin-left: .5rem;
  color: ${({ theme }) => theme.text1};
  font-weight: 500;
`

const HeaderSetting = styled.div``

const MainContainer = styled.main`
  display: flex;
  flex-grow: 1;
  margin-top: 1rem;
`

const CardContainer = styled(Card)`
  margin: 0 auto;
  background-color: ${({ theme }) => theme.white};
  width: 50vw;
  max-width: 500px;
`

const NavContainer = styled.div`
`

const NavBackButton = styled.a`
  display: inline-flex;
  width: 3rem;
  height: 3rem;
  transition: all .2s ease-in-out;

  &:hover {
    transform: translateX(-4px);
  }
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
`

const FooterContainer = styled.footer`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text3};
`
interface BaseProps {
  title?: React.ReactNode | string
  children: React.ReactChild
  home?: boolean
  onBack?: () => void
}

const BaseLayout = ({ title, children, home, onBack }: BaseProps) => {
  return (
    <LayoutContainer>
      <HeaderContainer>
        <Link href="/">
          <LogoWrapper>
            <LogoIcon />
            <LogoText>{SITE_TITLE}</LogoText>
          </LogoWrapper>
        </Link>
        <HeaderSetting>
          设置管理
        </HeaderSetting>
      </HeaderContainer>
      <MainContainer>
        <CardContainer>
          <NavContainer>
            {!home && (
              <NavBackButton onClick={onBack}>
                <AiOutlineArrowLeft size={40} />
              </NavBackButton>
            )}
          </NavContainer>
          {title && (
            <TitleContainer>
              {title}
            </TitleContainer>
          )}
          {children}
        </CardContainer>
      </MainContainer>
      <FooterContainer>
        &copy; 2020 CoinSummer All Rights Reserved.
      </FooterContainer>
    </LayoutContainer>
  )
}

export default BaseLayout