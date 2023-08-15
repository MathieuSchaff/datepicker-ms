# React Date Picker from Scratch using TSDX React w/ Storybook User Guide

[React Date Picker MS](https://www.npmjs.com/package/react-datepicker-ms) is a date picker component for [React](https://reactjs.org/). Renders an input and a calendar. This components is customizable, easy to use and can be styled to match any design.

## Main features

- ☀️ Select a day
- 🧘‍♀️ using [date-fns](http://date-fns.org/) as date library
- 🌎 Localizable into any language
- ➡️ Keyboard navigation for certain part of the component
- 🤖 Written in TypeScript
- Easy to style and customize
- 📄 Easy to integrate

## Installation

npm install react-datepicker-ms 

## Example

```javascript
import React from 'react';
import { format } from 'date-fns';
import { DatePicker } from 'react-datepicker-ms';
export default function Form() {
  const [selected, setSelected] = React.useState < Date > new Date();
  return (
    <DatePicker
      id="dateOfBirth"
      value={selectedDate}
      onChange={setSelectedDate}
      formatDate={FORMAT_OF_DATE}
      maxDate={new Date(2027, 2, 22)}
      name="myBeautifulDatePicker"
      ariaRequired={true}
      iso={true}
    />
  );
}
```

|  Prop name   |             Type             |                     Description                     | Default value/optionnal |     Example values     | required |
| :----------: | :--------------------------: | :-------------------------------------------------: | :---------------------: | :--------------------: | :------: |
|      id      |            string            |                 the id of the input                 |          none           |   "datepicker-input    |   true   |
|    value     |             Date             |                the value of the date                |          none           |       new Date()       |   true   |
|   onChange   | <React.SetStateAction<Date>> | The setter of the date inside the higher component  |          none           |    setSelectedDate     |   true   |
|   minDate    |             Date             |                    The min date                     |        optionnal        | new Date(2012, 9, 10)  |  false   |
|   maxDate    |             Date             |                    The max date                     |        optionnal        | new Date(2022, 10, 10) |  false   |
| placeholder  |            string            |     the placerholder of the input text element      |        optionnal        |      "2010-4-22"       |  false   |
|  formatDate  |            string            | the format of the date to be formated with date fns |      "yyyy-MM-dd"       |      "yyyy-L-dd"       |   true   |
|     name     |            string            |                    name of input                    |          none           |    "date of birth"     |   true   |
| ariaRequired |           boolean            |               is this input required                |        optionnal        |       false/true       |  false   |
|     iso      |           boolean            |        local date begin on sunday or monday?        |        optionnal        |       false/true       |  false   |
|  formatDay   |            string            |             the format of the day input             |          Text           |        And more        |  false   |
| formatMonth  |            string            |              the format of the months               |          "LLL"          |         "LLL"          |  false   |
|  formatYear  |            string            |               the format of the years               |         "yyyy"          |         "yyyy"         |  false   |
|  ariaLabels  |          AriaLabels          |           the aria labels to be displayed           |        see below        |       see below        |  false   |
|    styles    |           IStyles            |              the styles to be applied               |        see below        |       see below        |  false   |
|  withPrefix  |           boolean            |       display the prefix days in the calendar       |          true           |          true          |  false   |
|  withSuffix  |           boolean            |       display the suffix days in the calendar       |          true           |          true          |  false   |

4 things are essentials for this component:

1. value: ( must be a date)
2. the setter of the date
3. the id
4. the name

## Minimum date and maximum date

The maximum date and the minimum date can be passer to the DatePicker component by adding two props:

exemple: minDate={new Date(1990, 10, 10)} maxDate={new Date(2020, 10, 10)}

## i18n

Different language and date formats are supported by this component. We uses [date-fns](http://date-fns.org/) to format the dates, and the easiest way of changing the language of the calendar is [changing the date fns locale]

Don't forget to import your locale file from the date fns library `date-fns/locale` folder.
If you don't set it. Dates will be in en-US by default.

```javascript
import { setDefaultOptions } from 'date-fns';
import { fr, enUS } from 'date-fns/locale';
//On top of the file set the locale option like this:
setDefaultOptions({ locale: fr });
```

Now this component will be in french

IMPORTANT:
NOT ALL COUNTRIES BEGIN ON THE SAME DAY.
There is countries beginning on sunday and some other on monday.

If your country begin on sunday:

the component is by default configured to begin on sunday but you can still set the value to be sure. You will have to set iso={false}

if your component begin on monday: iso={true}

## Customize the Appearance

There is three ways to style elements in the calendar.

the first one is if you want to display the days before and after the month selected in the calendar

The calandar will always container 42 button days by default. See part I)

The second way is by playing with the classes.

The third way is by providing the DatePicker component an object called styles.

### Do you want the prefix and/or suffix days ?

There is two props to pass to your component

withPrefix?: boolean;
withSuffix?: boolean;

### Classes.

The diffrents classes css used are:

1. datepicker-input : the main input

2. calendar: the calendar wrapper container

3. calendar-header : the header container of the arrow and buttons month and year

4. arrow-button: the arrow to navigate

5. select-button: the button to display the months or years

6. day-name: the days in letters

7. button-day: the button to select a day ( and a date )

8. button-day-prefix: to style the button days that are before the month selected

9. button-day-suffix: to style the button days that are after the month selected

10. button-active: the day selected if there was one. ( by default the day of today)

11. select-buttons_container: the container of the buttons month or year

12. \${type}\_select_buttonthe buttons month or year ( type can be month or year)

### Custom styles with object: "styles".

to customize the color, you set two keys inside the styles object:
primarycolor and secondarycolor and tertiarycolor

```typescript
const styles: IStyles = {
  primarycolor: "#54a0ff",
  secondarycolor: "#DB5461",
  tertiarycolor: "ffffff",
  inputStyles: {border: "2px",  "css properties..."},
  calendarWrapperStyles: {border: "2px",  "css properties..."},
  headerStyles:{
      childrens: ["<<", "<", ">", ">>"],
      ArrowButtonStyles:    "css properties...",
      arrowButtonSize: "2rem" //( default is 1.5rem),
      selectButton: {border: "2px",  "css properties..."},
      header: {height: "200px", "css properties..."},
  },
  days: {
    buttonday: {
      "css properties..."
    },
      dayname: {
      "css properties..."
    }
  },
  select: {
    selectContainer: {
      "css properties..."
    },
    selectOptions:{
      "css properties..."
    },
  }
};
```

If you want to style the arrow buttons to go to the next or previous year/month you can set the key size like above.
Other keys:

1. primarycolor: "#54a0ff",
2. secondarycolor: "#DB5461",
3. tertiarycolor: "ffffff",
4. customSelect: will style the button "Month" and "Year"
5. inputStyles: style the main inpux text that is displaying the date in a text format
6. calendarWrapperStyles: will style the whole calendar container
7. headerStyles : {
   arrowButton: will style the button that look like arrows in the calenda,
   header: will style the header }
8. days:{
   dayname: will style the day of the week ( the days written in letters) inside the calendar
   buttonday: will style the day of the week ( the days written in number) inside the calendar
   }
9. select: {
   selectContainer: will style the options container
   selectOptions: will style the options (months and year)
   }

Congrats! You just saved yourself hours of work by bootstrapping this project with TSDX. Let’s get you oriented with what’s here and how to use it.

## Commands you can use to change or update the package.

First now that I used TSDX.

TSDX scaffolds your new library inside `/src`, and also sets up a [Parcel-based](https://parceljs.org) playground for it inside `/example`.

The recommended workflow is to run TSDX in one terminal:

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run either Storybook or the example playground:

### Storybook

Run inside another terminal:

```bash
yarn storybook
```

This loads the stories from `./stories`.

> NOTE: Stories should reference the components as if using the library, similar to the example playground. This means importing from the root project directory. This has been aliased in the tsconfig and the storybook webpack config as a helper.

### Example

Then run the example inside another:

```bash
cd example
npm i # or yarn to install dependencies
npm start # or yarn start
```

The default example imports and live reloads whatever is in `/dist`, so if you are seeing an out of date component, make sure TSDX is running in watch mode like we recommend above. **No symlinking required**, we use [Parcel's aliasing](https://parceljs.org/module_resolution.html#aliases).

To do a one-off build, use `npm run build` or `yarn build`.

To run tests, use `npm test` or `yarn test`.

## Configuration

Code quality is set up for you with `prettier`, `husky`, and `lint-staged`. Adjust the respective fields in `package.json` accordingly.

### Jest

Jest tests are set up to run with `npm test` or `yarn test`.

### Bundle analysis

Calculates the real cost of your library using [size-limit](https://github.com/ai/size-limit) with `npm run size` and visulize it with `npm run analyze`.

#### Setup Files

This is the folder structure we set up for you:

```txt
/example
  index.html
  index.tsx       # test your component here in a demo app
  package.json
  tsconfig.json
/src
  index.tsx       # EDIT THIS
/test
  blah.test.tsx   # EDIT THIS
/stories
  Thing.stories.tsx # EDIT THIS
/.storybook
  main.js
  preview.js
.gitignore
package.json
README.md         # EDIT THIS
tsconfig.json
```

#### React Testing Library

We do not set up `react-testing-library` for you yet, we welcome contributions and documentation on this.

### Rollup

TSDX uses [Rollup](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings. See [Optimizations](#optimizations) for details.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.

## Continuous Integration

### GitHub Actions

Two actions are added by default:

- `main` which installs deps w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix
- `size` which comments cost comparison of your library on every pull request using [size-limit](https://github.com/ai/size-limit)

## Optimizations

Please see the main `tsdx` [optimizations docs](https://github.com/palmerhq/tsdx#optimizations). In particular, know that you can take advantage of development-only optimizations:

```js
// ./types/index.d.ts
declare var __DEV__: boolean;

// inside your code...
if (__DEV__) {
  console.log('foo');
}
```

You can also choose to install and use [invariant](https://github.com/palmerhq/tsdx#invariant) and [warning](https://github.com/palmerhq/tsdx#warning) functions.

## Module Formats

CJS, ESModules, and UMD module formats are supported.

The appropriate paths are configured in `package.json` and `dist/index.js` accordingly. Please report if any issues are found.

## Deploying the Example Playground

The Playground is just a simple [Parcel](https://parceljs.org) app, you can deploy it anywhere you would normally deploy that. Here are some guidelines for **manually** deploying with the Netlify CLI (`npm i -g netlify-cli`):

```bash
cd example # if not already in the example folder
npm run build # builds to dist
netlify deploy # deploy the dist folder
```

Alternatively, if you already have a git repo connected, you can set up continuous deployment with Netlify:

```bash
netlify init
# build command: yarn build && cd example && yarn && yarn build
# directory to deploy: example/dist
# pick yes for netlify.toml
```

## Named Exports

Per Palmer Group guidelines, [always use named exports.](https://github.com/palmerhq/typescript#exports) Code split inside your React app instead of your React library.

## Including Styles

There are many ways to ship styles, including with CSS-in-JS. TSDX has no opinion on this, configure how you like.

For vanilla CSS, you can include it at the root directory and add it to the `files` section in your `package.json`, so that it can be imported separately by your users and run through their bundler's loader.

## Publishing to NPM

We recommend using [np](https://github.com/sindresorhus/np).

## Usage with Lerna

When creating a new package with TSDX within a project set up with Lerna, you might encounter a `Cannot resolve dependency` error when trying to run the `example` project. To fix that you will need to make changes to the `package.json` file _inside the `example` directory_.

The problem is that due to the nature of how dependencies are installed in Lerna projects, the aliases in the example project's `package.json` might not point to the right place, as those dependencies might have been installed in the root of your Lerna project.

Change the `alias` to point to where those packages are actually installed. This depends on the directory structure of your Lerna project, so the actual path might be different from the diff below.

```diff
   "alias": {
-    "react": "../node_modules/react",
-    "react-dom": "../node_modules/react-dom"
+    "react": "../../../node_modules/react",
+    "react-dom": "../../../node_modules/react-dom"
   },
```

An alternative to fixing this problem would be to remove aliases altogether and define the dependencies referenced as aliases as dev dependencies instead. [However, that might cause other problems.](https://github.com/palmerhq/tsdx/issues/64)
