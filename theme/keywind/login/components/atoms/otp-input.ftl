
<#macro
  kw
  autofocus=false
  class="block border-secondary-200 mt-1 rounded-md focus:border-primary-300 p-4 focus:ring focus:ring-primary-200 focus:ring-opacity-50 sm:text-sm"
  disabled=false
  invalid=false
  label=""
  message=""
  name=""
  required=true
  type="text"
  rest...
>
  <div class="flex flex-col">
    <label class="sr-only text-[24px]" for="${name}">
      ${label}
    </label>
 
    <div class="relative w-full" x-data="otpForm()" >
      <input
        <#if autofocus>autofocus</#if>
        <#if disabled>disabled</#if>
        <#if required>required</#if>

        x-model="value"

        aria-invalid="${invalid?c}"
        id="${name}"
        name="${name}"
        placeholder="${label}"
        type="hidden" 

        <#list rest as attrName, attrValue>
          <#if attrValue??>
            ${attrName}="${attrValue}"
          </#if> 
        </#list>

      >

      <div class="flex justify-between gap-2">
        <template x-for="(input, index) in length" :key="index" class="flex gap-2 justify-between">
          <input
              type="tel"
              maxlength="1"
              class=" border border-gray-500 w-full h-14 text-center ${class}"
              :id="'otp-' + index"
              x-on:input="handleInput($event)"
              x-on:paste="handlePaste($event)"
              x-on:keydown.backspace="$event.target.value || handleBackspace($event.target.getAttribute('id'))"
          />
        </template>
      </div>
      
    </div>
    
    <#if invalid?? && message??>
      <div class="mt-2 text-red-600 text-sm">
        ${message?no_esc}
      </div>
    </#if>

    <script>
        function otpForm() {
            return {
                length: 6,
                value: "",

                handleInput(e) {
                    const input = e.target;

                    this.value = Array.from(Array(this.length), (element, i) => {
                    return document.getElementById("otp-" + i).value || "";
                    }).join("");

                    if (input.nextElementSibling && input.value) {
                        input.nextElementSibling.focus();
                        input.nextElementSibling.select();
                    }
                },

                handlePaste(e) {
                    const paste = e.clipboardData.getData('text');
                    this.value = paste;

                    const inputs = Array.from(Array(this.length));

                    inputs.forEach((element, i) => {
                        document.getElementById("otp-" + i).value = paste[i] || '';
                    });
                },

                handleBackspace(e) {
                    const previous = parseInt(e.split("-")[1]) - 1;
                    let o = document.getElementById("otp-" + previous)
                    o && o.focus();
                },
          };
        }
    </script>
  </div>
</#macro>
