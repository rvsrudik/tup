<template>
  <!-- ------------------------------------------------------------------------ -->
  <div class="sign-in-page w-full">
    <div class="bg-white max-w-[510px] w-full rounded-2xl p-6 lg:p-11 mx-auto">
      <Form
        :validation-schema="schema"
        @submit="onSubmit"
        @invalid-submit="onInvalidSubmit"
      >
        <h1 class="mb-4">Sign in</h1>

        <h4 class="text-center mb-8">Enter your details to sign in</h4>

        <div class="flex flex-col gap-3 mb-6">
          <AppInput name="email" placeholder="Email" />
          <AppInput name="password" placeholder="Create password" />
        </div>

        <AppButton size="xl" title="Sign In" class="w-full mb-6" />
      </Form>

      <div class="text-sm text-center mb-6">
        Don't have an account?
        <RouterLink to="sign-up" class="underline">Sign Up</RouterLink>
      </div>

      <div class="relative flex items-center justify-center mb-6">
        <div class="absolute bg-white px-10 font-montserrat">or</div>
        <hr class="w-full border-none h-[2px] bg-[#2631591A]" />
      </div>

      <AppButton size="xl" outline shadow class="w-full mb-4">
        <img
          src="~/assets/icons/facebook.svg"
          alt="facebook-logo"
          class="mr-2"
        />
        Login with Facebook
      </AppButton>
      <AppButton size="xl" outline shadow class="w-full">
        <img src="~/assets/icons/google.svg" alt="google-logo" class="mr-2" />
        Login with Google
      </AppButton>
    </div>
  </div>
</template>

<script setup>
import { Form } from 'vee-validate';
import * as Yup from 'yup';
import AppInput from '@/components/ui/AppInput';

import AppButton from '@/components/ui/AppButton';

const schema = Yup.object().shape({
  email: Yup.string().email().required().label('Email'),
  password: Yup.string().min(6).required().label('Password'),
});

function onSubmit(values) {
  console.log('on submit', values);
}

function onInvalidSubmit() {
  // alert('invalid submit');
}

definePageMeta({
  layout: 'auth',
});
</script>
