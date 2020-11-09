import React, { useContext, useState } from 'react'
import { Box } from 'rebass'
import { Label, Checkbox } from '@rebass/forms'
import styled, { ThemeContext } from 'styled-components'
import { AlertCircle, Plus } from 'react-feather'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Card from '../Card'
import Column from '../Column'
import { ButtonPrimary, ButtonLight } from '../Button'
import Modal from '../Modal'

const WalletTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
`

const ChooseCard = styled(Card)`
  margin: 0 auto;
  /* padding: 10vh; */
`

const ChooseWrapper = styled(Column)`
  margin-top: 4rem;
  justify-content: center;

  > button {
    margin-bottom: 2rem;
  }
`

const WarningWrapper = styled.div`
  padding: 1.5rem;
`

const WarningHeader = styled(Box)`
  position: relative;
  display: flex;
  justify-content: center;
  height: 2rem;
  line-height: 2rem;
`

const WarningTitle = styled.h3`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.primaryText1};

  > svg {
    margin-right: .25rem;
  }
`

const WarningClose = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  transition: all .5s;

  &:hover {
    background-color: ${({ theme }) => theme.secondary3};
  }

  > svg {
    transform: rotate(45deg);
  }
`

const WarningContent = styled.div`
  margin-top: 1rem; 
  padding: .75rem 1rem;
  border: 1px dashed #f2f2f2;
  line-height: 1.8;
  color: ${({ theme }) => theme.primaryText1 };
`

const WarningConfirm = styled(Box)`

  > label {
    align-items: center;
    height: 3rem;
  }
`

const WarningFooter = styled.div`
  margin: .5rem 0;
`

const Choose = () => {
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
    <ChooseCard>
      <WalletTitle>StarWallet</WalletTitle>
      <ChooseWrapper>
        <ButtonPrimary
          padding="1rem 3rem"
          onClick={() => handleAgreementVisible('create')}
        >
          创建钱包
        </ButtonPrimary>
        <ButtonLight
          padding="1rem 3rem"
          onClick={() => handleAgreementVisible('recover')}
        >
          导入钱包
        </ButtonLight>
      </ChooseWrapper>
      <Modal
        isOpen={modalOpen}
        onDismiss={() => { }}
        maxHeight={90}
      >
        <WarningWrapper>
          <WarningHeader>
            <WarningTitle>
              <AlertCircle size={22} />警告
            </WarningTitle>
            <WarningClose
              onClick={() => setModalOpen(false)}
            >
              <Plus size={30} strokeWidth={1} color={theme.primary3} />
            </WarningClose>
          </WarningHeader>
          <WarningContent>
            <p>1.本站不存储您的助记词或私钥，您完全对自己的资产安全负责；</p>
            <p>2.请确保备份您的助记词或私钥，不要告诉任何人；</p>
            <p>3.如果您丢失了备份，本站无法为您恢复资产请确保使用最新的防病毒软件和操作系统，防范被钓鱼和其他可能的攻击；</p>
            <p>4.如果使用从助记词导入钱包，请确保助记词的绝对正确，有任何不同都可能会导致生成跟原来不同的地址。</p>
          </WarningContent>
          <WarningConfirm>
            <Label>
              <Checkbox
                name="remember"
                checked={true}
                onChange={() => setModalOpen(false)}
              />
              阅读并同意StarWallet钱包
              <Link href="/">服务协议</Link>
            </Label>
          </WarningConfirm>
          <WarningFooter>
            <ButtonPrimary
              padding="1rem 3rem"
              onClick={handleAgreementConfirm}
            >
              我已知晓
            </ButtonPrimary>
          </WarningFooter>
        </WarningWrapper>
      </Modal>
    </ChooseCard>
  )
}

export default Choose
