# Test in IT1, part 2: Practical programming

See the Norwegian version of the assignment [here](./README.md).

- `Date`: Friday, February 13, 2026
- `Time`: 08:15 - 10:20 (the last 5 minutes are used to submit)
- `Permitted aids`: All, **except** AI, chatbots, or other tools that write code for you. Cite sources where you use them in your code.

Recommended time:
- Task 1: 20 minutes.
- Task 2: 55 minutes.
- Use the last 5 minutes to make sure you submit all your work.

## Task 1 (10 points)

You will create a form that lets the user register for an event.

If the user has a discount code, they should enter it appropriately in the form and receive a discounted price. This code must be checked against an array that contains approved codes.

Create a form that includes the following elements:
- Text field for "First name"
- Text field for "Last name"
- Email field for "Email"
- Password field for "Password"
- Text field for "Discount code"

When the form is submitted, a message should be shown that says "Thank you for your registration, [First name]!" where [First name] is replaced with what the user entered in the first‑name field.

A message should also be shown that says "You have entered a discount code and receive a discounted price" if the user did so and the code was valid.

Requirements for high achievement:
- Use `form` and `input` elements correctly, with appropriate `type` attributes for the different fields
- Validate the discount code against an array of approved codes
- Use JavaScript to handle form submission and show messages based on user input
- Good code structure, with functions to separate functionality

## Task 2 (20 points)

You will use the API "An API of Ice and Fire" (https://anapioficeandfire.com/) to fetch and display information about the books.

### 2.1 - Basic requirements:
- Show the following information about each book in the "A Song of Ice and Fire" series in a list on the web page:
    - The book name (`name`)
    - Release date (`released`)
    - Number of pages (`numberOfPages`)

To do this, use the URL `https://www.anapioficeandfire.com/api/books` to fetch information about the books. You can use JavaScript (preferably with `fetch`) to retrieve data from the API and then manipulate the DOM to display the information on the page. If you have problems fetching data from the API for any reason, you can use the JSON file [books.json](./books.json) located in the test folder, which contains the same data the API would have provided.

### 2.2 - Advanced requirements:
- Initially show only the book titles in a list on the page.
- When the user clicks a book title, more information about that book should be shown, including the book name, release date, and number of pages.

### 2.3 - Requirements for high achievement:
- Use JavaScript to fetch data from the API and display it on the page (primarily with `fetch`)
- Use `createElement` and `appendChild` to build the DOM content
- Good code structure, with functions to separate functionality (fetch, display), and comments that explain what the different parts do
- Dynamically update the content based on user interaction (click on book titles)

## Submission

Upload a zip file with all files from your solution to Teams (separate submission).

The student name should be clearly shown in the folder and the zip file.