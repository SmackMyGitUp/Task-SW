Hometask

=========================================================

Task 1: Based on requirements create 3 manual test cases

=========================================================

Prerequisites for all TCs: Navigate to https://auth-home-task.vercel.app/register

=========================

TC1: Registration form

=========================


Step 1: Verify that the form consists of 4 fields (Username, Email, Password, Confirm Password) and a Submit button.

--Expected result: The form should have 4 fields (Username, Email, Password, Confirm Password) and a Submit button.

====

Step 2: Verify that all 4 fields are required fields.

--Expected result: All 4 fields should require a value (specified in next steps) before the form can be submitted.

====

Step 3: Verify that the Username field requires 3-20 alphanumeric characters.

--Expected result: The Username field should require a value of 3-20 alphanumeric characters.

====

Step 4: Verify that the Email field requires a valid e-mail address format.

--Expected result: The Email field should require a value that meets a valid e-mail address format.

====

Step 5: Verify that the Password field requires at least 8 characters with at least 1 uppercase letter, 1 lowercase letter and 1 number.

--Expected result: The Password field should require a value that meets the listed requirements.

-Note: Requirements should specify that the password field requires alphanumeric characters, not "just characters", similar to the Username field.

====

Step 6: Verify that the Confirm Password field requires a matching value with the Password field.

--Expected result: The Confirm Password field should require a value that matches the Password field's value.

====

Step 7: Verify that the Submit button submits the form.

--Expected result: Clicking the Submit button should submit the form.

====

Step 8: Populate all fields with valid values except for one and click Submit. Repeat for all 4 fields.

--Expected result: All field requirements work as expected and notify the user with respecting error messages. The form can not be submitted.

=========================

TC2: Field validations

=========================


Step 1: Verify that the Username field only allows the input of alphanumeric characters with a minimum of 3 and a maximum of 20 characters.

--Expected result: The Username field should allow a value of no less than 3 and no more than 20 alphanumeric characters.

====

Step 2: Verify that the Email field requires a value that follows a valid e-mail address format. 

For more in-depth testing, verify that the value meets the e-mail address format as depicted in RFC 3696 Section 3.

--Expected result: The Email field should require a valid e-mail address format.

This means that the local part should be separated from the domain part by an '@' symbol. There should be a top-level domain (.com/.lv/.co.uk, etc.) at the end.
For more in-depth testing, refer to RFC 3696 Section 3.

====

Step 3: Empty all fields and click Submit. Verify that all named fields display clear error messages for each field, if validation fails.

--Expected result: All fields should display clear error messages, similar to how the validation requirements were listed in the previous steps.

====

Step 4: Verify that fields with errors are highlighted.

--Expected result: Fields where validation has failed should be highlighted.

=========================

TC3: Successful registration

Prerequisites: Successfully passed TC1 and TC2.

=========================


Step 1: Populate all required fields with valid values

--Expected result: All required fields are populated with valid values

====

Step 2: Click Submit.

--Expected result: User is redirected to the Home Page. A success message is displayed "You have registered successfully!"


=========================================================

Task 2: Report at least 1 Bug You have found during the testing

=========================================================


Issue 1: While not a requirement per se, the Submit button doesn't submit anything. 

Steps to reproduce: 

1. Populate all required fields with valid values. 
2. Open dev tools, navigate to network tab and watch API requests. 
3. Click Submit. 

Expected result: The form should be submitted.

Actual result:

It's a redirect button that only works after local validations are met. After successfully "submitting" the registration form, the user is simply redirected to "https://auth-home-task.vercel.app/?message=You%20have%20registered%20successfully!"

====

Issue 2: The message in the "successful registration" page can be edited freely in the URL. 

Steps to reproduce: 

1. Populate all required fields with valid values and click Submit.
2. Edit the message in the URL and press Enter.

Expected result: The message should be a securely implemented part of the Home Page and not be freely editable.

Actual result: Given poorer security practices, this could offer a way to execute an SQL injection, since an API request is processed afterwards. Additionally, it makes advanced users wonder what other attributes are available for editing.

====

Issue 3: The e-mail address validation has a seconday pop-up validation that misses out on a couple of things.

Steps to reproduce: Input the following into the Email field:

test@test - It doesn't suggest that there should be a TLD at the end of the value.

..@test.com - Both, field and pop-up validation don't follow RFC 3696 regarding the local part starting and ending with a period. Nothing is said about more than 2 consecutive periods either.

Writing 'test@test.c', clicking Submit and then deleting 'c' so the value becomes 'test@test.' still prevents the user from registering, but only invokes the pop-up validation. The field isn't highlited.

====

Issue 4: Fields do not accept Cyrillic, Latvian, spaces or any other character that isn't in the English alphabet.

Steps to reproduce: Enter a username such as ābč, $$$, тест, user name, etc.

Expected result: Seeing as usernames can be quite vivid and unique, usernames in different languages and with different symbols should be accepted.

Actual result: The given examples are considered to be errors. Perhaps "alphanumeric" should be clarified as English / Latin letters and numbers.

====

Issue 5: On mobile, the page can be dragged up and down.

Prerequisites: Samsung Galaxy S21, Android 14, Chrome browser, DuckDuckGo browser.

Steps to reproduce:

1. On the given device, navigate to the site via Chrome or DuckDuckGo browser.
2. Drag up and down

Expected result: The form should fill the maximum available screen space for ease of use. The user should not be able to scroll the page.

Actual result: The page can be scrolled by dragging up and down which makes it easy to misallign the form and the user might click on the wrong field. 

====

Issue 6: Mandatory fields are not clearly marked.

Steps to reproduce: Navigate to the registration page.

Expected result: When the registration page is open, mandatory fields should be immediately visible, preferably marked by a red asterisk.

Actual result: No indication is made as to which fields are mandatory and which ones aren't. The only way to tell is to submit the form and see which fields throw errors.

====

Issue 7: When fields fail validation, they are not highlighted.

Steps to reproduce: 
1. Navigate to the registration page
2. Enter invalid values in all fields
3. Click the submit button

Expected result: When fields fail validation, they should be highlighted, preferably in red.

Actual result: A red error message appears below the fields, but the fields themselves are not highlighted.


=========================================================

Task 3: Based on requirements automate 1 manual test case using playwright

=========================================================


TC3 has been automated using Playwright and Javascript. See '/tests/testCase3.spec.js' and '/page-objects/registrationPage.js'.


=========================================================

Task 4: Add points to improve form's UI/UX

=========================================================

Point 1: The form is very basic, almost entirely bog-standard HTML. It could use some colors, thicker outlines, bolded text to make it more interesting to look at.

====

Point 2: I want to keep calling the big blue button the "Submit" button. I believe I have even referred to it as such in my test cases. Seeing the words "Registration form" and "Register" so close together makes me forget the meaning of the word. If the button said "Create User" or "Continue", it would serve as a reminder of why I'm there.

====

Point 3: The fields do not have associated labels. This hinders test automation and, potentially, screen readers, as, in both cases, workarounds or extra effort must be made to clarify what is being selected.

====

Point 4: When successfully registered, the displayed message is bright enough green on white to potentially make it difficult to read on some monitors. A black outline, bolder letters or a more contrasting background could offer better readabilty.


=========================================================

Task 5: Anything You would improve/specify more in the existing requirements

=========================================================

Improvement 1: As mentioned in TC1, requirements should specify that the password field requires alphanumeric characters, not "just characters", similar to the Username field. Even further, I recommend the requirements are reworked to allow any characters for usernames and passwords. Going the alphanumeric route, as mentioned in issue 4, heavily limits users to a comparatively small subset of all the possible passwords. Why can't I have my password in Chinese? I, for one, believe that everyone should allow sentences for passwords. Not only does it make for tougher to crack passwords, they're easier to remember. See this popular https://xkcd.com/936/

Improvement 2: The requirements should specify that the user is actually registered in some form of a database, not just redirected to the home page with a success message. The message should be specified to be better integrated into the homepage, not as mentioned in Issue 2.


=========================================================

Task 6: What else can be tested?

=========================================================

Possibility 1: As mentioned in Issue 2, the security of the app. What other attributes are available for execution? Maybe I can get something to execute code (I couldn't). What server does the API go to?

====

Possibility 2: The performance of the app when 100, 1000, 10000 users try and register at the same time. While Lighthouse suggests the performance is great one-on-one, this would be more of a stress test for the server handling everything.

====

Possibility 3: Additional accessibility testing with screen readers / text-to-speech software. I don't have anything currently installed, so I again rely on Lighthouse for insight.


=========================================================

Comments:

=========================================================

Task 1: It's such a simple task that I struggled a bit to come up with a way to separate the test cases into 3. The way I like to write TCs and how the requirements overlap validations, I could easily combine the 3 into 2.

====

Task 3: Since it was mentioned that Spinwise uses JavaScript, I did the task in JS. However, I learned Playwright on Typescript, and, thus, I may have missed some ways to optimize the code for Javascript. 

====

The app: I think it's just two screens, the homepage and the registration page. I was expecting some backend stuff too with actual registration, but I like these simple tests. People will respond to them according to the level of skill and knowledge that they have. Sometimes less is more that way. 

=========================================================