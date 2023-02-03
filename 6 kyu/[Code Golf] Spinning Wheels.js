// -----------------------------------------------------------
// Task
// "Given a chain of spinning wheels, can you figure out how many rotations in total are needed to get a crate from start to finish?" Can you also do it 
// with a code length restriction?"
// 
// Code Golf Requirement
// the code length must not exceed 111 characters
// current champion: uttumuttu (59) based on monadius (63)
// 
// Input
// chain
// an array containing positive numbers (BigInt)
// each number represents the number of teeth of the wheel in the associated position in the chain
// 
// Output
// return a positive number (BigInt) representing the total amount of rotations to get a crate from start to finish while it's moving across the 
// wheels in the chain.
// 
// Specification
// Wheel
// A wheel is a circular component that rotates around its center point.
// Each wheel has a number of teeth, which is a factor of 4 in order to align teeth in all main wind directions.
// Each tooth of a wheel can hold a crate.
// A wheel rotates in one direction. This can be clockwise or counter-clockwise.
// Example: wheel with 4 teeth, crate 'C' is on the right tooth
// 
//     |
//   - + C
//     |
// 
// Chain
// A chain is a group of connected wheels (at least 1 wheel).
// The first wheel rotates clockwise.
// Each consecutive wheel rotates in the opposite direction as the previous.
// Example: chain: [4, 4, 4], with one tooth of each wheel labeled, to see movement when rotating the chain.
// 
//     |     |     3                         |     |     |
//   - + 1 2 + - - + -   -> 1 rotation ->  - + - - + - - + 3
//     |     |     |                         1     2     |
// 
// Crate
// A crate is placed on the top tooth of the first wheel.
// With each rotation, the crate follows the tooth it is onto.
// The crate gets transferred from one wheel to another when the tooth the crate is on connects with a tooth of the next wheel in the chain.
// The chain rotations stop when the crate reaches the bottom tooth of the last wheel.
// 
// Tutorial
// The examples in the tutorial all use wheels with 4 teeth, because these are the easiest to render visually. See section Test Cases for cases with 
// different sizes of teeth.
// 
// One wheel
// Example: chain: [4] with a crate 'C'.
// 
// start position                    end position
// 
//     C                                |    
//   - + -        -> 2 rotations ->   - + - 
//     |                                C    
//     
// after 1 rotation 
// 
//     |          
//   - + C  
//     |         
//     
// after 2 rotations
// 
//     |        
//   - + - 
//     C      
// 
// Two wheels
// Example: chain: [4, 4] with a crate 'C'.
// 
// start position                    end position
// 
//     C     |                         |     |
//   - + - - + -  -> 2 rotations ->  - + - - + -
//     |     |                         |     C
//     
// after 1 rotation ('C' gets transferred to the next wheel)
// 
//     |     |     
//   - + C C + - 
//     |     |     
//     
// after 2 rotations
// 
//     |     |    
//   - + - - + - 
//     |     C     
//     
// Three wheels
// Example: chain: [4, 4, 4] with a crate 'C'.
// 
// start position                         end position
// 
//     C     |     |                         |     |     |
//   - + - - + - - + -  -> 6 rotations ->  - + - - + - - + -
//     |     |     |                         |     |     C
//     
// after 1 rotation ('C' gets transferred to the next wheel)
// 
//     |     |     |
//   - + C C + - - + -
//     |     |     |
//     
// after 2 rotations
// 
//     |     |     |
//   - + - - + - - + -
//     |     C     |
//     
// after 3 rotations ('C' gets transferred to the next wheel)
// 
//     |     |     |
//   - + - - + C C + -
//     |     |     |
// 
// after 4 rotations
// 
//     |     |     C
//   - + - - + - - + -
//     |     |     |
//     
// after 5 rotations
// 
//     |     |     |
//   - + - - + - - + C
//     |     |     |
//     
// after 6 rotations
// 
//     |     |     |
//   - + - - + - - + -
//     |     |     C
//     
// Test Cases
// Sample Tests
// chain             expected rotations
// 
// [4, 4]            2
// [4, 8]            3
// [32, 16]          12
// [4, 4, 4]         6
// [4, 8, 4]         8
// [32, 16, 8]       22
// [4, 4, 4, 4]      6
// [4, 8, 4, 8]      9
// 
// Last sample test explained:
// 
// [4, 8, 4, 8]      9   - start at top of first wheel (4)
//                       - 1 rotation to right
//                       - transfer crate to second wheel (8)
//                       - 4 rotations from left over bottom to right
//                       - transfer crate to third wheel (4)
//                       - 2 rotations from left over top to right
//                       - transfer crate to last wheel (8)
//                       - 2 rotations from left to bottom
//                       - 1 + 4 + 2 + 2 = 9
// 
// Random Tests
// 100 random tests with 4 <= max teeth < 16 and 1 <= number of wheels < 8
// 100 random tests with 4 <= max teeth < 16 and 50 <= number of wheels < 100
// 100 random tests with 4 <= max teeth < 4000 and 1 <= number of wheels < 100
// 100 random tests with 4 <= max teeth < 4000000 and 1 <= number of wheels < 100
// 100 random tests with 4 <= max teeth < 4000000000 and 50 <= number of wheels < 100
// -----------------------------------------------------------

const countSpins=(f,l=f.length)=>
f.reduce((a,b)=>a+b)/2n + ((l%2?1n:-1n)*f.at(-1)-f[0])/4n;