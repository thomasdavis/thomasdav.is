### The problem with distributed social networks

Recently the news on the internet has been that the government admits you don't own your [cloud data](https://www.eff.org/deeplinks/2012/10/governments-attack-cloud-computing).   Besides this scary totalitarian notion it seems absurd that a company such as Facebook will forever run the social lives of the entire world.

Luckily many people have already realized this and have started working on decentralized approaches, you can find a full list on [wikipedia](http://en.wikipedia.org/wiki/Distributed_social_network).

The definition of a distributed social network taken from wikipedia is

> A distributed social network is an Internet social network service that is decentralized and distributed across different providers. 

#### The problem is distributing a distributed social network

Recently there was a HackerNews [submission](http://news.ycombinator.com/item?id=4418904) talking about [tent.io](tent.io)(one of the listed DSNs).

One of the highest rated comments stated

> Decentralizing things like this is never ever going to work. In terms of running it... my mom/sister/dad/cousin are not going to host this themselves. They might depend on me to do it, but even I'm not going to run a decentralized social network myself. There's too much liability involved. Not to mention, it's a pain in the ass.

Which was refuted by a few comments 

> You say decentralized services never work, and then give an example of the most successful one: email.   I don't know why you are assuming that everyone will have to run their own. Also, it seems very cynical/naive to think that just because such systems aren't currently working/won't currently work with given social structures, that this will always be the case. Do you disagree?

and

> Not only is email a successful decentralised system, it's the logical infrastructure for a decentralised social network. In Facebook terms, your "feed" is just an inbox with a smart filter and nice presentation, and your "wall" is just a mailing list to which all of your friends are subscribed.

#### Current distribution techniques

[Tent.io](https://tent.io/about) is my favorite approach so far. Starting with a rock solid protocol they have started building server implementations using Ruby. But the first few comments of their about page alude to the problem of distribution to non tech saavy users.

> Tent allows every user to run their own server, but like email and the web, most users will use a hosting service to handle it.
  Users who want to run their own server should look at tentd, the current reference server implementation.
  Alternatively, Tent.is offers one-click Tent hosting.

This is ideally all that should be required, but understandably does not seem like the impetus that such a bold movement needs.

#### Using browser extensions for distribution

The browser has shown to become a powerful player in app distribution with the Chrome webstore, Firefox Addons and the App Store.

So what if we could package DSNs servers in browser extensions themselves.

Users could then 

<ul class="square">
  <li>Easily one click install, cross platform</li>
  <li>Automatically sync their extensions across computers</li>
  <li>Find DSNs through exploring app stores</li>
</ul>

Once installed, they could manage their own back ups or use services.

#### How could you run an entire server in a browser extension?

Fortunately there are small endaevours to run webservers inside of browser extensions.   **Node.js** makes a good fit because the binary is only ~6.5mb and can easily be included inside of an extension without concerns for bandwidth.

The links below are people who have succesfully run node.js inside of the browser using different methods.

<ul class="square">
  <li>[Embedding and running node.js within a firefox xul extension](http://rawkes.com/articles/running-node.html)</li>
  <li>[node-chromify](https://github.com/iceddev/node-chromify)</li>
  <li>[chrome-node](https://github.com/danielconnor/chrome-node)</li>
</ul>

#### Conclusion

I hope to see current attempts such as tent.io port their servers to node.js.   At this point, there is no reason why you couldn't bundle the server inside an easy to install extension.   I would definitely then try out a distributed social network.

Look forward to hearing from those interested!