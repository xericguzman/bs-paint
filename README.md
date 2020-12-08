# BudgetSoft Paint

A very simple paint program.


### Introduction

Ever used [MS Paint](https://en.wikipedia.org/wiki/Microsoft_Paint)? It was a very simple paint program for Windows. We're going to take that limited-feature app and implement... even fewer features. Welcome to a fake MS Paint. Welcome to... BudgetSoft Paint!


### Setup

You may have noticed that there is no JavaScript. But there is some HTML and CSS. Let's look around, shall we?


### We Shall

First, the HTML. We have three sections:

1. The palette.
2. The brush.
3. The canvas.

We'll be checking what *classes* are present on those items in order to know what to do when the user clicks something. Did they click a color on the *palette*? The *brush* should get that color. Did they click the *canvas*? That canvas square should get the *brush*'s color. Pay careful attention to the logical flow of the app, and if you need some logical flow reference, [see the hosted solution to BS Paint](http://bs-paint-solution.surge.sh/).

Did you notice how all three sections listed above have `.color-${n}` classes on them or their elements? That brings us to the CSS, which has those classes, but no actual color assigned to them. Put some code in there to give `color-1` and `color-2` and so on each a background-color... but keep the same class names. That way we can change what `color-3` is any time we want, without having to change the name throughout the code from `purple` to `mauve`. Additionally, this drives home that we're not changing CSS directly... just classes!

Once you've got those colors defined, it's on to functionality!


### BS Paint's JavaScript

It will be JavaScript's job to connect all the pieces logically, with event listeners and DOM manipulation galore. **We'll be using class tools to change the CSS here exclusively.** Do *not* use any `style` attributes! If we change the class on an element, it will get all the CSS rules from that class. Neat stuff!

Here are some tools you can use:

* `querySelectorAll` to grab all elements that match a certain selector
* `addEventListener` to give an element a function it should run on click
* `for of` loops (or `.forEach`?!) to give each element in a list its listener
* `classList` and [its many awesome methods](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList#Methods). 4 out of 5 DOM manipulators recommend this tool. There are examples there, but do some research for an article specific to whatever method you want to use!


### Hints

* The current color of every single element is its second class. That means it has a specific index. We can easily find out what the color the paintbrush currently is using this information.
* We can use `.add` and `.remove` and `.toggle`, but the cleanest solution will involve `.replace`. Think about what the old class is on the element you wish to change, and what class you'd like to `.replace` it with. Check the docs in the above section for how to use it if you're unsure!


### A Note On Canvas Size

We have a 10x10 canvas right now, but you can add more if you'd like using the method outlined in the code comments.


### Stretch Goals

There are a lot of different directions you could take this project to stretch your developer wings. These don't all work together, and therefore are also not in any particular order. Do whatever sounds fun or challenging!

* Add more colors. You may have to adjust the layout to continue to have the palette look reasonable.
* Add a Dark Mode toggle that will change the general theme and also the colors to match.
* Increase the number of squares on the canvas. You may have to adjust the size of the squares (or canvas). There is no real upper limit! I guess the number of pixels available to the user? Yeah, that's an actual upper limit.
* Add an easter egg message to `.message` that activates when the user draws a particular pattern. Checking for a particular pattern can be difficult if you make too complex a one, so start with something simple and expand from there to as weird an easter egg as you can.
* Allow the user to dynamically allocate the size of the canvas. You'll have to take in the desired canvas size from the user (an input box, maybe?), then make the right number of squares dynamically. Changing `gridWidth` will be part of it, but you'd also need to set `gridtemplate-rows` and `grid-template-columns`.
* Add some more tools besides a simple paintbrush. Here are some examples, but feel free to come up with your own ideas!
  * A tool that colors a square and its neighbors.
  * A tool that combines colors. For example, if the color is red and you paint it yellow with this tool, you get orange.
  * A tool that allows you to select multiple squares for painting on all of them at once.


### Good Luck!

And may the BS be with you.
