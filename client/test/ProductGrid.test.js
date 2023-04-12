import { describe, expect, test} from 'vitest'
import { mount } from '@vue/test-utils'
import ProductGrid from "../src/components/productPage/ProductGrid.vue"

describe("Product Grid Method Tests", () => {
    test("Decrease the product quantity", () => {
        const productGridWrapper = mount(ProductGrid)
        productGridWrapper.vm.quantity = [1, 2, 3]

        expect(productGridWrapper.vm.quantity[0]).toBe(1)
        productGridWrapper.vm.minusQuantity(0)
        expect(productGridWrapper.vm.quantity[0]).toBe(0)
        productGridWrapper.vm.minusQuantity(0)
        expect(productGridWrapper.vm.quantity[0]).toBe(0)
    })
    test("Increase the product quantity", () => {
        const productGridWrapper = mount(ProductGrid)
        productGridWrapper.vm.quantity = [1, 2, 3]

        expect(productGridWrapper.vm.quantity[0]).toBe(1)
        productGridWrapper.vm.addQuantity(0)
        expect(productGridWrapper.vm.quantity[0]).toBe(2)
    })
})