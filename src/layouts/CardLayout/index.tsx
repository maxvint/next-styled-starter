
import React from 'react'
import styled from 'styled-components'
import BaseLayout from '../BaseLayout'
import Card from '../../components/Card'

const CardContainer = styled(Card)`
  margin: 0 auto;
  background-color: ${({ theme }) => theme.white};
  width: 50vw;
  max-width: 500px;
`

interface CardProps {
  children: React.ReactChild
}

const CardLayout = ({ children }: CardProps) => {
  return (
    <BaseLayout>
      <CardContainer>
        {children}
      </CardContainer>
    </BaseLayout>
  )
}

export default CardLayout