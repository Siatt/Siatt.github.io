---
layout: blog_post
title:  "Pre compiling CSS"
meta: "Pre compiled compared to normal css"
date:   2017-11-13 12:11:21 +0100
comments: true 
categories: jekyll update
---
# What is pre compiling css
Preproccessing CSS is new way that lets you generate CSS code with the help of the preproccssors syntax. Some preproccessors to name a few are \ dsad
dasda
>SASS (SCSS newer)                                                              
>LESS  
>Stylus  
>CSS-Crush

The main diffrence when you are using a CSS preprocsessor is that the the preproccessor adds extra features which dont't exist in CSS. Features such as variables, mixin and nesting. All these features aim to make the file structure easier to maintain and readable.
{% highlight CSS%}
//CSS
div {
    font-family: 'Lato', sans-serif;
    background-color: red;
}
div p {
    background-color: white;
}
{% endhighlight %}

A simple CSS snippet where we set the div tag background color to red and its font family. Then we change so that all p tags in div tags will have a white background.

{% highlight SCSS %}
//SCSS
$base-color: #fdfdfd;
div {
    font-family: 'Lato', sans-serif;
    background-color: $base-color;
    
    p {
    background-color: white;
    }
}
{% endhighlight %}

Here we do the same thing as in the CSS example. But the diffrence is that we use a variable for our color, which we can resue for other classes if want to later. And instead of using CSS selectors we are nesting the p tag in the div tag which  creates a better structure.
# My thoughts
I personally prefer CSS preprocessors over pure CSS. Just because of  the file structure. The idea of dividing up all the SCSS files in diffrent categories is something i find very nice and practical. It creates files which are easy to maintain and read. The nesting feature also really helps to make the code more readable. After a while when you have to be specefic with certain classes and their "relationship" with other classes, its very nice to use the nesting function to create a more readable code, meanwhile pure CSS combinators becomes very messy after a while and more difficult to read. The use of variables also removes/reduces the need to repeat code and breaking the DRY rule.  

|Pros            |Cons     |  
|----------------|:--------|
|Nested syntax   |Group project needs everyone using pre proccessor|        
|Varibles        |Comfortable (meh)|         
|Mixins          |Debugging      |          
|Imports         |Building time        |
|Write DRY code  |         |
|File structure  |         |
|Easy to maintain|         |                      
          


