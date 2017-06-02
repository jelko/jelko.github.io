# click-through thingy

* every element (all a, all span) need a `id`
* add `data-opens` attribute with id of corresponding element to attach opening action
* add `data-closes` attribute for the same, but closing
* if `a` is missing the id clicking (class `clicked`) can not be tracked.
* add `class="on"` for the spans that shall be visible initially

EXAMPLE: `<a data-opens="1" id="0">Hello.</a> <span id="1">How are you?</span>``
