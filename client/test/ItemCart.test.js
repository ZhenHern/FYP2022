import { describe, expect, test} from 'vitest'
import { mount } from '@vue/test-utils'
import ItemCart from "../src/components/productPage/ItemCart.vue"

describe("Item Cart Method Tests", () => {
    test("Go to paypal page", () => {
        const itemCartWrapper = mount(ItemCart)

        expect(itemCartWrapper.vm.showPaypal).toBe(false)
        itemCartWrapper.vm.goToPaypal()
        expect(itemCartWrapper.vm.showPaypal).toBe(false)
        itemCartWrapper.vm.checkoutEnabled = true
        itemCartWrapper.vm.goToPaypal()
        expect(itemCartWrapper.vm.showPaypal).toBe(true)
    })
    test("Return to item cart page", () => {
        const itemCartWrapper = mount(ItemCart)

        itemCartWrapper.vm.showPaypal = true
        itemCartWrapper.vm.returnItemCart()
        expect(itemCartWrapper.vm.showPaypal).toBe(false)
    })
    test("Calculate subtotal", () => {
        const itemCartWrapper = mount(ItemCart)

        itemCartWrapper.vm.items = [{quantity: 1}, {quantity: 2}, {quantity: 3}]
        itemCartWrapper.vm.products = [{product_price: 30.50}, {product_price: 20.10}, {product_price:5.50}]

        itemCartWrapper.vm.calculateSubtotal()
        expect(itemCartWrapper.vm.subtotal).toBe(87.20)
    })
})