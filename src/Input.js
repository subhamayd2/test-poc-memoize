import React, { memo } from 'react'
import { TextField } from '@material-ui/core'

/**
 * @NOTE
 * Memoizing the Input component so that it renders only when it's props change.
 * 
 * This means that if one instance of this Input component has updated props,
 * only that particular instance will re-render and not the whole tree.
 * 
 * `memo` HOC is a workaround for declaring a component as PureComponent
 * or alternatively overriding the `shouldComponentUpdate` lifecycle method for a Component.
 */
const Input = memo(({label, id, value, onChange}) => (
    <TextField 
      label={label}
      value={value}
      name={id}
      onChange={onChange}
    />
));

export default Input
