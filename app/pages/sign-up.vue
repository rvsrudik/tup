<template>
  <div class="sign-up-page">
    <div class="bg-white max-w-[550px] rounded-2xl p-6 lg:p-11">
      <Form :validation-schema="schema" @submit="onSubmit" @invalid-submit="onInvalidSubmit">
        <h1 class="mb-4">Sign Up</h1>

        <h4 class="text-center mb-8">Enter your details to connect with your town</h4>

        <div class="flex flex-col gap-3 mb-6">
          <AppInput name="organization_name" placeholder="Organization Name" />

          <div class="flex gap-2">
            <AppInput name="ein" class="w-1/2" placeholder="EIN" />
            <AppInputFile class="w-1/2" />
          </div>

          <AppInput name="email" placeholder="Email" />
          <AppInput name="contact_name" placeholder="Сontact name" />
          <AppInput name="contact_number" placeholder="Contact number" />
          <AppInput name="password" placeholder="Create password" />
          <AppInput name="confirm_password" placeholder="Confirm password" />
        </div>

        <div class="gap-4 flex flex-col mb-6">
          <AppInputCheckbox name="reveice_emails" value="1" label="Yes, I would like to receive emails" />
          <AppInputCheckbox
            name="terms_and_conditions"
            value="1"
            label="I agree to Terms & Conditions and Privacy Policy"
          />
        </div>

        <AppButton title="Sign Up" class="w-full mb-6" />
      </Form>

      <div class="text-sm text-center mb-6">
        Already Have an Account? <RouterLink to="sign-in" class="underline">Login</RouterLink>
      </div>

      <div class="relative flex items-center justify-center mb-6">
        <div class="absolute bg-white px-10 [font-family:'Montserrat']">or</div>
        <hr class="w-full border-none h-[2px] bg-[#2631591A]" />
      </div>

      <AppButton outline shadow class="w-full mb-4">
        <img src="~/assets/icons/facebook.svg" alt="facebook-logo" class="mr-2" />
        Login with Facebook
      </AppButton>
      <AppButton outline shadow class="w-full">
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
import AppInputFile from '@/components/ui/AppInputFile';
import AppInputCheckbox from '@/components/ui/AppInputCheckbox';
import AppButton from '@/components/ui/AppButton';

const schema = Yup.object().shape({
  organization_name: Yup.string().required().label('Organization name'),
  ein: Yup.string().required().label('EIN'),
  email: Yup.string().email().required().label('Email'),
  contact_name: Yup.string().required().label('Contact name'),
  contact_number: Yup.string().required().label('Contact number'),
  password: Yup.string().min(6).required().label('Password'),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .label('Confirm password'),
  reveice_emails: Yup.boolean(),
  terms_and_conditions: Yup.boolean().required(),
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
