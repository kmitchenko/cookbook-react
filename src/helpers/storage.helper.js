export const getFromStorage = (key) => {
    return localStorage.getItem(key);
  };
  
  export const setInStorage = (key, value) => {
    return localStorage.setItem(key, value);
  };