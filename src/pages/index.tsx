import PageLayout from '../layouts/PageLayout'
import styled from 'styled-components'

import Card from '../components/Card'
import { ButtonPrimary, ButtonDefault, ButtonSecondary, ButtonOutlined, ButtonEmpty } from '../components/Button'
import { InputPrimary, InputShadowed } from '../components/Input'
import Loader from '../components/Loader'
import Toggle from '../components/Toggle'
import Tooltip from '../components/Tooltip'

const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const CardTitle = styled.h2`
  margin-bottom: 1rem;
`

const CardContainer = styled.div`
  padding: .5rem;
  width: auto;
`

const CardInner = styled(Card)`
  background-color: ${({ theme }) => theme.bg1};
`

const ButtonContainer = styled(CardContainer)`
  width: 50%;

  button {
    margin-bottom: 1rem;
  }
`

const InputContainer = styled(CardContainer)`
  width: 50%;

  input {
    margin-bottom: 1rem;
  }
`

const ToggleContainer = styled(CardContainer)`

  > a {
    margin-bottom: 1rem;
  }
`

const TooltipContainer = styled(CardContainer)`
  width: 25%;
`

const TooltipItem = styled.div`
`

const IndexPage = () => {
  return (
    <PageLayout>
      <PageContainer>
        <ButtonContainer>
          <CardInner>
            <CardTitle>Button</CardTitle>
            <ButtonDefault>ButtonDefault</ButtonDefault>
            <ButtonPrimary>ButtonPrimary</ButtonPrimary>
            <ButtonSecondary>ButtonSecondary</ButtonSecondary>
            <ButtonOutlined>ButtonOutlined</ButtonOutlined>
            <ButtonEmpty>ButtonEmpty</ButtonEmpty>

            <ButtonDefault disabled>ButtonDefault</ButtonDefault>
            <ButtonPrimary disabled>ButtonPrimary</ButtonPrimary>
            <ButtonSecondary disabled>ButtonSecondary</ButtonSecondary>
            <ButtonOutlined disabled>ButtonOutlined</ButtonOutlined>
          </CardInner>
        </ButtonContainer>

        <InputContainer>
          <CardInner>
            <CardTitle>Input</CardTitle>
            <InputPrimary state="default" placeholder="Default state" />
            <InputPrimary state="success" placeholder="Success state" />
            <InputPrimary state="error" placeholder="Error state" />
            <InputPrimary state="warning" placeholder="Warning state" />
            <InputShadowed state="default" placeholder="Shadowed input with default state" />
            <InputShadowed state="success" placeholder="Shadowed input with success state" />
            <InputShadowed state="error" placeholder="Shadowed input with error state" />
            <InputShadowed state="warning" placeholder="Shadowed input with warning state" />
            <InputPrimary disabled={true} placeholder="Disabled" />
          </CardInner>
        </InputContainer>

        <TooltipContainer>
          <CardInner>
            <CardTitle>Tooltip</CardTitle>
            <Tooltip text="上方显示" show={true} placement="top">
              <TooltipItem>
                <i className="iconfont">&#xe68a;</i>
              </TooltipItem>
            </Tooltip>
            
          </CardInner>
        </TooltipContainer>

        <ToggleContainer>
          <CardInner>
            <CardTitle>Toggle</CardTitle>
            <Toggle isActive={false} toggle={() => { }} />
            <Toggle isActive={true} toggle={() => { }} />
            <Toggle activeText="开" inactiveText="关" isActive={true} toggle={() => { }} />
          </CardInner>
        </ToggleContainer>

        <CardContainer>
          <CardInner>
            <CardTitle>Toggle</CardTitle>
          </CardInner>
        </CardContainer>
      </PageContainer>
    </PageLayout>
  )
}

export default IndexPage
