# personal website (v3)

* jekyll (hosted on GitHub pages)
* projects as custom collection
* layouts: default, project(, home)
* includes: header, footer, analytics
* js loading with requirejs
* fonts: `Input mono` (local) `Eczar` (Google Fonts)

## click-through thingy

* every element (all a, all span) need a `id`
* add `data-opens` attribute with id of corresponding element to attach opening action
* add `data-closes` attribute for the same, but closing
* if `a` is missing the id clicking (class `clicked`) can not be tracked.
* add `class="on"` for the spans that shall be visible initially

EXAMPLE: `<a data-opens="1" id="0">Hello.</a> <span id="1">How are you?</span>``

Regex to find anchors without id: `<a (?!.*id=).[^>]*>`

You will make mistakes: [Validate!](https://validator.w3.org/nu/?doc=http%3A%2F%2Fjelkoarnds.com%2F)
