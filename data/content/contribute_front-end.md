# Front End Development
<br/>
So you have decided to work on front end. Great!!

We use React-js to build the front-end part of SoulSion.
<br/><br/>
## Coding Styles:

****

You must follow the following coding conventions / styles. 

1) 1 tab space for indentation
2) Put each block in their own indentation level, and separate the blocks by 1 tab spaced indent.

	```
	For Eg:
	function Test{
		//This is a block
		if (condition){
			//this is another block
		}

	}
	```
3) Use ES6 syntax when possible
4) Use semicolon ';' (Even though ES6 standard doesn't require ';', our internal automation tool requires this)
5) Use ```CapitalizedCamelCase``` for defining React Components.
6) Use ```camelCase``` for variables.
7) While importing in React:
	* Import must be in alphabetical order based on the package name.
	* Import the 3rd party packages first
	* For local import, import the local files first.
	* While importing in groups, order them alphabetically
	* Always use relative imports 
	* Specify the extension of import (.js, .css, ...)
	
		```
		Eg:
		
		//3rd party imports first
		import axios from 'axios'
		import React from 'react' // 'axios' comes before 'react' alphabetically

		//local import in same directory
		import Meditate from './meditate.js'

		import {MeditatePlayer,MeditateSync} from './utils/synchcronizer.js'
		
		```
8) For naming the folders and files, use small letters (a-z). User '-' in place of space.

	```
	Eg:
	meditate/meditate-synchronizer.js
	```

<br/>
<br/>

## Testing

***

We use ```jestjs``` for testing. If you are not familiar with testing, don't worry, we will help you out. You can start working on project for now.


<br/>

Fill the form below and you are good to go. Clone the repo, make your own branch, code, test and the make a pull request.

<br/>
<mark>
If you are a beginner and don't have much coding experiences, head on to <a href="/resources">this link</a>. We have curated some usefull resources for you.
</mark>

<br/><br/>