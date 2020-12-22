
import React from 'react'
import styled from 'styled-components'
import { Box } from 'rebass/styled-components'
import BaseLayout from '../BaseLayout'

const PageContainer = styled(Box)`
  margin: 0 auto;
  width: 100%;
`

interface PageProps {
  children: React.ReactChild
}

const PageLayout = ({ children }: PageProps) => {
  return (
    <BaseLayout>
      <PageContainer>
        {children}
      </PageContainer>
    </BaseLayout>
  )
}

export default PageLayout