function inject_character(obj: Character) {
    const listDiv = document.getElementById("list-container")
    const strID = toString(obj.ID)
    nameID = strID+"name"
    spID = [strID+"ct",strID+"sp1",strID+"sp2",strID+"sp3",strID+"sp4"]
    classID = strID+"class"
    raceID = strID+"race"
    strLevel = toString(obj.lvl)
    divID = strID+"div"
    listDiv.appendChild("<div class='character-card' id='"+divID+"'></div>")
    const div = document.getElementById(divID)
    div.appendChild("<p id='"+nameID+"'></p>")
    div.appendChild("<p><span id='"+raceID+"'></span> <span id='"+classID+"'></span> (lvl "+strLevel+"></p>")
    strClass = ""
    for (let i=0; i<obj.spec.length; i++) {
        strClass = strClass+obj.spec[i]+"-"
    }
    console.log(strClass)
    strClass = strClass.slice(obj.spec.length-1)
    const classSpan = document.getElementById(classID)
    classSpan.innerText = strClass
    const raceSpan = document.getElementById(raceID)
}
