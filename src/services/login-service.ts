import {userApiResponseSchema} from "@/schema/user";

type LoginArgs = { phone: string, password: string }

interface LoginService {
    login: (args: LoginArgs) => void
}


export class LoginServiceImpl implements LoginService {
    async login({}: LoginArgs) {
        const response = await fetch('https://randomuser.me/api/?results=1&nat=us');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const rawData = await response.json();
        const data = userApiResponseSchema.parse(rawData);
        return data.results[0];
    }
}