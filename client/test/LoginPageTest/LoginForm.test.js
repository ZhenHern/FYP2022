import { describe, expect, test} from 'vitest'
import { mount } from '@vue/test-utils'
import LoginForm from "../../src/components/loginPage/LoginForm.vue"

describe("Login Form Method Tests", () => {
    test("Change input type between text and password", () => {
        const loginWrapper = mount(LoginForm)
        loginWrapper.vm.input = "password"
        loginWrapper.vm.show()
        expect(loginWrapper.vm.input).toBe("text")

        loginWrapper.vm.show()
        expect(loginWrapper.vm.input).toBe("password")
    })
    test("Check email validity", () => {
        const loginWrapper = mount(LoginForm)
        var email = "test@outlook"

        loginWrapper.vm.checkEmail(email)
        expect(loginWrapper.vm.emailValidity).toBe("")

        email = "test@outlook.com"
        loginWrapper.vm.checkEmail(email)
        expect(loginWrapper.vm.emailValidity).toBe("-valid")
    })
})