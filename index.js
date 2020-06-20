
function findMatching(arr, str) {
    return arr.filter(driver => driver.toLowerCase() === str.toLowerCase())
}


function fuzzyMatch(arr, str) {
    const length = str.length
    let match = arr.filter(driver => driver.slice(0, length) === str)
    return match
}


function matchName(arr, str) {
    let matches = []
    arr.filter((driver) => {
        if (driver.name === str) {
            matches.push(driver)
        }
    })
    return matches
}
