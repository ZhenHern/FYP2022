import { describe, expect, test} from 'vitest'
import { mount } from '@vue/test-utils'
import ChangePassword from "../../src/components/userProfilePage/ChangePassword.vue"

describe("Change Password Method Tests", () => {
    test("Toggle hide passwords", () => {
        const changePasswordWrap = mount(ChangePassword)

        expect(changePasswordWrap.vm.hideCurrentPassword).toBe(true)
        changePasswordWrap.vm.toggleHideCurrentPassword()
        expect(changePasswordWrap.vm.hideCurrentPassword).toBe(false)

        expect(changePasswordWrap.vm.hideNewPassword).toBe(true)
        changePasswordWrap.vm.toggleHideNewPassword()
        expect(changePasswordWrap.vm.hideNewPassword).toBe(false)

        expect(changePasswordWrap.vm.hideConfirmPassword).toBe(true)
        changePasswordWrap.vm.toggleHideConfirmPassword()
        expect(changePasswordWrap.vm.hideConfirmPassword).toBe(false)
    })
})