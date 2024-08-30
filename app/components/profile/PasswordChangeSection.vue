<template>
  <section class="bg-white rounded-xl shadow-sm p-6 f">
    <h2 class="font-bold mb-4 text-left w-full">Password Update</h2>
    <Form
      :validation-schema="schema"
      class="flex flex-col gap-4 items-end"
      @submit="onSubmit"
      @invalid-submit="onInvalidSubmit"
    >
      <AppInput name="current_password" label="Current password" placeholder="Enter current password" />
      <AppInput name="password" label="New password" placeholder="Enter new password" />
      <AppInput name="confirm_password" label="Confirm new password" placeholder="Confirm new password" />

      <AppButton class="">Update password</AppButton>
    </Form>
  </section>
</template>

<script setup>
import { Form } from 'vee-validate';
import * as Yup from 'yup';
import AppInput from '@/components/ui/AppInput';
import AppButton from '@/components/ui/AppButton';

const schema = Yup.object().shape({
  current_password: Yup.string().required().label('Current password'),
  password: Yup.string().min(6).required().label('Password'),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .label('Confirm password'),
});

function onSubmit(values) {
  console.log('on submit', values);
}

function onInvalidSubmit() {
  // alert('invalid submit');
}
</script>
