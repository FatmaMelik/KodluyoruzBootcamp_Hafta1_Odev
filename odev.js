const writeToScreen = (data =[]) => {
    console.log(data);
    const photosEl = document.querySelector('.photos');
    let datas=``;
    data.forEach(photo => {
        datas +=`<div class="photo" id="${photo.id}"><h3>${photo.title}</h3>
        <img class="photo_url" src="${photo.url}">
        <center onclick="deletePhotos(${photo.id})"><img src="https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png"></center>
        <center onclick="editPhotos(${photo.id})"><img style="margin-left: 140px;" src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-edit-miscellaneous-kiranshastry-solid-kiranshastry.png"></center>
        </div>`;        
    });
        // https://img.icons8.com/glyph-neue/64/000000/delete-forever.png
        // https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png
        // https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/000000/external-delete-video-and-movie-tanah-basah-glyph-tanah-basah.png
        photosEl.innerHTML= datas;
        
}
const deletePhotos= (photo) => {
    // $(`#${photo.id}`).remove();
    document.getElementById(`${photo}`).remove();
}
const editPhotos=(photo) => {
    
}


const getPhotos = async () => {
    try {
        console.log("getPhotos calisti");
        const res=await axios.get("https://jsonplaceholder.typicode.com/photos?_limit=50");
        console.log(res);
        console.log(res.data);
        writeToScreen(res.data);
        
    } catch (error) {
        console.log(error);
        
    }
}

getPhotos();