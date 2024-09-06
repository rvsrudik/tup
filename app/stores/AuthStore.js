import { defineStore } from 'pinia';
// const { me, logout } = useAPI();
export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  getters: {
    isLogged: (state) => Boolean(state.user),
  },
  // actions: {
  //   updateProfile(profile) {
  //     this.user = profile;
  //   },
  //   async logout() {
  //     if (localStorage.getItem('token')) {
  //       await logout();
  //     }
  //     const router = useRouter();

  //     this.user = null;
  //     localStorage.removeItem('token');
  //     router.push('/login');
  //   },
  //   async getMe() {
  //     const { data } = await me();
  //     this.user = data?.value?.data;
  //   },
  // },
});
