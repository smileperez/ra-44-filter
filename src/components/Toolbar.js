import React from 'react';

function Toolbar({filters, selected, onSelectFilter}) {

    const elements = filters.map((item) => (
        <button
            className={
                selected === item ? 'btn-filter btn-selected' : 'btn-filter'
            }
            onClick={() => onSelectFilter(item)}
        >
            {item}
        </button>
    ));

    return (
        <>
            {elements}
        </>
    );
}

export default Toolbar;