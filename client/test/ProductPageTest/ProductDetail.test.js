import { describe, expect, test} from 'vitest'
import { mount } from '@vue/test-utils'
import ProductDetail from "../../src/components/productPage/ProductDetail.vue"

describe("Product Detail Method Tests", () => {
    test("Move carousel to previous slide", () => {
        const productDetailWrapper = mount(ProductDetail)
        productDetailWrapper.vm.image = ["image1", "image2", "image3"]

        expect(productDetailWrapper.vm.currentSlide).toBe(0)
        productDetailWrapper.vm.prevSlide()
        expect(productDetailWrapper.vm.currentSlide).toBe(2)
        productDetailWrapper.vm.prevSlide()
        expect(productDetailWrapper.vm.currentSlide).toBe(1)
    })
    test("Move carousel to next slide", () => {
        const productDetailWrapper = mount(ProductDetail)
        productDetailWrapper.vm.image = ["image1", "image2", "image3"]

        expect(productDetailWrapper.vm.currentSlide).toBe(0)
        productDetailWrapper.vm.nextSlide()
        expect(productDetailWrapper.vm.currentSlide).toBe(1)
        productDetailWrapper.vm.nextSlide()
        expect(productDetailWrapper.vm.currentSlide).toBe(2)
        productDetailWrapper.vm.nextSlide()
        expect(productDetailWrapper.vm.currentSlide).toBe(0)
    })
    test("Modify the product quantity", () => {
        const productDetailWrapper = mount(ProductDetail)

        expect(productDetailWrapper.vm.quantity).toBe(1)
        productDetailWrapper.vm.minusQuantity()
        expect(productDetailWrapper.vm.quantity).toBe(1)
        productDetailWrapper.vm.addQuantity()
        expect(productDetailWrapper.vm.quantity).toBe(2)
        productDetailWrapper.vm.minusQuantity()
        expect(productDetailWrapper.vm.quantity).toBe(1)
    })
})