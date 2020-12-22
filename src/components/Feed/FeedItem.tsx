import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Box, Text } from 'rebass/styled-components'
import Column from '../Column'
import Row from '../Row'
import { FeedData } from './types.d'

const FeedItemContainer = styled(Row)`
  margin-bottom: 1rem;
  
`

const FeedItemContent = styled(Row)`
  align-items: flex-start;
  padding: 1rem;
  background-color: ${({ theme }) => theme.white};
`

const FeedItemAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

const FeedItemText = styled(Column)`
  margin-left: 1rem;
`

const FeedItemHead = styled(Row)`
`

const FeedItemName = styled.div`
  font-weight: 500;
`

const FeedItemTime = styled(Text)`
  margin-left: .25rem;
  color: ${({ theme }) => theme.text3};
  font-size: 0.875rem;

  &:before {
    margin-right: .25rem;
    content: '·';
  }
`

const FeedItemBody = styled.div`
  margin-top: .25rem;
  color: ${({ theme }) => theme.text1};
  font-size: 0.875rem;
`


const FeedItemSelect = styled.a`
  padding: .5rem;
  width: 100px;
  text-align: center;

  > i {
    font-size: 36px;
    color: ${({ theme }) => theme.primary1};
  }
`

interface FeedItemProps {
  dataItem: FeedData
  selected: boolean
  onSelect: () => void
}

const FeedItemView = ({
  dataItem,
  selected,
  onSelect,
}: FeedItemProps) => {
  return (
    <FeedItemContainer>
      <>
        <FeedItemContent>
          <FeedItemAvatar
            src={dataItem.avatar}
          />
          <FeedItemText>
            <FeedItemHead>
              <FeedItemName>
                {dataItem.name}
              </FeedItemName>
              <FeedItemTime>
                {dataItem.time}
              </FeedItemTime>
            </FeedItemHead>
            <FeedItemBody>
              {dataItem.content}
            </FeedItemBody>
          </FeedItemText>
        </FeedItemContent>
        <FeedItemSelect
          onClick={onSelect}
        >
          {selected ? (
            <i className="iconfont">&#xe68b;</i>
          ) : (
            <i className="iconfont">&#xe67f;</i>
          )}
        </FeedItemSelect>
      </>
    </FeedItemContainer>
  )
}

export default FeedItemView
