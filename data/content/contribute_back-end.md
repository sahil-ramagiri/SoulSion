# Back-end Development
<br/>
Hi, <br/>
So you have decided to work on back end. Great!
We welcome you to our developer's group.

<br/>
<br/>

We use ```python3``` or higher for the backend development.
* For handling HTTP request, we use ```flask```. You will be responsible for developing REST API.
* Some of the functions of SoulSion requires asynchronous behaviour for better performance. We use ```twisted`` for this. If you are familiar with ```asyncio``, you can work with that also.
* For applications requiring real time fetching (eg: counselling services), we use web sockets.

<br/><br/>

## Coding Styles

****

* use ```CapitalizedCamelCase``` for class definitions
* use small letter(a-z) ,underscore ('_') and digits(0-9) for function definition, variables, file names and directories (ie, ```[a-z0-9_]```)
* local import should be made after the standard imports, with a newline character separaing the two
* all the imports must be in alphabetical order (increasing)
* import the modules separately (each in a new line)
* use braces '()' for multiple imports from same modules

```
eg:

handle_io.py:   #[a-z0-9_] for file/directory names
-------------
#standard imports first 
from Flask import ( #use braces for multiple imports
    Blueprint,      # 'b' first then 'r'
    requests
)
import pprint

from soulsion_api.articles.routes import article #local imports

def print_stdout(): #[a-z0-9_] for function definition
    pass

class SayHello: #CapitalizedCamelCase for class definition
    pass
```
<br/><br/>

## Testing

****

* We will be using ```unittest``` for testing. If you are not familiar with testing, don't worry, we will help you out. You can start working on the project for now.

<br/>
Fill the form below and you are good to go. Clone the repo, make your own branch, code, test and the make a pull request.

<br/>
<mark>
If you are a beginner and don't have much coding experiences, head on to <a href="/resources">this link</a>. We have curated some usefull resources for you.
</mark>
<br/><br/>



