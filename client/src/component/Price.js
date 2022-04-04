import React, { Fragment } from 'react';

const Price = ({onSet}) => {
  return (
    <Fragment>
      <form  onSubmit={onSet}>
        <label>
          Min price
          <input type="number" name="min" required />
        </label>

        <label>
          Max price
          <input type="number" name="max" required  />
        </label>
        <input type="submit" name="price" />
      </form>
    </Fragment>
  );
};

export default Price;
