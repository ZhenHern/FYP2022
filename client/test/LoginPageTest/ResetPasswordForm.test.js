import { describe, expect, test} from 'vitest'
import { mount } from '@vue/test-utils'
import ResetPasswordForm from "../../src/components/loginPage/ResetPasswordForm.vue"

describe("Reset Password Form Method Tests", () => {
    test("Check email validity", () => {
        const resetPasswordWrapper = mount(ResetPasswordForm)
        var email = "test@outlook"

        resetPasswordWrapper.vm.checkEmail(email)
        expect(resetPasswordWrapper.vm.emailValidity).toBe(false)

        email = "test@outlook.com"
        resetPasswordWrapper.vm.checkEmail(email)
        expect(resetPasswordWrapper.vm.emailValidity).toBe(true)
    })
})