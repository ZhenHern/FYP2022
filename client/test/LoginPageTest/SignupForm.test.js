import { describe, expect, test} from 'vitest'
import { mount } from '@vue/test-utils'
import SignupForm from "../../src/components/loginPage/SignupForm.vue"

describe("Signup Form Method Tests", () => {
    test("Change input type between text and password", () => {
        const signupWrapper = mount(SignupForm)
        signupWrapper.vm.input = "password"
        signupWrapper.vm.show()
        expect(signupWrapper.vm.input).toBe("text")

        signupWrapper.vm.show()
        expect(signupWrapper.vm.input).toBe("password")
    })
    test("Check password lowercase validity", () => {
        const signupWrapper = mount(SignupForm)
        var password = "TEST"

        signupWrapper.vm.checkLowercase(password)
        expect(signupWrapper.vm.hasLowercase).toBe(false)

        password = "test"
        signupWrapper.vm.checkLowercase(password)
        expect(signupWrapper.vm.hasLowercase).toBe(true)
    })
    test("Check password uppercase validity", () => {
        const signupWrapper = mount(SignupForm)
        var password = "test"

        signupWrapper.vm.checkUppercase(password)
        expect(signupWrapper.vm.hasUppercase).toBe(false)

        password = "TEST"
        signupWrapper.vm.checkUppercase(password)
        expect(signupWrapper.vm.hasUppercase).toBe(true)
    })
    test("Check password number validity", () => {
        const signupWrapper = mount(SignupForm)
        var password = "test"

        signupWrapper.vm.checkNumber(password)
        expect(signupWrapper.vm.hasNumber).toBe(false)

        password = "test123"
        signupWrapper.vm.checkNumber(password)
        expect(signupWrapper.vm.hasNumber).toBe(true)
    })
    test("Check password symbol validity", () => {
        const signupWrapper = mount(SignupForm)
        var password = "test"

        signupWrapper.vm.checkSymbols(password)
        expect(signupWrapper.vm.hasSymbols).toBe(false)

        password = "test@"
        signupWrapper.vm.checkSymbols(password)
        expect(signupWrapper.vm.hasSymbols).toBe(true)
    })
    test("Check email validity", () => {
        const signupWrapper = mount(SignupForm)
        var email = "test@outlook"

        signupWrapper.vm.checkEmail(email)
        expect(signupWrapper.vm.emailValidity).toBe("")

        email = "test@outlook.com"
        signupWrapper.vm.checkEmail(email)
        expect(signupWrapper.vm.emailValidity).toBe("-valid")
    })
    test("Check if password same as confirmed password", () => {
        const signupWrapper = mount(SignupForm)
        var password = "Test123!"

        signupWrapper.vm.password = "Test123!"
        signupWrapper.vm.confirmPassword = "Test123!"
        signupWrapper.vm.checkConfirmPassword(password)
        expect(signupWrapper.vm.confirmPasswordValidity).toBe("-valid")

        password = "Test321!"
        signupWrapper.vm.checkConfirmPassword(password)
        expect(signupWrapper.vm.confirmPasswordValidity).toBe("")
    })
})