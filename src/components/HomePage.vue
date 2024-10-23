<template>
  <div class="bg-white">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="#" alt=""/>
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true"/>
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm font-semibold leading-6 text-gray-900">{{ item.name }}</a>
        </div>
      </nav>
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50"/>
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true"/>
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    <div class="relative isolate px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="text-center">
          <h1 class="text-5xl sm:text-7xl font-bold text-gray-900">Full-Stack Dev Muneer Doman</h1>
          <br>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Hi there! I'm a web developer based in Cape Town, South Africa. When I’m not immersed in code, you’ll often find me jotting down ideas on paper. I also love creating music and playing sports, which fuels my creativity. I'm always eager to explore new horizons and embark on exciting adventures.
          </p>
          <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div class="box">
              <a href="#" class="px-4 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Scroll Down</a>
            </div>
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>

      <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
    </div>

    <div class="max-w-8xl mx-auto p-6">

      <section class="my-12">
        <h2 class="text-4xl font-bold text-black text-center">Some Personal Projects I Worked On</h2>
      </section>

      <section id="portfolio">
        <div class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card">
            <div class="face face1">
              <div class="content">
                <i class="fab fa-windows"></i>
                <h3>Admin Dashboard</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a.</p>
                <a href="#" type="button">Live Website</a>
                <a href="#" type="button">Source Code</a>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="face face1">
              <div class="content">
                <i class="fab fa-android"></i>
                <h3>Management System</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a.</p>
                <a href="#" type="button">Live Website</a>
                <a href="#" type="button">Source Code</a>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="face face1">
              <div class="content">
                <i class="fab fa-apple"></i>
                <h3>Landing Page</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a.</p>
                <a href="#" type="button">Live Website</a>
                <a href="#" type="button">Source Code</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <br>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Tech Stack', href: '#' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'WorkXp', href: '#' },
  { name: 'Testimonials', href: '#' },
  { name: 'Contact', href: '#' },
]

const mobileMenuOpen = ref(false)
</script>

<style scoped>
/* Add styles here if needed */
.card {
  position: relative;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

.face {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px; /* Fixed height for consistency */
}

.face1 {
  background: #f3f4f6;
}

.face2 {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card:hover .face1 {
  display: none;
}

.card:hover .face2 {
  display: flex;
}
</style>
