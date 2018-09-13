import { IMAGE_TO_UPLOAD } from "./index";

export default (dataUri) => ({
    type: IMAGE_TO_UPLOAD,
    uri: dataUri,
})