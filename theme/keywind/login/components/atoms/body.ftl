<#macro kw
  bg="bg1"
>
  <body class="bg-secondary-100 relative min-h-screen overflow-y-auto">
    <#if bg == "bg1">
        <img class="absolute w-screen  h-full -z-10 object-cover" src="${url.resourcesPath}/img/bg1.png" alt="bg">
    <#elseif bg == "bg2">
        <img class="absolute w-screen h-full -z-10 object-cover" src="${url.resourcesPath}/img/bg2.png" alt="bg">
    </#if>
    <main class=" flex flex-col items-center justify-center sm:py-16 min-h-screen w-full h-fit">
      <#nested>
    </main>
  </body>
</#macro>
