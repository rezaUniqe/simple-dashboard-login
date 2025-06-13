import {z} from 'zod'
import {parsePhoneNumberFromString} from 'libphonenumber-js'
import {normalizeToInternational} from "@/utils/number-utils";

export const loginSchema = z.object({
    phone: z
        .string()
        .refine(
            (val) => {
                const normalized = normalizeToInternational(val)
                const phone = parsePhoneNumberFromString(normalized, 'IR')
                return phone?.isValid() && phone.getType() === 'MOBILE'
            },
            {
                message: 'شماره موبایل معتبر نیست',
            },
        ),
    password: z.string().min(4, 'رمز عبور باید حداقل ۴ کاراکتر باشد'),
})

export type LoginFormData = z.infer<typeof loginSchema>
