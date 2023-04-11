import { describe, expect, test} from 'vitest'
import { mount } from '@vue/test-utils'
import NavigationBar from '../src/components/navigationBar/NavigationBar.vue'
import ItemCart from "../src/components/productPage/ItemCart.vue"

// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;

// const dom = new JSDOM();
// global.window = dom.window

describe("Navigation Bar Method Tests", () => {
  test("Open item cart", () => {
    const navigationBarWrapper = mount(NavigationBar)
    const itemCartWrapper = navigationBarWrapper.findComponent(ItemCart)

    expect(itemCartWrapper.vm.showItemCart).toBe(false)
    navigationBarWrapper.vm.openItemCart()
    expect(itemCartWrapper.vm.showItemCart).toBe(true)
  })

  test("Toggle responsive product dropdowns", () => {
    const navigationBarWrapper = mount(NavigationBar)

    expect(navigationBarWrapper.vm.productsToggle).toBe(false)
    navigationBarWrapper.vm.toggleProductDropdown()
    expect(navigationBarWrapper.vm.productsToggle).toBe(true)
  })
})
