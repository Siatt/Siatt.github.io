---
layout: blog_post
title:  "Disqus"
meta: "How do you implement comment to blog posts"
date:   2017-11-13 12:11:21 +0100
comments: true 
categories: jekyll update
---
# What is disqus
Disqus blog commenting hosting service for websites. Disqus includes several features like social networking, counting comments and upvoting and downvoting comments. Disqus can also be used on all mobiles devices. 

# How did i implement disqus to my site
First i registerd to disqus and followed the steps. 

Then i used the my personeal unviersal code which was provided from disqus and added it to my site.

Then to display the comment field i add comments: true to the front matter of those pages i wish to display comments on. The true statments trigger a if statment which run the universal code. If there is no front matter with comments: true the value is set to false and wont show a comment field.