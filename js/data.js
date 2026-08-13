/*
JSON linkes  :
json for man watches 
https://dummyjson.com/products/category/mens-watches
json for human watches
https://dummyjson.com/products/category/womens-watches

*/

async function initDatabase() {
    if (localStorage.getItem("apex_watches")) return;

    try {
        let resMens = await fetch(
            "https://dummyjson.com/products/category/mens-watches",
        );
        let dataMens = await resMens.json();

        let resWomens = await fetch(
            "https://dummyjson.com/products/category/womens-watches",
        );
        let dataWomens = await resWomens.json(); // ! res.json() => called Response Object . and contain the status of connection like : status 200

        let allProducts = [...dataMens.products, ...dataWomens.products];

        let simpleWatches = allProducts.map((item) => ({
            id: item.id,
            title: item.title,
            price: item.price,
            category: item.category === "mens-watches" ? "Men" : "Women",
            image: item.thumbnail,
        }));

        localStorage.setItem("apex_watches", JSON.stringify(simpleWatches));
        console.log("data are saved as a stringfy in local Storage");
    } catch (error) {
        console.log("hte process not completed -line 16 - ", error);
    }
}

function getWatches() {
    try {
        let watches = localStorage.getItem("apex_watches");
        return watches ? JSON.parse(watches) : []; // !
    } catch (error) {
        console.log("catched error in js/data -line 48- ", error);
        return [];
    }
}

function saveWatches(watchesArray) {
    localStorage.setItem("apex_watches", JSON.stringify(watchesArray));
}
