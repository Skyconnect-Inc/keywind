<#macro kw
  bg="bg1"
>
  <body class="bg-secondary-100 relative">
    <#if bg == "bg1">
        <img class="absolute w-screen h-screen -z-10 object-cover" src="${url.resourcesPath}/img/bg1.png" alt="bg">
    <#elseif bg == "bg2">
        <img class="absolute object-cover" src="${url.resourcesPath}/img/bg1.png" alt="bg">
    </#if>
    <main class=" flex flex-col items-center justify-center min-h-screen sm:py-16 w-full h-full">
      <#nested>
    </main>
  </body>
</#macro>
