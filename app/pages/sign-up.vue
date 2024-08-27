<template>
  <div class="sign-up-page">
    <div class="bg-white max-w-[500px] rounded-2xl p-11">
      <form class=" action="">
        <h1 class="mb-4">Sign Up</h1>

        <h4 class="text-center mb-8">Enter your details to connect with your town</h4>

        <div class="flex flex-col gap-3 mb-6">
          <AppInput label="Organization Name" />

          <div class="flex gap-2">
            <AppInput class="w-1/2" label="EIN" />
            <AppInput class="w-1/2" />
          </div>

          <AppInput label="Email" />
          <AppInput label="Сontact name" />
          <AppInput label="Contact number" />
          <AppInput label="Create password" />
          <AppInput label="Confirm password" />
        </div>

        <div class="gap-4 flex flex-col mb-6">
          <AppInputCheckbox name="reveice-emails" label="Yes, I would like to receive emails" />
          <AppInputCheckbox name="terms-and-conditions" label="I agree to Terms & Conditions and Privacy Policy" />
        </div>

        <AppButton title="Sign Up"  class="w-full mb-6" />
      </form>

      <div class="text-sm text-center mb-6">
        Already Have an Account? <RouterLink to="sign-in" class="underline">Login</RouterLink>
      </div>

      <div class="relative flex items-center justify-center mb-6">
        <div class="absolute bg-white px-10 [font-family:'Montserrat']">or</div>
        <hr class="w-full border-none h-[2px] bg-[#2631591A]" />
      </div>

      <AppButton outline shadow class="w-full mb-4">
        <img src="~/assets/icons/facebook.svg" alt="facebook-logo" class="mr-2">
        Login with Facebook
      </AppButton>
      <AppButton outline shadow class="w-full" >
        <img src="~/assets/icons/google.svg" alt="google-logo" class="mr-2">
        Login with Google
      </AppButton>
    </div>
  </div>
</template>

<script setup>
import AppInput from '@/components/ui/AppInput';
import AppInputCheckbox from '@/components/ui/AppInputCheckbox';
import AppButton from '@/components/ui/AppButton';
definePageMeta({
  layout: 'auth',
});
</script>
