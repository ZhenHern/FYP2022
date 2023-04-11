import { describe, expect, test} from 'vitest'
import { mount } from '@vue/test-utils'
import LandingPageComponent from "../src/components/landingPage/LandingPageComponent.vue"

describe("Landing Page Method Tests", () => {
    test("Go into product detail page", () => {
        const landingPageWrapper = mount(LandingPageComponent)
        const productID = 1
        const showDetails = false
        const slideDirection = "slide-right"

        landingPageWrapper.vm.goToDetails(productID, slideDirection)
        expect(landingPageWrapper.vm.productID).toBe(1)
        expect(landingPageWrapper.vm.showDetails).toBe(true)
        expect(landingPageWrapper.vm.slideDirection).toBe("slide-right")
    })

    test("Check detail page emit", () => {
        const landingPageWrapper = mount(LandingPageComponent)
        const productID = 1
        const showDetails = false
        const slideDirection = "slide-right"

        landingPageWrapper.vm.checkDetails({productID, showDetails, slideDirection})
        expect(landingPageWrapper.vm.productID).toBe(1)
        expect(landingPageWrapper.vm.showDetails).toBe(false)
        expect(landingPageWrapper.vm.slideDirection).toBe("slide-right")
    })
})
