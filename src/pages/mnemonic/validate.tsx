import { useRouter } from 'next/router'
import BaseLayout from '../../layouts/BaseLayout'

const ValidateMnemonic = () => {
  const router = useRouter()

  const handleBack = () => {
    router.push('/')
  }

  return (
    <BaseLayout onBack={handleBack} title="选择导入方式">
      <h1>ValidateMnemonic</h1>
    </BaseLayout>
  )
}

export default ValidateMnemonic
