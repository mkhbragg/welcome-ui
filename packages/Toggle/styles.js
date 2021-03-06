import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { Checkbox as ReakitCheckbox } from 'reakit/Checkbox'
import { componentSystem, filterFieldComponent, system } from '@welcome-ui/system'

const afterCheckedStyles = css`
  &::after {
    left: 100%;
    transform: translateX(-100%);
  }
`

const checkedStyles = css`
  ${th('fields.toggles.checked')};
  ${afterCheckedStyles};
`

const checkedDisabledStyles = css`
  ${th('fields.toggles.checkedDisabled')};
  ${afterCheckedStyles};
`

export const Toggle = styled(filterFieldComponent(ReakitCheckbox))(
  ({ checked, connected, disabled, order = '-1' }) => {
    const toggleSize = th('fields.toggles.default.width')

    return css`
      appearance: none;
      background: transparent;
      border: ${th.borderWidth('sm')} solid;
      outline: none !important; /* important for firefox */
      ${th('fields.toggles.default')};
      ${disabled && th('fields.toggles.disabled')};
      position: relative;
      display: block;
      width: calc(${toggleSize} * 2);
      height: calc(${toggleSize} + 2 * ${th.borderWidth('sm')});
      cursor: ${disabled ? 'not-allowed' : 'pointer'};
      border-radius: ${toggleSize};
      transition: 0.3s;
      order: ${order};

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${toggleSize};
        height: ${toggleSize};
        border-radius: ${toggleSize};
        transition: 0.3s;
      }

      &:not(:disabled) {
        &:active::after {
          width: ${disabled ? null : '55%'};
        }
      }

      &:focus {
        border-color: ${th('colors.primary.500')};
      }

      ${checked && !disabled && checkedStyles};
      ${checked && disabled && checkedDisabledStyles};
      ${connected ? componentSystem : system};
    `
  }
)
