const writeToScreen = (data =[]) => {
    console.log(data);
    const photosEl = document.querySelector('.photos');
    let datas=``;
    data.forEach(photo => {
        datas +=`<div class="photo"><h3>${photo.title}</h3>
        <img src="${photo.url}"></div>`;
    });
        photosEl.innerHTML= datas;
    
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