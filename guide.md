# Design and User Sign Up...
# A.K.A. WHAT THE FORK ARE WE DOING

Build an app that allows the user to complete a series of quests. After all quests have been completed, or if the user dies, a final outcome is determined based on how they did on their quests.

Feel free to define the content of the quest as you see fit, as long as it has:
- Media assets like image, video, and/or sound associated
with each quest
- Cumulative state, at least:
    - one positive (gold) that user wants to gain
    - one negative (hp) that user does not want to lose and
    will force an early exit to the game
- Users have to make a choice when they sign up

## Overview

There are four main pages:

* `index.html` - user sign-in page 
* `map.html` - the page where the user chooses an available quest
* `quest.html` - the page where the quest is presented and the
user chooses a response
* `end.html` - the page where the user's final fate as an adventurer is revealed

## Quests Data

The information about each quest should be specified via data. This is an array of objects where each object describes a particular quest. Each quest object should have the same properties and specified information, though the values are different. Each object needs to have properties for:

1. Its `id`. Come up with a short string unique to that quest, like `monsters`, `dragons`, `treasure`.
1. Information to be displayed about the quest on the `quest.html` page. Could be things like title, description, image file to display, audio file to play.
1. Choice list. The question object will need to have a property that describes the choices available to the user with which to respond. Each choice is itself an object. It needs properties for:
    1. Its `id`. Short string unique to that choice
    1. Display information such as description, and what text to display if that choice is chosen
    1. Information about how to modify the user object if that choice is made.

An example quest data object is provided below.

## User Sign-in Page

Prompt the user for a name. Prompt for additional info as well (like an avatar or what kind of adventurer they are).

When the user submits their info, it should be saved. **In addition, you also need to initialize**:
1. Any user properties you need to track, for example `hp` and `gold`
1. An empty `completed` object that will be used to track which quests the user has completed. 

The user should then be navigated to `map.html`.

## Map Page

This page lists the available quests. It needs the `user`, `quests`, and `completed` data. 

The visual UI quests list should be generated from the `quests` data. The user should be able to click on the quest which navigates them to the quest page, including the id in the query string: `quests.html?id=dragon`

Display user profile information including stats (like `hp` and `gold`)

This page also needs to check current state of data and adjust itself accordingly:
1. Check the `completed` object and skip generating a link for any quest the user has already completed.
1. Check if the user is dead (or other premature end condition), and if so navigate to `end.html`
1. Check if all quests have been completed, and if so navigate to `end.html`

## Quest Page

This page runs a quest.  It needs the `user`, `quests`, and `completed` data. Find the quest in `quests` data by reading the `id` from the query string (use `UrlSearchParams`).

Display user profile information including stats (like `hp` and `gold`)

Populate the display in `quest.html` based on the properties of the quest. Loop through the `quest.choices` and create the form controls for each choice (use the choice `id` as the `input` `value`).

When the user submits their choice, use the selected value to find the corresponding choice in `quest.choices`. Update the display with result, change the user object according to the selected `choice`,
and (re)save (you will need to reload the user profile info as well!). The `completed` object needs to be updated by setting a property whose key is the quest id and whose value is `true`: `completed[quest.id] = true;`

## End Page

This page shows the final results.  It needs the `user` data.

Display user profile information including stats (like hp and gold).

TDD one or more functions for evaluating the user object (which has status properties like `hp` and `gold`). These should be used to create a textual summary that is then presented to the user.

---
# User sign up
# A.K.A. NUMBER 11

Goal for today is:
1. Design and planning for the Adventure Quiz
1. User Sign up functionality
1. Sign up API functionality
1. Populate User Profile on Quests List (map page)

## Steps

### Design and Planning

Spend some time figuring out how the adventure quest
will work and its design. You will have time tomorrow to
flush out the map and quest design, but you need to know 
enough to figure out what a user needs to specify at sign up:

1. What name and other choices need to be made?
1. What are the initialization values for user data?

You can begin to model your quest data in `/src/services/quest-data.js`

### Design Sign Up Page (DONE)

Build out your sign-up page using HTML and CSS. Gather in 
fonts, images, etc. you need

### TDD `makeUser` Function

TDD a function that takes a formData instance and returns
a correctly structured user object. This is where you need to add any
initial data for the user (like hp and gold), as well as correctly
type any non-string data.

Basic structure of your test should be like:

```js
test('create user object from form data', (assert) => {
    // arrange
    const formData = new FormData();
    // set the values that would be from the form,
    // remember these are strings!
    formData.set('key1', 'value1');
    formData.set('key2', 'value2');

    // act
    const user = makeUser(formData);

    // assert
    assert.deepEqual(user, {
        // what your user object should look like
    });
});
```

### Handle Form Submit and Log User Object (SOME OF THIS WE NEED TO DO?)

Create your `index.js` module for handling the 
sign up page (`index.html`):

1. Reference the form from the DOM
1. Subscribe to submit event (don't forget to prevent default action!)
1. Make formData from form
1. Call `makeUser`
1. Log returned user object

### TDD API Utility (SOME OF THIS WE NEED TO DO AS WELL?)

We will use one `api.js` module for all data. Assign a
`storage` property that can be used for testing. In your 
tests, use the following pattern to set sessionStorage
and clear it before each test:

```js
api.storage = sessionStorage;

QUnit.testStart(() => {
    sessionStorage.clear();
});
```
 
Write: 

1. A test that calls `signUp` with user object, then
calls `getUser` and asserts that those results are what
you expect using `deepEqual` against original user object.

Your api module should look like this:

```js
const api = {
    // Used by testing to control where API saves data
    storage: localStorage,
    // Methods for reading and saving data
    signUp(user) {
        // initialize any user data
        // stringify and save to api.storage
        // remove completed key!
    },
    getUser() {
        // return the user from api.storage
    }
    // more methods added tomorrow...
};

export default api;
```

### Save User

Change your form event to call the `api.signUp` (api.setSession?) method instead
of logging the data (you'll need to import `api`).

### Design Profile in Map Page (DONE)

Create a Map page for showing available quests. No quests today, 
but design the display of the user profile.

### Navigate to Map on Sign Up (DONE)

In your sign up form submit, navigate to the map page after saving
the user data.

### Populate User Profile (NEED TO DO?)

Create `map.js` module and load from `map.html` page. Import the `api`
module and call `getUser`. Check if there is no user and if not navigate
to home page using `window.location = './'`.

Reference the needed DOM nodes for the profile and populate from
the user object. Don't forget to remove your static example data
once this is working.

---
# Quests
# A.K.A. NUMBER 12

Goal for today is:
1. Create quest metadata
1. Design map (quest list) and quest pages
1. API methods:
    - retrieving quest list and single quest
    - save user object
1. Populate quests list
1. Populate quest
1. Process quest response

## Steps

### Design Quest Page and Quest MetaData (MOSTLY DONE)

- `quest.html`
- `quest-data.js`

Design out a static example of a quest page. This will help flush
out what meta data a quest needs to contain.

This page displays a singular quest and presents the user
with choices or options. 

Keep in mind there are potentially two "states":

1. Display of quest information and prompts
1. Display result of user's choice.

You should copy your profile HTML from the map page to this page as well

Based on this process, create quest data for all quests 
in `/src/services/quest-data.js`. Create a variable for each quest
and then create an array of all quests, which is what you will export:

```js
//quest-data.js

const quest1 = {
    // quest 1 data
};

const quest2 = {
    // quest 2 data
};

const quest3 = {
    // quest 3 data
};

const quests = [quest1, quest2, quest3];

export default quests;
```

### Design Map/Quest List Page

- `map.html`

Build out your map, or list of quests, using static HTML and CSS.

### TDD `createQuestLink` and `createCompletedQuest` Functions (WHOA-OH, WE'RE HALFWAY THERE WHOA-OH LIVIN' ON A PRAYER)

- `create-quest-link.test.js`
- `create-quest-link.js`
- `create-completed-quest.test.js`
- `create-completed-quest.js`

Using your static examples, write **one** function **each** that takes a quest object
and returns a DOM for quests that you can append to the list. You will
need to do this once for a linkable quest, and once for a completed
quest.

You can either create two functions in two modules, or combine the functions
into a single object exported from one module.

**You will need to remove the whitespace from your "expected" to
get it to pass the test**

Basic structure of your test should be like:

```js
test('creates correct link html', (assert) => {
    // arrange
    const quest = {
        // properties used to make the link
    };

    // use your static html example
    const expected = '<div>expected html</div>';

    // act
    const dom = createQuestLink(quest);

    // assert
    assert.equal(dom.outerHTML, expected);
});
```

### TDD API `.getQuests()` Method

- `api.test.js`
- `api.js`

TDD an `api.getQuests()` method on your api utility that returns the quest data. Import the quest data into test and `deepEqual` the return of the function.

### Move Profile Loading to Own Function and Module

- `load-profile.js`
- `map.js`

To keep our map page code slim, and to reuse the functionality on the quest page, move the code that populates the profile into it's own module. You can include the api call and user check as well into this function. Don't forget to import into map page and call `loadProfile()`.

### Load Quest List
(helpful link?
https://medium.freecodecamp.org/lets-explore-objects-in-javascript-4a4ad76af798)

- `map.js`

Add functionality to load available quests into the map page:

1. import the api utility
1. import the createQuestLink function
1. reference parent DOM node
1. get quests from api.getQuests()
1. loop the data
    - call createQuestLink for each quest
    - append returned DOM to parent DOM node

### TDD `createChoice` Function

- `create-choice.test.js`
- `create-choice.js`

Using the static HTML example, write a function that takes a quest 
choice object and returns created DOM for that choice that can 
be appended to form.

Don't forget to add the choice id as the value of the choice, 
like `radio.value = choice.id;`. This is how we can lookup
the choice after the user makes a choice selection.

**Whitespace will need to be removed from your "expected" to
get it to pass the test**

### Add `getQuest(id)` to API
(helpful links? https://codeburst.io/javascript-quickie-dot-notation-vs-bracket-notation-333641c0f781

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)

- `api.test.js`
- `api.js`

Write another test for the `api` utility object that takes an id and returns
the corresponding quest. You can use the quest data in the test:

```js
// arrange
const expectedQuest = questData[1];
// act
const foundQuest = api.getQuest(expectedQuest.id);
// assert
assert.deepEqual(foundQuest, expectedQuest);
```

### Load Quest

- `quest.js`

Initialize the quest page by following pattern of:

1. import the api utility
1. import the createChoice module function
1. import the loadProfile module function
1. call `loadProfile()`
1. reference all needed DOM nodes
1. read the id from query using `URLSearchParams`
1. get quest from `api.getQuest(id)`
1. populate the DOM nodes from the quest object
1. loop the quest choices
    1. call `createChoice` for each choice
    1. append returned DOM to target parent DOM node

### TDD Score Quest Function

- `score-quest.test.js`
- `score-quest.js`

TDD a `scoreQuest` function that takes a user object and a choice object, 
and applies the correct changes to the user. You may need more 
than one test.

When complete, import this module into your quest page as well.

### Change `.signUp` to `.saveUser` in API (WE SAVED OURSELVES TIME BY CALLING THESE SET SESSION AND GET SESSION)

- `api.js`
- find all files that use `.signUp`!

We need an API method for saving the user object. Turns out the
`signUp` user method already does this. Refactor your
code renaming the method to `saveUser`. (HINT: Use the find in file
feature of VSCode).

### Handle Submit

- `quest.js`
- STRETCH
    - `find-by-id.test.js`
    - `find-by-id.js`

Wire up the submit event of your quest form. Inside your handler:

1. Prevent the default action for submit
2. Get the selected choice value from the form (hint: `FormData`)
3. Find the selected choice in the quiz choices
4. Use the `scoreQuest` function to update the user object 
5. Save the modified user object
6. Call `loadProfile` to refresh the displayed profile data
7. Modify the UI as needed, perhaps hiding the form and showing results

STRETCH: Note that we know have two parts of the code that find and item in an 
array by an `id` property. Can you create a module with a `findById(array, id)`
function that is used anywhere you need to find an object in an array by its
`id`?

### Add "Completed" Functionality

- `make-user.test.js`
- `make-user.js`
- `score-quest.test.js`
- `score-quest.js`
- `map.js`

We are going to add a new feature that will require enhancing prior features.
The goal is to know on the map page which quests the user has already completed,
and not allow them to choose that quest again. Here are the touch points:

1. Enhance `makeUser` to add a `completed` property to your user object that is initialized to an empty object (`{}`). Your test(s) will need to be updated.
    ```js
    completed: {},
    ```
1. Enhance `scoreQuest` to update the user's completed property with the quest that
has been completed. Your test(s) will need to be updated. Use the quest id as the key:
    ```js
    user.completed[quest.id] = true;
    ```
1. In your map page, import the `createCompletedQuest` function. When looping 
the quests for display, conditionally create either a link or a completed quest 
based on whether that quest is complete.

    ```js
    let dom;
    if(user.completed[quest.id]) {
        dom = createCompletedQuest(quest);
    }
    else {
        dom = createQuestLink(quest);
    }
    quests.appendChild(dom);
    ```

---
# Quest End Game
# A.K.A. THE FINAL COUNTDOWN (DUN NUN NUN NUN, NUN NUN NUN NUN NUN)

Goal for today is:
1. Create end game page that displays results
1. Check for end game status on map page and redirect

## Steps

### Design End Game Page

- `end.html`
- `end.js`

Design out a static example of a end game page. If the design of
the end game is such that you need different html for different
end states, design those as well.

Provide a link to start over that takes the user to home page.

Add the profile html and call `loadProfile()` in `end.js`.

### TDD `hasCompletedAllQuests` and `isDead`

- `has-completed-all-quests.test.js`
- `has-completed-all-quests.js`
- `is-dead.test.js`
- `is-dead.js`

The first function takes the list of quests and the user object,
and returns `true` if the user as completed all quests, 
otherwise `false`.

The second function takes a user object and determines if they are dead
(or whatever the premature end game is) and returns `true` if they are
dead, otherwise `false` if they are still alive.

## Check Status on Map Page

- `map.js`

Import your two functions and get the user from the api. 
Check if user is dead or has completed all quests, and if
so navigate to end game page.

## TDD End Game Scoring

- `end.js`
- `score-gold.test.js`
- `score-gold.js`
- `score-hp.test.js`
- `score-hp.js`

The functions you need will depend on your game. Create functions
that convert the user stats into tangible messages or indicators
you need to provide results to the user.

Return string tokens instead of full messages (we will use dictionaries 
for choosing text messages in next step). This will keep logic code cleaner and
also enable non-textual actions like setting images

## Load End Game Page

Import the api and get the user.

Use your scoring functions to determine testable results you can use
to modify your end game page. Use message dictionaries to lookup textual
responses. You can conditionally select a dictionary to use, for 
example you could have different dead or alive messages.

Feel free to store message dictionaries in modules.

## User Testing

Get at least three people (not in your group) to try your game. 

---
