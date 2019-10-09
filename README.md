# BoxPlatform

Need help updating your business? Uploading sensitive information and allowing a company to review you paperwork? 

Here we have incorporated Box's API and UI elements to do just that!

Creating a front skin similar to Bank Of America Box we log in and are granted access to the Box account registered to this site. Once given access we are passed back a  <a href="https://developer.box.com/docs/downscope-tokens">downscope token</a> This allows the user to access specific content based on the specifications of the token. For the clients downscope token we are logged in a folder will be created from their email name. We are given permission to view only this folder and upload content to it. Once the content is uploaded the customer is done and can log out. 

The Bank of America employee can then go and log in be granted access to the same Box account but issued a different downscope token. This token will render a different User Interface. Allowing the Employee to view all folders for their clients and view the uploaded documents. 

This layers the box technology behind the scenes and allows the company Bank Of America to stay with the same authentication method for verifying user accounts as is used on their home website. Once logged in we are verified to use Bank of Americas Box account. 


## Built with:
<ol>
<li> HTML 
<li> CSS 
<li> Jquery
<li> Javascript 
<li> Box SDK
<li> Express
</ol>

# Local Development Environment for website Repo
The following will get up and running locally.

Author
Adam Lehrer

![Box Bank Of America](assets/Box.BofAgif.gif)
![Box Bank Of America](assets/employee.gif)


