import {v2 as cloudinary} from 'cloudinary'

export async function POST(request){
    const body = (await request.json())
        console.log("🚀 ~ POST ~ body:", body)
        
    const {paramsToSign} = body;
    console.log("🚀 ~ POST ~ paramsToSign:", paramsToSign)

    const signature = cloudinary.utils.api_sign_request(paramsToSign, process.env.CLOUDINARY_API_SECRET);
    console.log("🚀 ~ POST ~ signature:", signature)
    console.log("🚀 ~ POST ~ process.env.CLOUDINARY_API_SECRET:", process.env.CLOUDINARY_API_KEY)

    return Response.json({signature});
    }
