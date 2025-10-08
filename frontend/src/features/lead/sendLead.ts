import axios from "axios";  
import { FormLeadData } from "@/widgets/Form/Form";

export async function sendLead(data: FormLeadData) {
    try {
        console.log(data);
        
        await axios.post('/api/lead', data)
    } catch (error) {
        console.error('Error send lead:', error)
        throw error;
    }
}