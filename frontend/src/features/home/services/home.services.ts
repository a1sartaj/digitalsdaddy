import publicApi from "@/lib/api/public-api"




const submitContactForm = async (formData: any) => {
    const responses = await publicApi.post("/mail/send", formData)
    return responses.data;
}


export default {
    submitContactForm,
}