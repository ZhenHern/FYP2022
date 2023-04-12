import { describe, expect, test} from 'vitest'
import { mount } from '@vue/test-utils'
import MyProfile from "../../src/components/userProfilePage/MyProfile.vue"

describe("My Profile Method Tests", () => {
    test("Check if input is empty", () => {
        const profileWrap = mount(MyProfile)

        expect(profileWrap.vm.firstNameValidity).toBe(true)
        expect(profileWrap.vm.lastNameValidity).toBe(true)
        expect(profileWrap.vm.birthdayValidity).toBe(true)
        profileWrap.vm.checkValidity()
        expect(profileWrap.vm.firstNameValidity).toBe(true)
        expect(profileWrap.vm.lastNameValidity).toBe(true)
        expect(profileWrap.vm.birthdayValidity).toBe(true)

        profileWrap.vm.firstName = ""
        profileWrap.vm.lastName = ""
        profileWrap.vm.birthday = ""
        profileWrap.vm.checkValidity()
        expect(profileWrap.vm.firstNameValidity).toBe(false)
        expect(profileWrap.vm.lastNameValidity).toBe(false)
        expect(profileWrap.vm.birthdayValidity).toBe(false)
    })
})