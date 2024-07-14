let mongoose=require('mongoose')

// full stack Db connection create (connect with Driver at mongoAtlas)
// 1 ->
const DB=process.env.DRIVER_ATLAS_URL;
// 2 ->


// SECRET_KEY=492994492y3ry823r8838r838r3338rhhrhr
// DRIVER_ATLAS_URL='mongodb+srv://ankursasmal2025:Ankur123@cluster0.sym8dwl.mongodb.net/mernstack?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(DB).then(()=>{
    console.log('Db connect')
}).catch((e)=>{
    console.log('not connect')
})
