import * as React from 'react';

function useLocalStorage(storageKey, fallbackState) {
    const backState = typeof fallbackState === "undefined" ? false : fallbackState;
    const [value, setValue] = React.useState(localStorage.getItem(storageKey) ?? backState);

    React.useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(value));
    }, [value, storageKey]);

    return [value, setValue];
};

export default useLocalStorage;
