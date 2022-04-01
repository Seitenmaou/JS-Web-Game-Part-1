//TODO make it an array

//Function to add background
function addBackground(newImgName, fileSource, positionLeft, PositionBottom){
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let horizonDistance = 5;
    for (let j = 0; j < horizonDistance; j++){
        for (let i = 0; i < screenWidth; i+=100){
            newImage(newImgName, fileSource, `${i}px`, `${j*100}px`)
        }
    }
}

//Add Background
let grass
addBackground(grass, 'assets/grass.png', '0px', '0px')

// Function to add image to page
function newImage(newImgName, fileSource, positionLeft, PositionBottom){
    newImgName = document.createElement('img')
    newImgName.src = fileSource
    newImgName.style.position = 'fixed'
    newImgName.style.left = positionLeft
    newImgName.style.bottom = PositionBottom
    document.body.append(newImgName)
    return newImgName
}

// Add images to page
let greenCharacter
newImage(greenCharacter, 'assets/green-character.gif', '100px', '100px')
let pineTree
newImage(pineTree, 'assets/pine-tree.png', '450px', '200px')
let tree
newImage(tree, 'assets/tree.png', '200px', '300px')
let pillar
newImage(pillar, 'assets/pillar.png', '350px', '100px')
let crate
newImage(crate, 'assets/crate.png', '150px', '200px')
let well
newImage(well, 'assets/well.png', '500px', '425px')

// Function to add item images to page, dissapears on click
function newItem(newItemName, fileSource, positionLeft, PositionBottom) {
    newItemName = newImage(newItemName, fileSource, positionLeft, PositionBottom)
    newItemName.addEventListener('dblclick', function(){
        newItemName.remove()
    })
}

//Add item images
let sword
newItem(sword, 'assets/sword.png', '500px', '405px')
let sheild
newItem(sheild, 'assets/sheild.png', '165px', '185px')
let staff
newItem(staff, 'assets/staff.png', '600px', '100px')

