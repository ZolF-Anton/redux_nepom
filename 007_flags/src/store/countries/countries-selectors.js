export const selectCountriesInfo = (state) => ({
    status: state.countries.list,
    error: state.countries.error,
    qty: state.countries.list.length,
});

export const selectAllCountries = (state) => state.countries.list;

export const selectVisibleCountries = (state, { search = '', region = '' }) => {
    return state.countries.list.filter(
        (country) =>
            country.name.toLowerCase().includes(search.toLowerCase()) &&
            country.region.includes(region)
    );
};

export const selectVisibleCountriesB = (state, { search = '', region = '' }) => {
    return throttle(
        state.countries.list.filter(
            (country) =>
                country.name.toLowerCase().includes(search.toLowerCase()) &&
                country.region.includes(region)
        ),
        1500
    );
};

const throttle = (fn, delay) => {
    let run = false;
    return (...args) => {
        if (!run) {
            fn(...args);
            run = true;
            setTimeout(() => (run = false), delay);
        }
    };
};
