import React from 'react';

const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <div className="toolbar">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`toolbar__button ${
            selected === filter ? 'active__button' : ''
          }`}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;
