import { describe, expect, test} from 'vitest'
import { mount } from '@vue/test-utils'
import LoginComponent from "../../src/components/loginPage/LoginComponent.vue"

describe("Login Component Method Tests", () => {
    test("Change component", () => {
        const loginWrapper = mount(LoginComponent)
        var activeComponent = "LoginForm"
        const email = "test@outlook.com"
        const password = "test123"
        expect(loginWrapper.vm.activeComponent).toBe("LoginForm")

        loginWrapper.vm.changeComponent({component: activeComponent, email: email, password: password})
        expect(loginWrapper.vm.activeComponent).toBe("LoginForm")
        expect(loginWrapper.vm.email).toBe(null)
        expect(loginWrapper.vm.password).toBe(null)

        activeComponent = "DetailsForm"
        loginWrapper.vm.changeComponent({component: activeComponent, email: email, password: password})
        expect(loginWrapper.vm.activeComponent).toBe("DetailsForm")
        expect(loginWrapper.vm.email).toBe("test@outlook.com")
        expect(loginWrapper.vm.password).toBe("test123")
    })
})