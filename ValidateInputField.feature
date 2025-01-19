Feature: Text Field Validation for Number Range 10 to 100
    Assumption: Text Field only accepts integer values

@2BVA @negative
Scenario: Input just below the lower boundary
Given user is on the form page
When user enter "9" in the text field
And clicks send button
Then user should see Error message

@2BVA @positive
Scenario: Input lower boundary
Given user is on the form page
When user enter "10" in the text field
And clicks send button
Then user should see Success message

@3BVA @positive
Scenario: Input just above the lower boundary
Given user is on the form page
When user enter "11" in the text field
And clicks send button
Then user should see Success message

@3BVA @positive
Scenario: Input just below the higher boundary
Given user is on the form page
When user enter "99" in the text field
And clicks send button
Then user should see Success message

@2BVA @positive
Scenario: Input the higher boundary
Given user is on the form page
When user enter "100" in the text field
And clicks send button
Then user should see Success message

@2BVA @negative
Scenario: Input just above the higher boundary
Given user is on the form page
When user enter "101" in the text field
And clicks send button
Then user should see Error message

@negative
Scenario: Input negative number 
Given user is on the form page
When user enter "-10" in the text field
And clicks send button
Then user should see Error message

@negative
Scenario: Input decimal values
Given user is on the form page
When user enter "11.5" in the text field
And clicks send button
Then user should see Error message

@negative
Scenario: Input non-numeric characters
Given user is on the form page
When user enter "abc" in the text field
And clicks send button
Then user should see Error message

@negative
Scenario: Input special characters
Given user is on the form page
When user enter "@!#" in the text field
And clicks send button
Then user should see Error message

@negative
Scenario: Empty input
Given user is on the form page
When user leave the text field empty
And clicks send button
Then user should see Error message

@negative
Scenario: Input white space 
Given user is on the form page
When user enter " " in the text field
And clicks send button
Then user should see Error message