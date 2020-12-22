import { useRouter } from 'next/router'
import BaseLayout from '../../layouts/BaseLayout'

const SettingsPage = () => {
  const router = useRouter()

  return (
    <BaseLayout>
      Settings
    </BaseLayout>
  )
}

export default SettingsPage
