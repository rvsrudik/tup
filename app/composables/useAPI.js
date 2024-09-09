// import { useAuthStore } from '@/stores/AuthStore';

export default function useAPI() {
  return {
    // auth
    signIn,
    signUp,
    logout,
    refresh,
    me,
  };
}

// auth
const signIn = async (body) => await myFetch('/auth/login', { method: 'post', body, noHeader: true });
const signUp = async (body) => await myFetch('/auth/register', { method: 'post', body, noHeader: true });
const logout = async () => await myFetch('/auth/logout', { method: 'post', logout: true });
const refresh = async () => await myFetch('/auth/refresh', { method: 'post', logout: true });
const me = async () => await myFetch('/auth/me');

// interceptor
const myFetch = (url, options = {}) => {
  return useFetch(url, {
    method: options.method || 'get',
    baseURL: useRuntimeConfig().public.API_BASE_URL,
    ...options,
    watch: false,
    onRequest({ request, options }) {
      options.headers = options.headers || {};
      if (!options.noHeader) {
        options.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
      }
      options.headers.Accept = 'application/json';
    },
    onResponseError({ request, response, options }) {
      alert('response error');
      console.error(response);
      // useToast().add({
      //   title:
      //     response?._data?.message ||
      //     response?._data?.error?.message ||
      //     response?._data?.errorDetails?.message ||
      //     response?._data?.error ||
      //     'Something went wrong',
      //   color: 'red',
      // });

      // const { logout } = useAuthStore();

      // if (response.status === 401 && !options.logout) {
      //   logout();
      // }
    },
  });
};
