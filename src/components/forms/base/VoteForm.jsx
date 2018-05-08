import * as React from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxField } from 'redux-form';
import { Button, Control, Column, Columns, Field, Label, Radio } from 'bloomer';

const Option = field => <Radio {...field.input}> {field.input.value} </Radio>;

const Options = optionsConfig =>
  optionsConfig.map(config => (
    <span>
      <ReduxField
        name="selection"
        component={Option}
        type="radio"
        option={config.option}
        value={config.option}
      />
      <br />
    </span>
  ));

export const Vote = props => (
  <form onSubmit={props.handleSubmit}>
    <Field>
      <Label hasTextAlign="left">Your Selection</Label>
      <Control>{Options(props.options)}</Control>
    </Field>
    <Columns isMobile>
      <Column isSize="full">
        <Button
          type="submit"
          isColor="primary"
          isSize="medium"
          isPulled="right"
          isLoading={props.state}
        >
          Vote
        </Button>
      </Column>
    </Columns>
  </form>
);

Vote.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  state: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.string),
};

Vote.defaultProps = {
  state: false,
  options: ['Ja', 'Nein'],
};
