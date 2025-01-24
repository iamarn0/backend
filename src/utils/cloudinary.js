import {v2 as cloudinary} from "cloudinary" 
import fs from "fs"

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null;
        //Upload file in Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type: 'auto',
        })
        //File uploades successfully at Cloudinary
        //console.log("File uploaded successfully at Cloudinary", response.url);
        fs.unlinkSync(localFilePath)
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the temporary file from the locally saved file as the operation failed
        return null;
    }
};

export {uploadOnCloudinary}  