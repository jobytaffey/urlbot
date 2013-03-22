URLBot
======

A URL shortening IRC bot.

Converts http/https URLs seen in channel to shrunk URLs with a page title preview.

Eg.

```
#urlbot-test

user: https://github.com/jobytaffey/urlbot
urlbot: http://is.gd/rQsrNY [jobytaffey/urlbot · GitHub]
```

Other features:

 - `last` to display the last thing said by a user
 - stdin on command line sent all channels


Toby Jaffey, <toby-bot@hodgepig.org>

To install
----------

```
npm install
```

To run
------

```
node bot.js
```

or

```
./bot.js
```

To configure
------------

```
$EDITOR config.js
```
