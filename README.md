# GroupProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
<html>
<body>
  <style>
    .rw-conversation-container .rw-header{background-color: rgb(195,195,195);font-family:Arial;color:white;}
    .rw-conversation-container .rw-messages-container .rw-message .rw-client{background-color: rgb(239,110,17);font-family:Arial}
    .rw-launcher{background-color: white;}
    .rw-conversation-container .rw-reply{background-color: rgb(239,110,17);color: white;border: none;font-family:Arial}
    .rw-conversation-container .rw-response{background-color: rgb(0, 139, 139);color: white;font-family:Arial}
	.rw-conversation-container .rw-messages-container .rw-message{background-color: rgb(195,195,195), opacity:0.5}
  </style>
<script>!(function () {
  let e = document.createElement("script"),
    t = document.head || document.getElementsByTagName("head")[0];
  (e.src =
    "https://cdn.jsdelivr.net/npm/rasa-webchat@1.x.x/lib/index.js"),
    // Replace 1.x.x with the version that you want
    (e.async = !0),
    (e.onload = () => {
      window.WebChat.default(
        {
          initPayload: '/greet',
          customData: { language: "en" },
          socketUrl: "http://localhost:5005",
          // add other props here
		  title: "Digital Assistance",
		  subtitle: "",
	  profileAvatar:"bot.png",
      openLauncherImage:"human.png",
      closeImage: "arrow.png",
      showMessageDate:"true",
		  showFullScreenButton: "true",
		  inputTextFieldHint: "Type bye to end conversation",
        },
        null
      );
    }),
    t.insertBefore(e, t.firstChild);
})();
localStorage.clear();
</script>
<script>
function idleLogout() {
    var t;
    window.onload = resetTimer;
    window.onmousemove = resetTimer;
    window.onmousedown = resetTimer;  // catches touchscreen presses as well
    window.ontouchstart = resetTimer; // catches touchscreen swipes as well
    window.ontouchmove = resetTimer;  // required by some devices
    window.onclick = resetTimer;      // catches touchpad clicks as well
    window.onkeydown = resetTimer;
    window.addEventListener('scroll', resetTimer, true);

    function yourFunction() {
        alert("BOT SESSION TIMED OUT, Click on



<html>
<body>
  <style>
    .rw-conversation-container .rw-header{background-color: rgb(195,195,195);font-family:Arial;color:white;}
    .rw-conversation-container .rw-messages-container .rw-message .rw-client{background-color: rgb(239,110,17);font-family:Arial}
    .rw-launcher{background-color: white;}
    .rw-conversation-container .rw-reply{background-color: rgb(239,110,17);color: white;border: none;font-family:Arial}
    .rw-conversation-container .rw-response{background-color: rgb(0, 139, 139);color: white;font-family:Arial}
	.rw-conversation-container .rw-messages-container .rw-message{background-color: rgb(195,195,195), opacity:0.5}
  </style>
<script>!(function () {
  let e = document.createElement("script"),
    t = document.head || document.getElementsByTagName("head")[0];
  (e.src =
    "https://cdn.jsdelivr.net/npm/rasa-webchat@1.x.x/lib/index.js"),
    // Replace 1.x.x with the version that you want
    (e.async = !0),
    (e.onload = () => {
      window.WebChat.default(
        {
          initPayload: '/greet',
          customData: { language: "en" },
          socketUrl: "http://localhost:5005",
          // add other props here
		  title: "Digital Assistance",
		  subtitle: "",
	  profileAvatar:"bot.png",
      openLauncherImage:"human.png",
      closeImage: "arrow.png",
      showMessageDate:"true",
		  showFullScreenButton: "true",
		  inputTextFieldHint: "Type bye to end conversation",
        },
        null
      );
    }),
    t.insertBefore(e, t.firstChild);
})();
localStorage.clear();
</script>
<script>
function idleLogout() {
    var t;
    window.onload = resetTimer;
    window.onmousemove = resetTimer;
    window.onmousedown = resetTimer;  // catches touchscreen presses as well
    window.ontouchstart = resetTimer; // catches touchscreen swipes as well
    window.ontouchmove = resetTimer;  // required by some devices
    window.onclick = resetTimer;      // catches touchpad clicks as well
    window.onkeydown = resetTimer;
    window.addEventListener('scroll', resetTimer, true);

    function yourFunction() {
        alert("BOT SESSION TIMED OUT, Click on Bot icon to chat again!")
        window.location.reload()
    }

    function resetTimer() {
        clearTimeout(t);
        t = setTimeout(yourFunction, 600000);  // time is in milliseconds
    }
}
idleLogout();
</script>
</body>
<img src="nha_web.png">

</div>
</html>
