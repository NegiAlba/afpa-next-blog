export const getStrapiURL = (path="") => {
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"}${path}`;
}

// GET requests via fetchAPI
export const fetchAPI = async (path) =>{
    const request = getStrapiURL(path);
    const response = await fetch(request);
    const data = await response.json();

    return data;
}


==================================== medias.js ====================================
    
    export const getStrapiMedia = (url) => {
    if (url == null) {
        return null;
    }

    // If URL is on cloudinary
    if(url.startWith("http")){
        return url;
    }

    // If it's not, just return the file prepended by the server url
    return `${process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"}${url}`;
}
