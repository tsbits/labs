###tKonami
####Yet another useless jQuery plugin

Hello there !

tKonami is my first jQuery plugin. It's also my first Git Hub project and you are reading the first readme.md that I've ever wrote...

This jQuery plugin allow you to easily implement a special Konami code on your websites.

When the code is detected the browser will open a random (useless) website (target = blank).

By default I have set 10 urls on the plugin but you can use yours.
####Usage
To use this awesome plugin you first have to import jQuery + the plugin file.

After that, select an element with jQuery (I suggest the document himself) and use the tKonami method.

    $(document).tKonami();

This way the plugin will use my defaut urls collection.

If you want you can give to the function a parameter (Array) with your own urls. Something like this.

    var urls = ['http://heeeeeeeey.com/', 'http://eelslap.com/'];
    $(document).tKonami(urls);

The defaults urls set in the plugin was found on http://www.theuselessweb.com/

Check this website to get more crazy website urls.

####Changelog
######v0.1 :
First release.