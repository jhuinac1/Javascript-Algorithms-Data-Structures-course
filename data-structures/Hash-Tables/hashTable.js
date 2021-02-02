// console.log("hello".charCodeAt(0) - 96  );
// console.log("hello".charCodeAt(1) - 96  );
// console.log("hello".charCodeAt(2) - 96  );
// console.log("hello".charCodeAt(3) - 96  );
// console.log("hello".charCodeAt(4) - 96  );
// console.log("hello".charCodeAt(5) - 96  );


/** A HASHTABLE CLASS */

/**
 * Set()
 * - Accepts a key and a value
 * - Hashes they key 
 * - Stores they key-value pair in the hash table array via separate chaining. 
 * 
 * 
 * Get()
 * - Accepts a key
 * - Hashes the key 
 * - Retrieves the key-value pair in the hash table 
 * - If the key isn't found, returns undefined 
 * 
 * Keys()
 * - lops through the hash table array and returns an array of keys in the table 
 * 
 * values() 
 * - Loops through the hash table array and returns an array of values in the table. 
 * 
 */

class HashTable {
    constructor(size = 53){
        this.keyMap = new Array(size);
        // this.keys= [];
        // this.values = [];
    }

    hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME  + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value){
        let hashedKey = this.hash(key);        
        
        if(!this.keyMap[hashedKey]){
            this.keyMap[hashedKey] = [];
        }
        this.keyMap[hashedKey].push([key, value]);
        // this.keys.push(key); // my way of implementing dynamically an array of values and keys.
        // this.values.push(value);

        
    }
    
    get(key){
        let hashedKey = this.hash(key);
        if(this.keyMap[hashedKey]){
            for( let i = 0; i < this.keyMap[hashedKey].length; i++){
                let keyVal = this.keyMap[hashedKey][i];
                if(keyVal[0] === key ){
                    return keyVal[1];
                }
            }
        }
        return undefined
    }

    keys(){
        let valuesArr = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(!valuesArr.includes(this.keyMap[i][j][0])){
                        valuesArr.push(this.keyMap[i][j][0])
                    }
                }
            }
            
        }
        return valuesArr
    }
    values(){
        let valuesArr = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][1])
                    }
                }
            }
            
        }
        return valuesArr
    }
}

const newHash = new HashTable(17);

newHash.set("eh", 3)
newHash.set("help", 7)
newHash.set("hey", 9)
newHash.set("hey", 9)
newHash.set("lamp", 2)
newHash.set("lamp", 2)
newHash.set("lamp", 2)
newHash.set("lamp", 2)
newHash.set("eraser", 1)
console.log(newHash);
console.log(newHash.get("eraser"));
console.log(newHash.values()); 
console.log(newHash.keys()); 

newHash.keys().forEach((key, i) => {
    console.log(i, key);
});