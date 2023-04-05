// -----------------------------------------------------------
// There's no such thing as private properties on a coffeescript object! But, maybe there are?
// 
// Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods
// 
// getSecret() which returns the secret
// setSecret() which sets the secret
// 
// obj = createSecretHolder(5)
// obj.getSecret() # returns 5
// obj.setSecret(2)
// obj.getSecret() # returns 2
// -----------------------------------------------------------

function createSecretHolder(secret) {
    return {
        getSecret : function(){
            return secret;
        },
        setSecret : function(x){
            secret = x
        }
    }
}

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