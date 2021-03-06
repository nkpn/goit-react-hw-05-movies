import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './Searchbar.module.css';
import { Input, Button } from 'semantic-ui-react';

function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQueryChange = event => {
    if (event.target.value === '') {
      return;
    }
    setSearchQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (event.target.value === '') {
      return;
    }

    onSubmit(searchQuery);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={style.Form}>
        <div className="ui input">
          <Input
            value={searchQuery}
            type="text"
            placeholder="Search..."
            onChange={handleSearchQueryChange}
          />
        </div>
        <div className={style.margin}>
          <Button primary type="submit">
            Find
          </Button>
        </div>
      </form>
    </>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
