<template>
  <div class="bg-white rounded-xl shadow-sm p-6">
    <div class="flex gap-10">
      <div>
        <AvatarUploader />
      </div>
      <div class="w-full">
        <Form :validation-schema="schema" @submit="onSubmit" @invalid-submit="onInvalidSubmit">
          <AppInput
            name="organization_name"
            label="Organization Name"
            placeholder="Enter your organisation name"
            class="mb-2"
          />
          <AppInput name="website" label="Website" placeholder="Enter Website URL" />

          <h5 class="font-bold my-4">Contact information:</h5>

          <AppInput name="email" label="Email" placeholder="Enter Email" />
          <AppInput name="contact_number" label="Phone number" placeholder="Enter Phone number" />
          <AppInput name="address" label="Address" placeholder="Enter address" />
        </Form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Form } from 'vee-validate';
import * as Yup from 'yup';
import AppInput from '@/components/ui/AppInput';
import AvatarUploader from '@/components/ui/AvatarUploader';

const schema = Yup.object().shape({
  organization_name: Yup.string().required().label('Organization name'),
  website: Yup.string().required().label('Website'),
  email: Yup.string().email().required().label('Email'),
  contact_number: Yup.string().required().label('Contact number'),
  address: Yup.string().required().label('Contact number'),
});

function onSubmit(values) {
  console.log('on submit', values);
}

function onInvalidSubmit() {
  // alert('invalid submit');
}
</script>
