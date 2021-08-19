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