import { GEM_DATA } from "./index";

export default (imageURL, title, description) => ({
    type: GEM_DATA,
    imageURL: imageURL,
    title: title,
    description: description
})