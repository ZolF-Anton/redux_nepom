import styled from 'styled-components';

import { IoSearch } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
//import { selectSearch } from '../store/controls/controls-selector';
import { setSearch } from '../store/controls/controls-actions';
import { useState } from 'react';
import useDebounceLite from '../hooks/useDebounceLite';
import { useEffect } from 'react';

const InputContainer = styled.label`
    background-color: var(--colors-ui-base);
    padding: 1rem 2rem;
    display: flex;
    align-items: center;

    border-radius: var(--radii);
    box-shadow: var(--shadow);
    width: 100%;
    margin-bottom: 1rem;

    @media (min-width: 767px) {
        margin-bottom: 0;
        width: 280px;
    }
`;

const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search for a country...',
})`
    margin-left: 2rem;
    border: none;
    outline: none;
    color: var(--color-text);
    background-color: var(--colors-ui-base);
`;

export const Search = () => {
    const dispatch = useDispatch();

    const [text, setText] = useState('');
    const debounceSearch = useDebounceLite(text, 300);

    const handleSearch = (e) => {
        setText(e.target.value);
        console.log('start setText', text);
    };

    const onLoadLog = (e) => {
        console.log(e);
    };

    useEffect(() => {
        console.log('####debounceSearch', debounceSearch);
        dispatch(setSearch(text));
    }, [debounceSearch]);
    return (
        <InputContainer>
            <IoSearch />
            <Input onChange={handleSearch} value={text} onLoad={(e) => onLoadLog(e)} />
        </InputContainer>
    );
};
