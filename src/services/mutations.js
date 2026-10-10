import { api } from "../configs/api"
import { CREATE_CONSULTATION_REQUEST, PUBLISH_CONSULTATION_REQUEST } from "../graphql/mutations"

// ذخیره شماره موبایل و برگرداندن id آن و انتشار آن id
const createConsultation = async(phone) => {
    //  ساخت رکورد
    const createRes = await api.post("", {
        query: CREATE_CONSULTATION_REQUEST,
        variables: { phone },
    });

    if (createRes.data.errors) {
        throw new Error(createRes.data.errors[0].message);
    }

    const { id } = createRes.data.data.createConsultationRequest;

    // انتشار رکورد
    const publishRes = await api.post("", {
        query: PUBLISH_CONSULTATION_REQUEST,
        variables: { id },
    });

    if (publishRes.data.errors) {
        throw new Error(publishRes.data.errors[0].message);
    }

    //  برگرداندن نتیجه
    return publishRes.data.data.publishConsultationRequest;
};
export { createConsultation }