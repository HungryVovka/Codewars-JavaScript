// -----------------------------------------------------------
// Express
// Express(http://expressjs.com/) is a minimalist web framework for Node.js.
// 
// To get a server up and running there are a few steps you have to follow.
// 
// Install express npm install express --save
// Require express on a file var express = require('express');
// Get the app from express by invoking it var app = express();
// Start the server with the app's listen function
// 
// The listen function will start a server that you are going to be able to use through the browser.
// 
// It has different signature methods, the one you are going to use in this kata is (port, host, callback)
// 
// Your Task
// Inside the solution function you have to require express and start a server.
// 
// The PORT and HOST are going to be pre-loaded in the process.env object (in a node application process.env stores the environment 
// configuration).
// 
// process.env = {
//   PORT: 3000,
//   HOST: '0.0.0.0',
// };
// -----------------------------------------------------------

const solution = () => {
	const port = process.env.PORT;
	const host = process.env.HOST;
	require("express")().listen(port, host, () => 
		console.log(
			`Express server up and running on port ${port}`))
};

// -----------------------------------------------------------
// License
// Tasks are the property of Codewars (https://www.codewars.com/) 
// and users of this resource.
// 
// All solution code in this repository 
// is the personal property of Vladimir Rukavishnikov
// (vladimirrukavishnikovmail@gmail.com).
// 
// Copyright (C) 2022 Vladimir Rukavishnikov
// 
// This file is part of the HungryVovka/Codewars-JavaScript
// (https://github.com/HungryVovka/Codewars-JavaScript)
// 
// License is GNU General Public License v3.0
// (https://github.com/HungryVovka/Codewars-JavaScript/blob/main/LICENSE)
// 
// You should have received a copy of the GNU General Public License v3.0
// along with this code. If not, see http://www.gnu.org/licenses/
// -----------------------------------------------------------