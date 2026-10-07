//ثبت درخواست مشاوره
const CREATE_CONSULTATION_REQUEST = `
mutation CreateConsultation($phone: String!) {
    createConsultationRequest(data: { phone: $phone, contactstatus: pending }) {
        id
        phone    
         contactstatus
        
    }
}
`;
//  انتشار رکورد
const PUBLISH_CONSULTATION_REQUEST = `
mutation PublishConsultation($id:ID!){
    publishConsultationRequest(where: {id: $id}, to: PUBLISHED) {
      id
      phone
      contactstatus
    }
}
`;
export { CREATE_CONSULTATION_REQUEST, PUBLISH_CONSULTATION_REQUEST };