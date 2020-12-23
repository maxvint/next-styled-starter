import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import Popover, { PopoverProps } from '../Popover'

const TooltipContainer = styled.div`
  padding: 0.5rem 1rem;
  line-height: 150%;
  font-weight: 400;
`

interface TooltipProps extends Omit<PopoverProps, 'content'> {
  text: string
}

const Tooltip = ({ text, ...rest }: TooltipProps) => {
  return <Popover content={<TooltipContainer>{text}</TooltipContainer>} {...rest} />
}

export const MouseoverTooltip = ({ children, ...rest }: Omit<TooltipProps, 'show'>) => {
  const [show, setShow] = useState(false)
  const open = useCallback(() => setShow(true), [setShow])
  const close = useCallback(() => setShow(false), [setShow])
  return (
    <Tooltip {...rest} show={show}>
      <div onMouseEnter={open} onMouseLeave={close}>
        {children}
      </div>
    </Tooltip>
  )
}

export default Tooltip
