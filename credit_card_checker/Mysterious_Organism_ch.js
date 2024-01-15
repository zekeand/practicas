// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  function pAequorFactory(num, arr){
    return{
    specimenNum: num,
    dna: arr,
    
    mutate () {
        const randomIndex = Math.floor(Math.random() * this.dna.length);
        const currentBase = this.dna[randomIndex];
        const newBase = returnRandBase();
        while (newBase === currentBase){
            newBase = returnRandBase();
        }
        this.dna[randomIndex] = newBase;
        return this.dna
    },

    compareDNA (obj) {
      actual=this.dna;
      compare=obj.dna;
      let percentaje = 0;
      for (let i=0;i<15;i++){
        if(actual[i] === compare[i]){
          percentaje += 1/15;
        }
      }
      console.log(`the pAequor \#${this.specimenNum} is ${percentaje * 100}\% similar to specimen \#${obj.specimenNum}`);
    },
    willLikelySurvive () {
      let survive = 0;
      for (let i =0;i<15;i++){
        if (this.dna[i]==='C'|| this.dna[i]==='G'){
          survive += 1/15
        }
      }
      if (survive >= 0.6){
        //console.log(survive)
        return true
      }else{
        //console.log(survive)
        return false
      }
      }
    }
    
  }
  

let arrspecimen = [];
let count=0
while (arrspecimen.length < 30){
  let specimen = pAequorFactory(count+1,mockUpStrand())
  count++
  //console.log(count)
  //console.log(specimen.dna)
  //console.log(specimen.willLikelySurvive())
  if (specimen.willLikelySurvive() === true){
    arrspecimen.push(specimen);
  } else if (count === 1000){
    console.log('stop creating after 100  specimens')
    break;
  }
  

}
//let specimen = pAequorFactory(1,mockUpStrand())
//console.log(specimen.dna)
//console.log(specimen.willLikelySurvive())
let nums = arrspecimen.map(arrspecimen => arrspecimen.specimenNum)
console.log(nums)
//console.log(arrspecimen[0].specimenNum)