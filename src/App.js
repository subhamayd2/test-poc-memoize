import React, { useState, useCallback } from 'react';
import { withStyles, Grid, Typography } from "@material-ui/core";
import Input from './Input';

const App = ({classes: {wrapper}}) => {
  const [state, setState] = useState({});

  /**
   * @NOTE
   * Memoizing the callback so that multiple instances of the callback function
   * are not created while re-rendering
   */
  const handleOnChange = useCallback(({target: {name, value}}) => {
    /**
     * @NOTE
     * Instead of using the **state** directly, we are using **prevState**
     * since using the state directly would require it to be passed to the
     * dependency list for the `useCallback` hook.
     * 
     * This would negate the purpose of `useCallback` as the **state**
     * would be updated everytime and hence the callback function would be
     * re-created on every render.
     */
    setState(prevState => ({
      ...prevState,
      [name]: value
    }))
  }, []);
  
  const getFields = () => {
    const fields = [];
    for(let i = 0; i < 50; i++) {
      fields.push({
        label: `Field ${i+1}`,
        id: `field_${i+1}`
      });
    }
    return fields;
  }

  console.log(state);

  return (
      <div className={wrapper}>
        <Typography variant="h5">Dynamic Fields</Typography>
        <Grid container spacing={3}>
          {getFields().map(({id, label}) => {
            return (
              <Grid item key={id}>
                <Input
                  label={label}
                  id={id}
                  value={state[id] || ""}
                  onChange={handleOnChange}
                />
              </Grid>
            )
          })}
        </Grid>
      </div>
  );
}

const style = () => ({
  wrapper: {
    boxSizing: 'border-box',
    margin: 0,
    padding: 40,
    width: '100%',
  }
});

export default withStyles(style)(App);
