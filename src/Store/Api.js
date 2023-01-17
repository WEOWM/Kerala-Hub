import axios from "axios"


const actionHandle = (payload) => {
    return new Promise((resolve, reject) => {
        payload.baseURL = "https://api.escuelajs.co/api/v1/"

        axios(payload).then((response) => {
            if (response.status >= 200 && response.status < 300) {
                resolve(response)
            }
            else
                console.log("baseurl fall:", response);
            reject(response)
        })
            .catch((err) => {
                reject(err)
            })
    })

}
export default {
    baseURL: "https://api.escuelajs.co/api/v1/",
    CategoreList: "categories?offset=0&limit=6",
    CategoreDetails: "products/?categoryId={id}",
    DetailsRANDOM: "/products?offset=0&limit=24",
    SingleProduts:"products/{id}",

    actionHandle
}