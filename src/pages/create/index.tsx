import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import BaseLayout from '../../layouts/BaseLayout'
import styled from 'styled-components'
import { Box } from 'rebass/styled-components'
import { Info } from 'react-feather'
import { InputPrimary } from '../../components/Input'
import { ButtonPrimary, ButtonLight } from '../../components/Button'


const PasswordWrapper = styled.div`
  padding: 1rem;
`

const PasswordItem = styled(Box)`
  margin-bottom: 1rem;
`

const PasswordTips = styled(PasswordItem)`
  display: flex;
  line-height: 1.5;
  color: ${({ theme }) => theme.text3};
  font-size: 0.875rem;

  > p {
    margin-left: .25rem;
  }
`

const PasswordAction = styled(PasswordItem)`
  margin-top: 2rem;
`

// const 

const CreateWallet = () => {
  const router = useRouter()

  const handleBack = () => {
    router.push('/')
  }

  const [password, setPassword] = useState<string>('')
  const [rePassword, setRePassword] = useState<string>('')
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true)

  const handlePasswordChanged = useCallback(event => {
    const password = event.target.value
    setPassword(password)
  }, [])

  const handleRepasswordChanged = useCallback(event => {
    const rePassword = event.target.value
    setRePassword(rePassword)
    console.log(password);

    if (rePassword !== password) {
      console.log('两次密码不一致')
    }
  }, [])

  const handleSubmit = () => { }

  useEffect(() => {
    setSubmitDisabled(password == '' && rePassword == '')
  }, [submitDisabled, setSubmitDisabled])

  return (
    <BaseLayout
      title="设置密码"
      onBack={handleBack}
    >
      <PasswordWrapper>
        <PasswordItem>
          <InputPrimary
            id="password"
            name="password"
            type="password"
            placeholder="请输入钱包密码(不少于8个字符)"
            onChange={handlePasswordChanged}
          />
        </PasswordItem>
        <PasswordItem>
          <InputPrimary
            id="repassword"
            name="repassword"
            type="password"
            placeholder="再次确认密码"
            onChange={handleRepasswordChanged}
          />
        </PasswordItem>
        <PasswordTips>
          <Info size={22} />
          <p>StarWallet不会存储该密码，无法提供找回或重置功能，一旦忘记密码，用户只能通过已备份的助记词来恢复钱包，并重新设置密码。</p>
        </PasswordTips>
        <PasswordAction>
          <ButtonPrimary
            padding="1rem 3rem"
            disabled={submitDisabled}
            onClick={() => handleSubmit()}
          >
            确认
          </ButtonPrimary>
        </PasswordAction>
      </PasswordWrapper>
    </BaseLayout>
  )
}

export default CreateWallet
