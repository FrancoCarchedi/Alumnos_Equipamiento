import React, { Component } from 'react';
import { FormControl } from '@material-ui/core';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
      </div>
    );
  }
}
