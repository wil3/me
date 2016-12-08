# All about ME

This project provides a template for a personal web page, specifically tailored
for academics. 

The design separates the presentation layer from the data layer allowing the
user to maintain a repository of their data while this project presents and
formats the data to be displayed (think Markdown or Latex). This follows the 
model-view-view model (MVVM) pattern.

A demo can be seen [here](http://cs-people.bu.edu/wfkoch/).

# Install

1. Clone the repository to your web server. Optionally fork the project and
   customize it to your liking.

```
git clone https://github.com/wil3/me.git
```

2. Fork [my-data](https://github.com/wil3/my-data) project and fill in your data in `my-data.js` following the schema `my-schema.json`.
Additionally add recent news to `news.js` file.

3. On the web server clone your forked `my-data` project.

4. Create a soft link in the root of this project to `my-data`.

```
ln -s my-directory/my-data ./my-data
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
