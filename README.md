#jQuery Accordion

An "accordion" is UI widget that helps manage content on a web page by efficiently showing and hiding the content as it is needed. The content should be a collection of "heading" and "body". Let's say you had a list of questions and answers you wanted to display on a page. An accordion would allow you to just show all the questions (the headings), but only show one answer (body) at a time, when the user selected it.

Our accordion consists of an alternating list of `h3` and `div` elements where the `h3` is the heading and the `div` is the body. By default, all `div` elements are hidden. When the user clicks on a `h3` element, the `div` that immediately follows it will be expanded, while any other expanded `div` element will be collapsed.

We will use the `.slideUp()` and `.slideDown()` jQuery methods to create a pleasing effect when the `div` elements are shown and hidden.

[https://codehike.co](https://codehike.co)

## License

MIT