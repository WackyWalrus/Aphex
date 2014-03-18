Aphex
=====

Using a javascript array of hex color codes, you can create pixel art!

Call the function with the first argument how big you want the blocks of color, and the second argument would be the array.

	var arr = ['000000','000000'];

	Aphex(10,arr);

It has a few commands that you can use in the array.

	'do10'  // takes the last used color and repeats it 10 times
	'line9' // takes the last used color and repeats it 9 times, and then adds a clear to the next line

Currently this only adds the content into a div#painting, I'll add another argument in the future to change that.