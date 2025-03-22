export const getLocalStorage = (key: string) => () => {
  const savedTodos = localStorage.getItem(key);
  return savedTodos ? JSON.parse(savedTodos) : [];
};
