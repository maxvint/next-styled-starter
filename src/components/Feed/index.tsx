import { useRouter } from 'next/router'
import styled from 'styled-components'
import FeedList from './FeedList'

const Feed = () => {
  const router = useRouter()
  const dataSource = [
    {
      id: '1279940000004973111',
      avatar: 'https://avatars3.githubusercontent.com/u/1715211?s=60&v=4',
      name: 'Max',
      content: 'The open source embeddable online markdown editor (component), based on CodeMirror & jQuery & MarkedThe open source embeddable online markdown editor (component), based on CodeMirror & jQuery & MarkedThe open source embeddable online markdown editor (component), based on CodeMirror & jQuery & MarkedThe open source embeddable online markdown editor (component), based on CodeMirror & jQuery & Marked',
      time: '2小时前'
    },
    {
      id: '1279940000004973112',
      avatar: 'https://avatars0.githubusercontent.com/u/1715211?s=60&v=4',
      name: 'Max',
      content: 'The open source embeddable online markdown editor (component), based on CodeMirror & jQuery & MarkedThe open source embeddable online markdown editor (component), based on CodeMirror & jQuery & MarkedThe open source embeddable online markdown editor (component), based on CodeMirror & jQuery',
      time: '4小时前'
    },
    {
      id: '1279940000004973113',
      avatar: 'https://avatars3.githubusercontent.com/u/1715211?s=64&v=4',
      name: 'Max',
      content: 'The open source embeddable online markdown editor (component), based on CodeMirror & jQuery & MarkedThe open source embeddable online markdown editor (component), based on CodeMirror & jQuery & MarkedThe open source embeddable online markdown editor (component), based on CodeMirror & jQuery & MarkedThe open source embeddable online markdown editor (component), based on CodeMirror & jQuery & Marked',
      time: '7小时前'
    },
    {
      id: '1279940000004973114',
      avatar: 'https://avatars3.githubusercontent.com/u/1715211?s=60&v=4',
      name: 'Max',
      content: 'The open source embeddable online markdown editor (component), based on CodeMirror & jQuery & MarkedThe open source embeddable online markdown editor (component), based on CodeMirror & jQuery & MarkedThe open source embeddable online markdown editor (component), based on CodeMirror & jQuery & MarkedThe open source embeddable online markdown editor (component), based on CodeMirror & jQuery & Marked',
      time: '11小时前'
    }
  ]

  return (
    <FeedList
      dataSource={dataSource}
    />
  )
}

export default Feed
