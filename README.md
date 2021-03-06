# Reforms

A Clojurescript library that lets you build beautiful data-binding forms with [Om](https://github.com/omcljs/om), [Reagent](https://github.com/reagent-project/reagent) and [Rum](https://github.com/tonsky/rum).

You can write code that is fully portable between Reagent, Om and Rum making it easier to reuse code and giving you a clear migration path.

To help you quickly create beautiful forms without messing with CSS, the generated markup is compatible with [Bootstrap 3](http://getbootstrap.com/) CSS
and [Font Awesome](http://fortawesome.github.io/Font-Awesome/). For quick results simply include Bootstrap and Font Awesome CSS.

If you think something useful is missing though, please let me know.   

<img src="https://github.com/bilus/reforms/blob/master/doc/images/sample.png" width="70%">

A good place to see the available controls: [demo](http://bilus.github.io/reforms/examples/controls/index.html).

<!-- To install doctoc: git npm install -g doctoc -->

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Usage](#usage)
  - [Getting started with Om](#getting-started-with-om)
  - [Getting started with Reagent](#getting-started-with-reagent)
  - [Getting started with Rum](#getting-started-with-rum)
  - [External CSS](#external-css)
  - [Quick tutorial](#quick-tutorial)
    - [Hello, world!](#hello-world)
    - [Data binding](#data-binding)
  - [Prettying it up](#prettying-it-up)
    - [Adding a placeholder](#adding-a-placeholder)
    - [Changing orientation](#changing-orientation)
    - [Wrapping in a panel](#wrapping-in-a-panel)
    - [Button types](#button-types)
  - [Validation](#validation)
    - [Basics](#basics)
    - [Custom validators](#custom-validators)
    - [Forcing errors](#forcing-errors)
  - [Tables](#tables)
    - [Simple table](#simple-table)
    - [Column names](#column-names)
    - [Attributes](#attributes)
    - [Row selection](#row-selection)
  - [Assorted topics](#assorted-topics)
    - [Hiding labels](#hiding-labels)
    - [Element attributes](#element-attributes)
    - [Placeholders for empty text boxes](#placeholders-for-empty-text-boxes)
    - [Using radio buttons](#using-radio-buttons)
    - [Showing warnings](#showing-warnings)
    - [Configuration options](#configuration-options)
  - [Demos](#demos)
    - [Om](#om)
    - [Reagent](#reagent)
    - [Rum](#rum)
  - [FAQ](#faq)
    - [How do I submit the form when the user presses ENTER?](#how-do-i-submit-the-form-when-the-user-presses-enter)
    - [How to affect changes when user clicks a button?](#how-to-affect-changes-when-user-clicks-a-button)
    - [How to show an operation is in progress?](#how-to-show-an-operation-is-in-progress)
    - [I'm getting *Each child in an array should have a unique "key" prop*. Why?](#im-getting-each-child-in-an-array-should-have-a-unique-key-prop-why)
    - [Can I bind to local component state (Om-specific)?](#can-i-bind-to-local-component-state-om-specific)
  - [[API Reference](http://bilus.github.io/reforms/doc/)](#api-referencehttpbilusgithubioreformsdoc)
  - [TBD](#tbd)
  - [Credits](#credits)
  - [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Usage

### Getting started with Om

Add `om-reforms` to `:dependencies` in project.clj:

[![Clojars Project](http://clojars.org/om-reforms/latest-version.svg?2394892384)](http://clojars.org/om-reforms)

Minimal requires (including sablono to render the forms):

```clojure
(ns hello-world.core
  (:require [reforms.om :include-macros true :as f]
            [om.core :as om]
            [sablono.core :include-macros true :as sablono]))
```

Here's how you create an Om component with a form with just one text field and a button:

```clojure
(defn simple-view
  [data _owner]
  (om/component
    (sablono/html
      (f/form
        (f/text "Your name" data [:name])
        (f/form-buttons
           (f/button "Submit" #(js/alert (:name @data))))))))
```

You render it with `om/build` just like any other component. See [https://github.com/omcljs/om](https://github.com/omcljs/om) for more details.

Note that labels are optional, you can render controls without labels, for instance:

```clojure
(f/text data [:name] :placeholder "Enter your name here")
```


### Getting started with Reagent

Add `reagent-reforms` to `:dependencies` in project.clj:

[![Clojars Project](http://clojars.org/reagent-reforms/latest-version.svg?2938492384)](http://clojars.org/reagent-reforms)

```clojure
(ns hello-world.core
  (:require [reforms.reagent :include-macros true :as f]
            [reagent.core :refer [atom render-component]))
```

Here's how you create a Reagent component with a form with just one text field and a button:

```clojure
(defn simple-view
  [data]
  (f/form
    (f/text "Your name" data [:name])
    (f/form-buttons
       (f/button "Submit" #(js/alert (:name @data))))))
```

You render it just like any other component by either mounting it using `render-component` or inside another component using the `[simple-view some-data]` syntax. See [https://github.com/reagent-project/reagent](https://github.com/reagent-project/reagent) for more details.

Note that labels are optional, you can render controls without labels, for instance:

```clojure
(f/text data [:name] :placeholder "Enter your name here")
```

### Getting started with Rum

Add `rum-reforms` to `:dependencies` in project.clj:

[![Clojars Project](http://clojars.org/rum-reforms/latest-version.svg?92849238)](http://clojars.org/rum-reforms)

```clojure
(ns hello-world.core
  (:require [reforms.rum :include-macros true :as f]
            [rum.core :include-macros true :as rum])
```

Here's how you create a Rum component with a form with just one text field and a button:

```clojure
(rum/defc simple-view < rum/cursored rum/cursored-watch [data horizontal-orientation]
  [data]
  (f/form
    (f/text "Your name" data [:name])
    (f/form-buttons
       (f/button "Submit" #(js/alert (:name @data))))))
```

You render it just like any other component by either mounting it using `rum-mount` or inside another component. See [https://github.com/tonsky/rum](https://github.com/tonsky/rum) for more details.

Note that labels are optional, you can render controls without labels, for instance:

```clojure
(f/text data [:name] :placeholder "Enter your name here")
```


### External CSS

The library does not use Bootstrap JavaScript so just link to bootstrap css from your html page, e.g.:

```html
<link href="https://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet"/>
```

Optionally, to use Font Awesome icons to use features such as progress spinner, warning icons etc., link to it as well:

```html
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
```


### Quick tutorial

The tutorial shows library-agnostic code. For code specific to Om or React, see "Getting started with ..." above or the examples.

#### Hello, world!

Here's how you create a form with just one text field and a button:

```clojure
(f/form
    (f/text "Your name" data [:name])
    (f/form-buttons
        (f/button "Submit" #(js/alert (:name @data)))))
```

![Hello world](https://github.com/bilus/reforms/blob/master/doc/images/hello-world.png)

Note that `form` returns a Hiccup-like data structure. The example below, though a bit simplified and scrubbed for clarity, should give you an idea:

```clojure
[:form [:div {:class "form-group"
              :key "data-name"}
        [:label {:for "data-name"
                 :class "control-label "} "Your name"]
        [:input {:value "My name"
                 :type "text"
                 :class "form-control"
                 :id "data-name"
                 :placeholder "Type your name here"}]]
 [:div.form-group.form-buttons
  [:button {:type "button"
            :class "btn btn-primary"
            :onClick #(js/alert (:name @data))} "Submit"]]]
```

#### Data binding

The controls bind directly to data (Om cursors or Reagent ratoms). For example, as the user types text into the text box below, `data` is automatically updated:

```clojure
(f/text "Your name" data [:name])
```

<img src="https://github.com/bilus/reforms/blob/master/doc/images/text.png" width="60%">

```clojure
(prn @data) ;; => {:name "John Wayne}
```


### Prettying it up

#### Adding a placeholder

You can add a placeholder shown when the text box is empty using a `:placeholder` option:

```clojure
(f/text "Your name" data [:name] :placeholder "Enter your name here")
```

#### Changing orientation

To change the orientation use `with-options`:

```clojure
(f/with-options {:form {:horizontal true}}
    (f/form
     (f/text "Your name" data [:name] :placeholder "Enter your name here")
     (f/form-buttons
       (f/button "Submit" #(js/alert (:name @data))))))
```

![Horizontal orientation](https://github.com/bilus/reforms/blob/master/doc/images/hello-world-horizontal.png)

#### Wrapping in a panel

To wrap the form in a panel use `panel`:

```clojure
(f/panel
    "Hello, world"
    (f/form
      (f/text "Your name" data [:name] :placeholder "Enter your name here")
      (f/form-buttons
        (f/button "Submit" #(js/alert (:name @data))))))
```

![Form wrapped in a panel](https://github.com/bilus/reforms/blob/master/doc/images/hello-world-panel.png)

#### Button types

Finally, let's take make the button clearly a primary one and add a cancel button and, just for the fun of it, a checkbox that toggles the orientation:

```clojure
(f/form
  (f/text "Your name" data [:name] :placeholder "Enter your name here")
  (f/form-buttons
    (f/button-primary "Submit" #(js/alert (:name @data)))
    (f/button-default "Cancel" #(js/alert "Cancel!")))
  (f/checkbox "Horizontal form" data [:orientation-horizontal]))
```

![Horizontal orientation](https://github.com/bilus/reforms/blob/master/doc/images/hello-world-buttons-hor.png)

Click!

![Vertical orientation](https://github.com/bilus/reforms/blob/master/doc/images/hello-world-buttons-ver.png)

The complete example: [Om](https://github.com/bilus/om-reforms/blob/master/examples/hello_world/src/hello_world.cljs) ([demo](http://bilus.github.io/reforms/examples/om/hello_world/index.html))
[Reagent](https://github.com/bilus/reagent-reforms/blob/master/examples/hello_world/src/hello_world.cljs) ([demo](http://bilus.github.io/reforms/examples/reagent/hello_world/index.html)).

For the list of available controls, see the [API Reference](http://bilus.github.com/reforms/doc/).

### Validation

The library supports client-side data validation.

#### Basics

To use validators, `require` `reforms.validation`, use form and form field helpers from this namespace instead of `reforms.core` and use `validate!`:

```clojure
(ns my-validation-example
  (:require ... 
            [reforms.validation :include-macros true :as v]))
```

Apart from `form`, the helpers have an identical interface to ones in `reforms.core`.

```clojure
(v/form                                                           ;; 1
  ui-state                                                        ;; 2
  (v/text "Login" data [:login])                                  ;; 3
  (v/password "Password" data [:password1]) 
  (v/password "Confirm password" data [:password2])
  (f/form-buttons
    (f/button-primary "Sign up" #(sign-up! data ui-state))))      ;; 4
```

1. We use `reforms.validation/form`. Note that it takes an extra argument (2).
2. This is the cursor used to store validation errors. We're using `data` to bind the form fields to and `ui-state` to store validation results in. There's no technical reason we cannot use `data` for this but separating this makes it cleaner.
3. Again, we use the helpers from `reforms.validation`.
4. Here we call our function which will perform validation

Here's the sign up function. It shows an alert if data validates:

```clojure
(defn sign-up!
  [data ui-state]
  (when (v/validate!                                                      ;; 1
           data                                                           ;; 2
           ui-state                                                       ;; 3
           (v/present [:login] "Enter login name")                        ;; 4
           (v/equal [:password1] [:password2] "Passwords do not match")
           (v/present [:password1] "Choose password")
           (v/present [:password2] "Re-enter password"))
    (js/alert "Signed up!"))
```

1. `validate!` returns a truthy value if data is valid.
2. This is data to validate.
3. Cursor to store validation results.
4. Validators.

Here's what happens after you click "Sign up" while all fields are empty:

<img src="https://github.com/bilus/reforms/blob/master/doc/images/validation-1.png" width="40%">

To satisfy your curiosity, here are the contents of `ui-state`:

```clojure
{:validation-errors [{:korks #{[:login]}, :error-message "Enter login name"} 
                     {:korks #{[:password1]}, :error-message "Choose password"} 
                     {:korks #{[:password2]}, :error-message "Re-enter password"}]}
```

A slightly richer example: [Om](https://github.com/bilus/om-reforms/blob/master/examples/validation/src/validation.cljs) ([demo](http://bilus.github.io/reforms/examples/om/validation/index.html))
[Reagent](https://github.com/bilus/reagent-reforms/blob/master/examples/validation/src/validation.cljs) ([demo](http://bilus.github.io/reforms/examples/reagent/validation/index.html)).

For the list of available validators, see the [API Reference](http://bilus.github.com/reforms/doc/).

#### Custom validators

A validator is a function that returns a lambda that takes some data and returns `nil` or a validation error. Let's create a custom validation that checks if data is a positive number:
  
```clojure
(defn positive-number?
  [s]
  (pos? (js/parseInt s)))

(defn positive-number
  [korks error-message]                                       ;; 1
  (fn [cursor]                                                ;; 2
    (when-not (positive-number? (get-in cursor korks))        ;; 3
      (v/validation-error [korks] error-message))))           ;; 4
```

1. The arguments here are up to you. In this example we pass `korks` pointing to data we want to validate and the error message. This is a typical pattern.
2. The actual function our validator returns takes `cursor`.
3. Check if it's a positive number.
4. Build and return an error if it's not.

While we're at it, we could make it more readable with the built-in `is-true` validator:

```clojure

(defn positive-number
  [korks error-message]
  (v/is-true korks positive-number? error-message))
```

Either way, you can use your brand new validator like a pro:

```clojure
(validate! 
    data
    ui-state
    (positive-number [:age] "Age must be a positive number"))
```

#### Forcing errors

Validation errors may be forced which comes useful when using external APIs etc. Observe:

```clojure
(v/validate!
    customer
    ui-state
    (v/force-error [:server-error] "An error has occurred"))
```

You'd normally call it from an asynchronous error handler, go block etc.

You can either have a form field show the error if it makes sense by passing its korks to `force-error` or use the `error-alert` helper to render the error:

```clojure
(v/error-alert [:server-error])
```

Note that `error-alert` can render any number of custom errors like so:

```clojure
(v/error-alert [:auth-error] [:twitter-error])
```

### Tables

Starting with version 0.4.0 Reforms support HTML tables with optional row selection fully stylable using CSS and compatible with Bootstrap table classes
(if you use Bootstrap in the first place). 

For live example see this [demo](http://bilus.github.io/reforms/examples/reagent/controls/index.html) ([source](https://github.com/bilus/reagent-reforms/tree/master/examples/controls)).

#### Simple table

This is how you create a simple table, just provide a vector with map per each row:

```clojure
(t/table [{:name "Tom"} {:name "Jerry"} {:name "Mickey"} {:name "Minnie"}])
```

Here we create just one column.

#### Column names

It's usually a good idea to give columns human-friendly titles:

```clojure
(t/table [{:name "Tom"} {:name "Jerry"} {:name "Mickey"} {:name "Minnie"}]
         :columns {:name "Hero name"})
```

#### Attributes

As with all controls, you can specify optional attributes; they will be applied to the <table> element (see https://github.com/r0man/sablono#html-attributes):

```clojure
(t/table {:key "hero-table"       ;; Unique React key to avoid warnings.
          :class "table-striped"} ;; Bootstrap table style, see http://getbootstrap.com/css/#tables
         [{:name "Tom"} {:name "Jerry"} {:name "Mickey"} {:name "Minnie"}]
         :columns {:name "Hero name"})
```


#### Row selection

As an option, you can enable row selection using checkboxes. Current selection is stored in an atom/cursor (as a set of unique row ids).
These row ids are provided through a user-defined function, here we use a separate :id column (which isn't visible to the user):

```clojure
(t/table {:key "rs-table"}
         [{:name "Tom" :id 1} {:name "Jerry" :id 2} {:name "Mickey" :id 3} {:name "Minnie" :id 4}]
         :columns {:name "Hero name"}
         :checkboxes {:selection data
                      :path      [:selected]
                      :row-id    :id})
```

Each selected row gets class "table-row-selected" which you can use for styling.

See the [API Reference](http://bilus.github.io/reforms/doc/reforms.table.html#var-table).

### Assorted topics

#### Hiding labels

Starting with version 0.4.0 labels are optional; for example the text box below will be displayed without a label:

```clojure
(f/text data [:name])
```

#### Element attributes

Each form helper accepts React attributes as the first argument. These attributes will be handed over to React (see https://github.com/r0man/sablono#html-attributes)

```clojure
(text {:key "name-1"} "Name" user [:name])
```

Attributes are optional, this form will work as well.

```clojure
(text "Name" user [:name])
```

#### Placeholders for empty text boxes

You can add a placeholder shown when the text box is empty using a `:placeholder` option:

```clojure
(f/text "Your name" data [:name] :placeholder "Enter your name here")
```

It also works for `textarea` and other controls based on `html5-input` such as `password`, `datetime-local`, `email` and others. 

#### Using radio buttons

When using radio buttons remember to provide a value, for instance:

```clojure
(f/form
  (f/radio "Data" app-state [:current-view] :data)
  (f/radio "Groups" app-state [:current-view] :groups))
```

#### Showing warnings

In addition to validation proper, `text`, `password` and other controls based on `html5-input` support warnings:
  
```clojure
(text "City" [:city] :warn-fn #(when-not (= "Kansas" %) "We're not in Kansas anymore")
```

<img src="https://github.com/bilus/reforms/blob/master/doc/images/warning.png" width="70%">

Note that by default a Font Awesome icon is used to show the warning icon. You can override this using `(set-options! [:icon-warning] "...")`.
  
#### Configuration options

You can configure global options using `set-options!`. See [this](http://bilus.github.io/reforms/doc/reforms.core.options.html) for details.

Here's a quick example:

```clojure
;; Set background of every form to red color.
(set-options! {:form {:attrs {:style {:background-color "red"}}}})
```

### Demos

#### Om

- Hello world [source](https://github.com/bilus/om-reforms/tree/master/examples/hello_world) [demo](http://bilus.github.io/reforms/examples/om/hello_world/index.html)
- Dynamic form with customizations [source](https://github.com/bilus/om-reforms/tree/master/examples/simple) [demo](http://bilus.github.io/reforms/examples/om/simple/index.html)
- Available controls [source](https://github.com/bilus/om-reforms/tree/master/examples/controls) [demo](http://bilus.github.io/reforms/examples/om/controls/index.html)
- Validation [source](https://github.com/bilus/om-reforms/tree/master/examples/validation) [demo](http://bilus.github.io/reforms/examples/om/validation/index.html)
- Background operations [source](https://github.com/bilus/om-reforms/tree/master/examples/validation) [demo](http://bilus.github.io/reforms/om/examples/progress/index.html)

#### Reagent

- Hello world [source](https://github.com/bilus/reagent-reforms/tree/master/examples/hello_world) [demo](http://bilus.github.io/reforms/examples/reagent/hello_world/index.html)
- Dynamic form with customizations [source](https://github.com/bilus/reagent-reforms/tree/master/examples/simple) [demo](http://bilus.github.io/reforms/examples/reagent/simple/index.html)
- Available controls [source](https://github.com/bilus/reagent-reforms/tree/master/examples/controls) [demo](http://bilus.github.io/reforms/examples/reagent/controls/index.html)
- Validation [source](https://github.com/bilus/reagent-reforms/tree/master/examples/validation) [demo](http://bilus.github.io/reforms/examples/reagent/validation/index.html)
- Background operations [source](https://github.com/bilus/reagent-reforms/tree/master/examples/validation) [demo](http://bilus.github.io/reforms/examples/reagent/progress/index.html)

#### Rum

- Hello world [source](https://github.com/bilus/rum-reforms/tree/master/examples/hello_world) [demo](http://bilus.github.io/reforms/examples/rum/hello_world/index.html)
- Dynamic form with customizations [source](https://github.com/bilus/rum-reforms/tree/master/examples/simple) [demo](http://bilus.github.io/reforms/examples/rum/simple/index.html)
- Available controls [source](https://github.com/bilus/rum-reforms/tree/master/examples/controls) [demo](http://bilus.github.io/reforms/examples/rum/controls/index.html)
- Validation [source](https://github.com/bilus/rum-reforms/tree/master/examples/validation) [demo](http://bilus.github.io/reforms/examples/rum/validation/index.html)
- Background operations [source](https://github.com/bilus/rum-reforms/tree/master/examples/validation) [demo](http://bilus.github.io/reforms/examples/rum/progress/index.html)

### FAQ
#### How do I submit the form when the user presses ENTER?

Use the `:on-submit` attribute and pass the same function you use to handle clicks:

```clojure
(form
    {:on-submit #(do-something customer)}
    (text "First name" "Enter first name" customer [:first])
    ...
    (f/form-buttons
      (f/button-primary "Save" #(do-something customer))))
```

**Note:** If `:on-submit` is set, the resulting form will include a hidden submit button. 

#### How to affect changes when user clicks a button?

Because form helpers bind to data, everything user types in is automatically synchronized. If this isn't what you need, create a copy of data before handing it over to the form and then copy it back on save.

#### How to show an operation is in progress?

Buttons and most form helpers accept an `:in-progress` option you can use like this:

```clojure
(button "Start" #(...) :in-progress true)
```

In addition, in case of buttons it's usually a good idea to disable them:

```clojure
(button "Start" #(...) :in-progress true :disable true)
```

<img src="https://github.com/bilus/reforms/blob/master/doc/images/progress.png" width="85">

See this example: [Om](https://github.com/bilus/om-reforms/tree/master/examples/progress/) ([demo](http://bilus.github.io/reforms/examples/om/progress/index.html))
[Reagent](https://github.com/bilus/reagent-reforms/tree/master/examples/progress/) ([demo](http://bilus.github.io/reforms/examples/reagent/progress/index.html))
[Rum](https://github.com/bilus/rum-reforms/tree/master/examples/progress/) ([demo](http://bilus.github.io/reforms/examples/rum/progress/index.html))

#### I'm getting *Each child in an array should have a unique "key" prop*. Why?

If you use Om, it's likely the warning is sabl0no-related (see [this](https://github.com/r0man/sablono/issues/57)).

In your own code avoid passing child elements as a sequence whenever possible:

```clojure
[:ul
  (for [item items]
    [:li item])]
```

with:

```clojure
(into
  [:ul]
  (for [item items]
    [:li item]))
```

If you need to pass a sequence, use attributes to set React key. For example, use code similar to this:

```clojure
(let [items [{:title "foo" :id 1} {:title "bar" :id 2}]]
  [:ul
    (for [{:keys [title id]} items]
      [:li {:key id} title])])
```

On the other hand, if you do find a bug in Reforms, please do report it [here](https://github.com/bilus/reforms/issues).

#### Can I bind to local component state (Om-specific)?


Yes, there's experimental support for this, just remember to use `render-state` instead of `render`:

```clojure
(defn simple-view
  [_ owner]
  (reify
    om/IRenderState
    (render-state [_ _]
      (f/text "Your name" owner [:name] :placeholder "Type your name here"))))
```

You can also store validation data in local state which may be useful even if you store the actual data in an atom. 

A slightly more complete example: [source](https://github.com/bilus/om-reforms/tree/master/examples/local_state/) [demo](http://bilus.github.io/reforms/examples/om/local_state/index.html)

** This is an experimental feature. Please report any bugs. **


### [API Reference](http://bilus.github.io/reforms/doc/)


Please feel free to tweet me @martinbilski or drop me an email: gyamtso at gmail dot com.

### TBD

- Keep Readme short, move most of it to wiki.
- Contact library authors.
- Add tabs. Update 'controls' example. Blog post.
- Port tests.

### Credits

[Aspasia Beneti](https://github.com/aspasia) is the author and maintainer of [Rum bindings](https://github.com/aspasia/rum-reforms) for Reforms.

### License

Copyright © 2015 Designed.ly, Marcin Bilski

The use and distribution terms for this software are covered by the
Eclipse Public License which can be found in the file LICENSE at the root of this distribution.
By using this software in any fashion, you are agreeing to be bound by the terms of this license.
You must not remove this notice, or any other, from this software.
