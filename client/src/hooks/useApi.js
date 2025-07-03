import axios from 'axios';

const useApi = () => {
  const instance = axios.create({
    baseURL: '', // Proxy is already set in Vite config
    headers: { 'Content-Type': 'application/json' },
  });

  return {
    get: instance.get,
    post: instance.post,
    put: instance.put,
    delete: instance.delete,
  };
};

export default useApi;
