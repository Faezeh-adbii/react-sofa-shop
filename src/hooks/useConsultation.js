import { useMutation } from "@tanstack/react-query"
import { createConsultation } from "../services/mutations"

const useCreateConsultation = () => {
    return useMutation({
        mutationFn: createConsultation,
    })
}
export { useCreateConsultation }