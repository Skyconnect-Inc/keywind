<#macro kw rest...>
  <form
    class="m-0 z-10 space-y-4"

    <#list rest as attrName, attrValue>
      ${attrName}="${attrValue}"
    </#list>
  >
    <#nested>
  </form>
</#macro>
