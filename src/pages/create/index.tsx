import { useRouter } from 'next/router'
import BaseLayout from '../../layouts/BaseLayout'
import { Box } from 'rebass/styled-components'
import Input from '../../components/Input'

import styled from 'styled-components'

const PasswordWrapper = styled.div``

const CreateWallet = () => {
  const router = useRouter()

  const handleBack = () => {
    router.push('/')
  }

  return (
    <BaseLayout
      title="设置密码"
      onBack={handleBack}
    >
      <PasswordWrapper>
        <Box>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="请输入钱包密码(不少于8个字符)"
          />
          <Input
            id="repassword"
            name="repassword"
            type="password"
            placeholder="再次确认密码"
          />
        </Box>
        <Box>
          
        </Box>
      </PasswordWrapper>
    </BaseLayout>
  )
}

export default CreateWallet
