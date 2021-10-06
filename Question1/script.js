const lowerCaseWord = (mixedArray) => {
    return new Promise((resolve, reject) => {
        if (mixedArray.length >= 0 && Array.isArray(mixedArray)) {
            const fillterArrayWithString = mixedArray.filter(
                (eachArray) => typeof eachArray === "string"
            );
            const mapArrayWithLowerCaseStr = fillterArrayWithString.map(
                (eachItemOfFilterArray) => eachItemOfFilterArray.toLowerCase()
            );
            resolve(mapArrayWithLowerCaseStr);
        } else {
            reject("invalid array");
        }
    });
};

const mixedArray = ["Pizza", 10, true, 25, false, "wings"];
lowerCaseWord(mixedArray)
    .then((value) => console.log(value))
    .catch((error) => console.log(error));
