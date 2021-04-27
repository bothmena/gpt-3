# GPT-3 Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Development server

Install angular CLI: `npm install -g @angular/cli`

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Implementation description + bonus

#### Goal

The main idea is to use GPT-3 api to be able to train a model to extract useful information about laptop using just a description as a paragraph.

#### Bonus

- Because the way GPT-3 works is a bit counter-intuitive, I decided to make few changes to improve UX:
    - First of all, improve the UI from the point we left it at the end of the tech session.
    - I made few changes to the original mockup, and now we have two modes:
        - Training mode: In this mode you're basically collecting training samples and saving them to the local storage.
        - Inference mode: In this mode you'll use all the collected training samples to extract information of an unseen laptop description.
- Extracting information manually from paragraphs is tedious work, this is why we're using the "Active learning" (it's not actually an active learning) technique to extract information and give the user to fix them if need be before saving them.
- You don't have to start from scratch everytime, we're now using local storage to save training samples you decided to save.

## Workflow

- Insert a laptop description
- Extract information manually, you only have to do this once as long as you don't clear your local storage.
- Hit save
- Repeat, until you have enough samples:
    - Insert a laptop description
    - Click on "Train" (the button should've been called: auto-complete)
    - Wait for response from server, then you'll have some annotation filled for you
    - Make sure all predicted annotations are correct
    - Hit save
- Inference time:
    - Change the mode to "Inference mode"
    - Insert a laptop description
    - Click on "Predict", we will use all saved training samples for prediction
    - Wait until you see a table with all the predicted laptop info.

## What's not working: Tests

I wanted to write tests for at least some features, but because the lack of time and given that I kept adding new features and dependencies to all components, the tests kept breaking, and it may take some time to fix all of them.
I wrote a couple of tests for AppComponent, after fixing the already existing tests, but after adding new features to the component, the tests were no longer even working. the reason is that when for example you use a new component in
app component, you need to also update the spec file and declare that same component or at least create a stub, so basically fixing the tests and write more tests may be an easy task, it may take a lot of time :/
