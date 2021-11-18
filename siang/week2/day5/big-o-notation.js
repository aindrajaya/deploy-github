const data = [5,3,1,4,2] 
const data2 = ["A","B","C","D"] 

n = data.length
a = data2.length

// 1. O(n)
for(let i=0; i<data.length; i++){
  console.log("data ke - "+i)
}

//2. O(n+a)
for(let i=0; i<data.length; i++){
  console.log("data ke - "+i)
}

for(let i=0; i<data2.length; i++){
  console.log("data dua ke - "+i)
}

//3. O(n^2) - looping nested
for(let i=0; i<data.length; i++){
  for(let j=0; j<data.length; j++){
    console.log("data ke - "+i)
  }
}

//4. O(n*a) - looping inside data2
for(let i=0; i<data2.length; i++){
  for(let j=0; j<data.length; j++){
    console.log("data ke - "+i+" dan "+"data ke -"+j)
  }
}

