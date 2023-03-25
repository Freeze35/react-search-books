import React from 'react';
import {OptionsDataInterface} from "../types/types";

interface BookSelectorInterface {
    onChange: any
    options: OptionsDataInterface[]
    value?: string
    className?: string
    children?: React.ReactNode
}

const BooksSelector: React.FC<BookSelectorInterface> =
    ({value, onChange, options, className}) => {

    // Create custom select and push our options list
    return (
        <select
            className={className}
            value={value}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => onChange(event.target.value)}
        >
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default BooksSelector;