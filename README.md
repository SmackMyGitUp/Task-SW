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


Step 2: Verify that all 4 fields are required fields.

--Expected result: All 4 fields should require a value (specified in next steps) before the form can be submitted.


Step 3: Verify that the Username field requires 3-20 alphanumeric characters.

--Expected result: The Username field should require a value of 3-20 alphanumeric characters.


Step 4: Verify that the Email field requires a valid e-mail address format.

--Expected result: The Email field should require a value that meets a valid e-mail address format.


Step 5: Verify that the Password field requires at least 8 characters with at least 1 uppercase letter, 1 lowercase letter and 1 number.

--Expected result: The Password field should require a value that meets the listed requirements.
-Note: Requirements should specify that the password field requires alphanumeric characters, not "just characters", similar to the Username field.


Step 6: Verify that the Confirm Password field requires a matching value with the Password field.

--Expected result: The Confirm Password field should require a value that matches the Password field's value.


Step 7: Verify that the Submit button submits the form.

--Expected result: Clicking the Submit button should submit the form.


=========================

TC2: Field validations

=========================


Step 1: Verify that the Username field only allows the input of alphanumeric characters with a maximum of 20 characters.

--Expected result: The Username field should only allow a value of 20 alphanumeric characters.


Step 2: Verify that the Email field requires a value that follows a valid e-mail address format. 
For more in-depth testing, verify that the value meets the e-mail address format as depicted in RFC 3696 Section 3.

--Expected result: The Email field should require a valid e-mail address format.
This means that the local part should be separated from the domain part by an '@' symbol. There should be a top-level domain (.com/.lv/.co.uk, etc.) at the end.
For more in-depth testing, refer to RFC 3696 Section 3.


Step 3: 

Step X: Empty all fields and click Submit. Verify that all named fields display clear error messages for each field, if validation fails.
--Expected result: All fields should display clear error messages, similar to how the validation requirements were listed in the previous steps.

Step Y: Verify that fields with errors are highlighted.
--Expected result: Fields where validation failed should be highlited.




The Submit button doesn't submit anything. It's a redirect button that only works after local validations are met.
After successfully "submitting" the registration form, the user is simply redirected to "https://auth-home-task.vercel.app/?message=You%20have%20registered%20successfully!"

The message in the "successful registration" page can be edited freely in the link. Given poorer security practices, this could offer a way to execute an SQL injection, since an API request is processed.

The e-mail address validation has a seconday pop-up validation that misses out on a couple of things: 
test@test - It doesn't suggest that there should be a TLD at the end of the value
..@test.com - Both, field and pop-up validation don't follow RFC 3696 regarding the local part starting and ending with a period. Nothing is said about more than 2 consecutive periods either.

Writing 'test@test.c', clicking Submit and then deleting 'c' so the value becomes 'test@test.' still prevents the user from registering, but only invokes the pop-up validation. The field isn't highlited.

Comments:
It's such a simple task that I struggled a bit to come up with a way to separate the test cases into 3. The way I like to write TCs and how the requirements overlap validations, I could easily combine the 3 into 2.