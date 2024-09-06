<template>
  <div class="sign-up-page">
    <div class="bg-white max-w-[550px] rounded-2xl p-6 lg:p-11">
      <Form :validation-schema="schema" @submit="onSubmit" @invalid-submit="onInvalidSubmit">
        <h1 class="mb-4">Sign Up</h1>

        <h4 class="text-center mb-8">Enter your details to connect with your town</h4>

        <div class="flex flex-col gap-3 mb-6">
          <AppInput name="organization.name" placeholder="Organization Name" />

          <div class="flex gap-2">
            <AppInput name="organization.ein" class="w-1/2" placeholder="EIN" />
            <AppInputFile class="w-1/2" />
          </div>

          <AppInput name="email" placeholder="Email" />
          <AppInput name="name" placeholder="Сontact name" />
          <AppInput name="phone" placeholder="Contact number" />
          <AppInput name="password" placeholder="Create password" />
          <AppInput name="password_confirmation" placeholder="Confirm password" />
        </div>

        <div class="gap-4 flex flex-col mb-6">
          <AppInputCheckbox name="reveice_emails" value="1" label="Yes, I would like to receive emails" />
          <AppInputCheckbox
            name="terms_and_conditions"
            value="1"
            label="I agree to Terms & Conditions and Privacy Policy"
          />
        </div>

        <AppButton size="xl" title="Sign Up" class="w-full mb-6" />
      </Form>

      <div class="text-sm text-center mb-6">
        Already Have an Account? <RouterLink to="sign-in" class="underline">Login</RouterLink>
      </div>

      <div class="relative flex items-center justify-center mb-6">
        <div class="absolute bg-white px-10 font-montserrat">or</div>
        <hr class="w-full border-none h-[2px] bg-[#2631591A]" />
      </div>

      <AppButton size="xl" outline shadow class="w-full mb-4">
        <img src="~/assets/icons/facebook.svg" alt="facebook-logo" class="mr-2" />
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
const { signUp } = useAPI();
import AppInput from '@/components/ui/AppInput';
import AppInputFile from '@/components/ui/AppInputFile';
import AppInputCheckbox from '@/components/ui/AppInputCheckbox';
import AppButton from '@/components/ui/AppButton';

const loading = ref({
  submit: false,
});

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = Yup.object().shape({
  email: Yup.string().email().required().label('Email'),
  name: Yup.string().required().max(255).label('Contact name'),
  phone: Yup.string().required().matches(phoneRegExp, 'Phone number is not valid'),
  password: Yup.string().min(8).required().label('Password'),
  password_confirmation: Yup.string()
    .required()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .label('Confirm password'),

  organization: Yup.object().shape({
    name: Yup.string().label('Organization name'),
    ein: Yup.string().label('EIN'),
  }),
  reveice_emails: Yup.boolean(),
  terms_and_conditions: Yup.boolean().required(),
});

async function onSubmit(values) {
  console.log('on submit', values);

  loading.value.submit = true;

  const { data, error } = await signUp(values);
  loading.value = false;

  if (error.value) {
    return;
  }

  console.log('response', response);
  localStorage.setItem('token', data.value?.data?.access_token || '');

  await authStore.getMe();
  router.push({ path: '/' });
}

function onInvalidSubmit() {
  // alert('invalid submit');
}

definePageMeta({
  layout: 'auth',
});
</script>
