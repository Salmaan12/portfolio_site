function generateProjects() {
    let arr = [
        {
            'image': '/images/account-ctms.png',
            'title': 'Cricket Tournament Management System',
            'category': 'Web Development'
        },
        {
            'image': '/images/cpt-HomePage.png',
            'title': 'Clearpaththinking',
            'category': 'Web Development'
        },
        {
            'image': '/images/healingBloom_collage.jpg',
            'title': 'Healing Bloom',
            'category': 'Web Development'
        },
        {
            'image': '/images/nikon-website.png',
            'title': 'Nikon - Camera',
            'category': 'Web Development'
        },
        {
            'image': '/images/real-estate.png',
            'title': 'Bootstrap Real Estate',
            'category': 'Web Development'
        },
        {
            'image': '/images/the-destination.png',
            'title': 'The Destination',
            'category': 'Web Development'
        },
    ]
    let items = document.querySelector(".projectItems");
    let newdiv = document.createElement('div');
    // newdiv.setAttribute('class',divIdName);
    console.log(arr.length)
    for (let index = 0; index < arr.length; index++) {
        items.insertAdjacentHTML('beforebegin', `
        <div class="col-md-4 mt-3">
            <a href="">
                <div class="card">
                    <div class="zoom-effect-container">
                        <div class="image-card">
                            <img src=${arr[index].image} class="card-img-top" alt="...">
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12">
                                <p>${arr[index].category}</p>
                                <h5>${arr[index].title}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
        `)
        console.log(index)
        // items.appendChild(newdiv);
    }
}

window.onload = function () {
    generateProjects();
}
