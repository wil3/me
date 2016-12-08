# All about ME

This project provides a template for a personal web page, specifically tailored
for academics. 

The design separates the presentation layer from the data layer allowing the
user to maintain a repository of their data while this project presents and
formats the data to be displayed (think Markdown or Latex). This follows the 
model-view-view model (MVVM) pattern.

# Install

1. Clone the repository to your web server. Optionally fork the project and
   customize it to your liking.

```
git clone git@github.com:wil3/me.git
```

2. Create your own repository, call it `me-data`. Create a file named
   `me-data.js` and fill in your data following the schema `me-schema.json`.
Additionally create an `announcements.js` file and add new announcements to be
displayed.

3. Create a soft link in the root of this project to `me-data`.

```
ln -s my-directory/me-data ./me-data
```

# Implementation Details

[Knockout](http://knockoutjs.com/index.html) is used to bind the users data to
the HTML document. There is only a small about of JavaScript glue code to get
everything working.

The document is structured using [Bootstrap](http://getbootstrap.com/) to provide
a fluid, responsive page. 

All graphics are vector icons included in Bootstrap and also the [Material Design
Icons](https://materialdesignicons.com/). 

Googles [Material Design Lite](https://getmdl.io/) is used for styling. Color themes
can easily be change [here](https://getmdl.io/customize/index.html) for your own
look.
