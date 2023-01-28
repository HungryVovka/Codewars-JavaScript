// -----------------------------------------------------------
// Story
// Dwight, sitting in his comfortable rocking chair, over looking his latest beet crop is suddenly interrupted by Mos :
// 
// "You know, if we planted more beets, we would make more money." Mos interjects, ruining what was once a peaceful Sunday morning.
// 
// Dwight strolls out across the field and stops and tastes the soil, "There is not enough Nitrogen for all of this to be beets ..." he muses outloud.
// 
// Heading back to Lotus 1-2-3, he quickly crunches the numbers and determines that for every new crop of beets he plants, he loses a fixed amount 
// from each crop due to the strain on the Nitrogen in the soil.
// 
// Can you help Dwight figure out the maximum beetage?
// 
// Task
// You are given the size of a crop and the loss from each crop if an additional crop is planted. The challenge is to figure out the maximum beets that can 
// be harvested, noting of course you can only plant full crops.
// 
// As well, being an astute beeter, Dwight will not exceed the number of crops which would produce the maximum, if he did the the entire harvest 
// would fail due to nitrogen depletion.
// 
// (i.e., if 185.9 crops would give the maximum, he would only plant 185 as 186 causes total crop failure)
// 
// Ex :
// 
// A crop has 10 beets, and each additional crop loses 2 beets from each crop. A maximum of 18 is obtained with two additional crops, as two 
// additional crops cause a loss of 4 from each giving a total of 3x6 or 18 beets.
// 
// Note Dwight has a LOT of land (thousands of acres) and there are many beets in a crop, and there might only be a small change per additional crop. 
// However both the number of beets and the loss will be positive (non-zero) numbers.
// -----------------------------------------------------------

function maxBeets(beets, loss){
  let a = Math.floor((beets / loss - 1) / 2);
  let b = beets - loss * a;
  return (a + 1) * b;
}