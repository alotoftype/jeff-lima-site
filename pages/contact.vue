<template>
  <main>
    <div
      class="h-screen bg-white flex flex-col space-y-10 justify-center items-center"
    >
      <div class="bg-white w-96 shadow-xl rounded p-10">
        <h1 class="text-3xl font-medium">Get in touch</h1>
        <p class="text-sm">Send me your message</p>

        <form class="space-y-5 mt-5">
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/2 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
              <p class="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <input
            type="text"
            class="w-full h-12 border border-gray-800 rounded px-3"
            placeholder="Email"
          />
          <div
            class="w-full flex items-center border border-gray-800 rounded px-3"
          >
            <input
              type="textarea"
              class="no-resize border-0 appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              placeholder="Message"
            />
          </div>

          <button
            class="text-center w-full bg-blue-900 rounded-md text-white py-3 font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import backgroundImage from "~/assets/img/ContactUs.png";
export default {};
</script>

<style lang="scss" scoped>
main {
  background: url("@/assets/img/ContactUs.png");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
}
</style>
