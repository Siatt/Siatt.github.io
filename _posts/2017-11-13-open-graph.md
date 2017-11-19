---
layout: blog_post
title:  "Open graph"
meta: "What is open graph and how do you use it"
date:   2017-11-13 12:11:21 +0100
comments: true 
categories: jekyll update
---
# What is Open graph
Open graph was created by facebook to allow easy sharing to social media. It allows the website to have the same functionality as any other object on facebook.
 
Meta tags controls what content should be shared.
{% highlight HTML %}
//HTML
<meta property="og:title" content="Title" />
{% endhighlight %}
The use of the og:title tells open graph when this site is shared to facebook. The title should be whatever is in the content.

There are several more properties which you can use to customize the data that should be shared, for example og:img to share a img. 