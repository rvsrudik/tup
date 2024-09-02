<template>
  <section class="bg-white grid gap-6 p-4 rounded-xl shadow-md">
    <h2 class="font-montserrat font-semibold text-2xl text-gray-800">About campaigh</h2>

    <div class="flex flex-col md:flex-row md:justify-between gap-8">
      <GoalChart />
      <DonatedPeopleWidget />
    </div>

    <div>
      <h5 class="font-montserrat text-gray-900 mb-1">Campaign breakdown</h5>
      <p class="text-sm text-slate-500">
        Your donation will fund a job training coach, empowering abused women with the skills they need to secure
        employment and rebuild their lives. By providing job training, we are helping women in our community transition
        from crisis to stability.
      </p>
    </div>

    <div>
      <h5 class="font-montserrat text-gray-900">Town impact</h5>
      <p class="text-sm text-slate-500">
        This investment reduces unemployment and poverty rates in our town, leading to a stronger, more self-reliant
        population.
      </p>
    </div>

    <div class="flex gap-4 justify-end">
      <AppButton size="xl" class=""
        >Donate $ <img src="~/assets/icons/arrow-bold.svg" class="ml-3" alt="Arrow icon"
      /></AppButton>
      <AppButton size="xl" outline class="">Send a message</AppButton>
    </div>
  </section>
</template>

<script setup>
import GoalChart from '@/components/campaigns/GoalChart';
import DonatedPeopleWidget from '@/components/campaigns/DonatedPeopleWidget';
import AppButton from '@/components/ui/AppButton';
</script>
