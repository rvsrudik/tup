<template>
  <UModal v-model="isOpen" :ui="{ base: 'h-full  !max-w-[580px] flex flex-col rounded-xl p-10' }">
    <div class="grid gap-4">
      <h2 class="text-center text-purple-900 text-2xl font-semibold font-montserrat">Create campaign</h2>

      <h5 class="text-center text-slate-700">Fill out the campaign info</h5>

      <Form :validation-schema="schema" class="grid gap-4" @submit="onSubmit" @invalid-submit="onInvalidSubmit">
        <AppInput name="campaign_name" label="Campaign name" placeholder="Enter campaign name" />

        <div>
          <label class="font-bold mb-2 flex text-sm">Campaign description</label>
          <div class="flex gap-2">
            <textarea
              placeholder="Description"
              class="w-full rounded-xl border p-3 placeholder:text-sm min-h-[100px]"
            ></textarea>

            <UploadMedia class="w-[100px] h-[100px] bg-white shadow-none border flex-shrink-0" />
          </div>
        </div>

        <AppInput
          name="campaign_name"
          label="If you’ve set a monetary goal, please enter it."
          placeholder="0000000"
          type="number"
          class="max-w-[350px]"
        />

        <div>
          <label class="font-bold mb-2 flex text-sm">
            What 2-3 sentence message would you like to send to donors after they give to this campaign?
          </label>

          <textarea
            placeholder="Your message"
            class="w-full rounded-xl border p-3 placeholder:text-sm min-h-24"
          ></textarea>

          <p class="text-xs gray-200">
            TownUp Pro Tip: Emphasize impact and appreciation in your messaging.
            <br /><br />
            "Donors who receive acknowledgment and clear communication of their impact are up to 70% more likely to give
            again."
          </p>
        </div>

        <div class="grid gap-2">
          <AppInput
            name="campaign_deadline"
            label="Is there a campaign end date or deadline?"
            placeholder="MM/DD/YYYY"
            type="number"
            class="max-w-[350px]"
          />

          <p class="text-xs text-gray-200">if no end date please leave this field empty</p>
        </div>

        <AppButton size="xl">Next <img src="~/assets/icons/arrow-bold.svg" alt="arrow" class="ml-2" /></AppButton>
        <!-- <DatePicker v-model="date" is-required /> -->
        <!-- <UPopover> -->
        <!-- {{ date }} -->
        <!-- <AppInput
            name="campaign_name"
            label="Is there a campaign end date or deadline?"
            placeholder="0000000"
            type="number"
            class="max-w-[350px]"
          /> -->

        <!-- <template #panel="{ close }"> -->
        <!-- <div>kek</div> -->
        <!-- <DatePicker v-model="date" is-required @close="close" /> -->
        <!-- </template> -->
        <!-- </UPopover> -->
      </Form>
    </div>
  </UModal>
</template>

<script setup>
import { Form } from 'vee-validate';
import * as Yup from 'yup';
import AppInput from '@/components/ui/AppInput';
import UploadMedia from '@/components/ui/UploadMedia';
import AppButton from '@/components/ui/AppButton';

const date = ref(new Date());

const isOpen = ref(true);

const schema = Yup.object().shape({
  campaign_name: Yup.string().required().label('Campaign name'),
  // website: Yup.string().required().label('Website'),
  // email: Yup.string().email().required().label('Email'),
  // contact_number: Yup.string().required().label('Contact number'),
  // address: Yup.string().required().label('Contact number'),
});

function onSubmit(values) {
  console.log('on submit', values);
}

function onInvalidSubmit() {
  // alert('invalid submit');
}
</script>
