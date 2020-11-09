import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Box } from 'rebass/styled-components'
import { ArrowLeft } from 'react-feather'
import Card from '../../components/Card'

const name = 'StarWallet'

const LayoutContainer = styled(Box)`

`

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 3rem;
`

const HeaderLogo = styled(Link)``

const HeaderSetting = styled.div``

const MainContainer = styled.main`
  display: flex;
  flex-grow: 1;
`

const CardContainer = styled(Card)`
  margin: 0 auto;
  background-color: ${({ theme }) => theme.white};
  width: 50vw;
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
  font-size: 0.875rem;
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
        <HeaderLogo href="/">
          {name}
        </HeaderLogo>
        <HeaderSetting>
          设置管理
        </HeaderSetting>
      </HeaderContainer>
      <MainContainer>
        <CardContainer>
          <NavContainer>
            {!home && (
              <NavBackButton onClick={onBack}>
                <ArrowLeft size={40} />
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
        &copy; 2020 Fileguard All Rights Reserved.
      </FooterContainer>
    </LayoutContainer>
  )
}

export default BaseLayout