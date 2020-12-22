import { useRouter } from 'next/router'
import styled from 'styled-components'
import { lighten } from 'polished'
import PageLayout from '../../layouts/PageLayout'
import { Box } from 'rebass'
import Feed from '../../components/Feed'
import { ButtonWhite } from '../../components/Button'

const HomeCoitainer = styled(Box)`
  display: flex;
`

const FeedCoitainer = styled.div`
  flex: 2;
  margin-right: 220px;
  padding-right: 2rem;
  /* background-color: #eee; */
`

const SidebarCoitainer = styled.div`
  position: fixed;
  top: 8rem;
  left: calc(50vw + 280px);
  width: 180px;
`

const SidebarButton = styled(ButtonWhite)`
  margin-bottom: 2rem;
  box-shadow: 0 5px 12px 0 ${({ theme }) => lighten(0.15, theme.text4)};
  color: ${({ theme }) => theme.primary1};
  font-weight: 400;

  &:hover {
    background-color: ${({ theme }) => theme.primary1};
    color: ${({ theme }) => theme.white};
  }

  > span {
    margin-right: .5rem;
  }

  > i {
    font-size: 20px;
  }
`

const HomePage = () => {
  const router = useRouter()

  return (
    <PageLayout>
      <HomeCoitainer>
        <FeedCoitainer>
          <Feed />
        </FeedCoitainer>
        <SidebarCoitainer>
          <SidebarButton
          >
            <span>备份已选</span>
            <i className="iconfont">&#xe6cc;</i>
          </SidebarButton>
          <SidebarButton>
            <span>备份全部</span>
            <i className="iconfont">&#xe6e8;</i>
          </SidebarButton>
        </SidebarCoitainer>
      </HomeCoitainer>
    </PageLayout>
  )
}

export default HomePage
