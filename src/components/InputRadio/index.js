import React from 'react'
import { bool, func, node, number, string } from 'prop-types'

import { StyledCheckbox } from '../InputCheckbox/styles'

export const InputRadio = ({
  autoFocus,
  checked,
  disabled,
  _ref,
  name,
  onBlur,
  onChange,
  onKeyDown,
  onFocus,
  order = -1,
  value
}) => (
  <StyledCheckbox checked={checked} disabled={disabled} order={order} type="radio">
    <input
      autoFocus={autoFocus}
      checked={checked}
      disabled={disabled}
      id={value}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      ref={_ref}
      type="radio"
      value={value}
    />
  </StyledCheckbox>
)

InputRadio.type = 'InputRadio'

InputRadio.propTypes = {
  _ref: node,
  autoFocus: bool,
  checked: bool,
  disabled: bool,
  name: string,
  onBlur: func,
  onChange: func,
  onFocus: func,
  onKeyDown: func,
  order: number,
  value: string
}
