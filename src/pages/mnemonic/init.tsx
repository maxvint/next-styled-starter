import { useRouter } from 'next/router'
import BaseLayout from '../../layouts/BaseLayout'

const InitMnemonic = () => {
  const router = useRouter()

  const handleBack = () => {
    router.push('/')
  }

  return (
    <BaseLayout onBack={handleBack} title="选择导入方式">
      <h1>InitMnemonic</h1>
    </BaseLayout>
  )
}

export default InitMnemonic
