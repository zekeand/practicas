const wowProfessions = ["Alchemist", "Blacksmither", "Enchanter", "Engineer", "Herbalist", "Inscriptioneer", "Jewelcrafter", "Leatherworker", "Miner", "Skinner", "Tailored", "Archaeologhist", "Chef", "Fisher", "First Aider"];

  const wowSyllables = ["ar", "an", "as", "ath", "al", "ad", "ag", "am", "az", "ak", "er", "en", "el", "eth", "ed", "eg", "em", "ez", "ek", "ir", "in", "il", "ith", "id", "ig", "im", "iz", "ik", "or", "on", "ol", "oth", "od", "og", "om", "oz", "ok", "ur", "un", "ul", "uth", "ud", "ug", "um", "uz", "uk", "ba", "be", "bi", "bo", "bu", "da", "de", "di", "do", "du", "ga", "ge", "gi", "go", "gu", "ka", "ke", "ki", "ko", "ku", "la", "le", "li", "lo", "lu", "ma", "me", "mi", "mo", "mu", "na", "ne", "ni", "no", "nu", "pa", "pe", "pi", "po", "pu", "ra", "re", "ri", "ro", "ru", "sa", "se", "si", "so", "su", "ta", "te", "ti", "to", "tu", "va", "ve", "vi", "vo", "vu", "za", "ze", "zi", "zo", "zu"];

  const wowTownNames = ["Stormholm", "Ironhaven", "Goldshire", "Silverpeak", "Shadowglen", "Frostwatch", "Sunset Ridge", "Moonfall", "Stonewatch", "Thunderbluff", "Starfall",   "Eaglespire", "Hearthglen", "Wildhammer", "Ravenholdt", "Havenwood", "Dragonmire", "Sunspear", "Shadowvale", "Duskwood", "Winter's Edge", "Firecrest", "Deepforge", "Light's Hope", "Greenhaven", "Brightwater", "Silverwood", "Mistvale", "Highglen", "Lion's Arch", "Trollbane", "Thunderkeep", "Stonehaven", "Frostfang", "Riverbend", "Gloomwood", "Thornwood",
    "Stormshield", "Ironforge", "Goldcrest", "Silverwood", "Shadowfen", "Frosthold", "Sunrise Valley", "Moonhaven", "Stonewall",  "Thunderwatch",    "Starglade",    "Eaglesnest",  "Hearthstone",  "Wildwood", "Ravenwood","Havencrest", "Dragonspire", "Sunvale", "Shadowfall", "Duskmire",    "Winterhold",  "Firewatch",    "Deephaven",    "Lightspire",
    "Greenvale",    "Brightglen",  "Silverfall",    "Mistwood",    "Highvale",    "Lion's Watch",    "Trollwatch",    "Thunderfall", "Stonemire",    "Frostwood",    "Rivercrest",    "Gloomsorrow", "Thornvale"];


function random_name(){
    const character_name=[];
    const num = Math.floor(Math.random()*9+1)
    for (i=0;i<num;i++){
        let num_silaba = Math.floor(Math.random()*wowSyllables.length)
        character_name.push(wowSyllables[num_silaba])
    }
    return character_name.join('')
}

function random_profession(){
    const character_profession=[]
    num = Math.floor(Math.random()*wowProfessions.length)
    character_profession.push(wowProfessions[num])
    return character_profession.join('')
}

function random_place(){
  const character_place=[]
  num=Math.floor(Math.random()*wowTownNames.length)
  character_place.push(wowTownNames[num])
  return character_place.join('')
}


function random_background(){
  const name1=random_name()
  const profession = random_profession()
  const place=random_place()
  const texto_desc=document.getElementById("gen_descrp")
  texto_desc.textContent = `let\'s meet ${name1}, a ${profession} by profession. Born and rise in ${place}.`
  
  //obtener el estado actual de la propiedad hidden
  const hiddenState = texto_desc.getAttribute('hidden');

  // Cambiar el estado de 'hidden' para mostrar u ocultar el texto
  if (hiddenState === 'true') {
    texto_desc.removeAttribute('hidden');
  }
}
const boton = document.getElementById("bn_gen")
boton.addEventListener('click', random_background);


//console.log(`let\'s meet ${name1}, a ${profession} by profession. Born and rise in ${place}.`)

