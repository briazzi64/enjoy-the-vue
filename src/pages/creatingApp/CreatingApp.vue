<template>
  <h1>Creating A Vue App</h1>
  <p>
    Every Vue application starts by creating a new application instance with the
    <code>createApp()</code> function. To do that you'll need a static HTML
    file. The name of that file could vary depending on your build process but
    most likely it'll be named <code>index.html</code>. This file will be the
    intial source before Vue takes over and injects all of your components.
    It'll look something like this.
  </p>
  <img src="/index.png" />
  <p>
    The two major callouts about this file are the <code>id="app"</code> and the
    script tag following it. The id is where we will inject our root component
    and the script tag is where we will do that. Next we will create a JS file
    that matches the path called out above and use <code>createApp()</code>. Our
    JS will look something like this.
  </p>
  <img src="/main.png" />
  <p>
    <code>App.vue</code> is our root component so once that file has been
    created and mounted properly then our Vue instance is ready to go and we can
    begin development!
  </p>
</template>
