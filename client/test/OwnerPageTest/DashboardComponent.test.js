import { describe, expect, test} from 'vitest'
import { mount } from '@vue/test-utils'
import DashboardComponent from "../../src/components/ownerPage/DashboardComponent.vue"

describe("Dashboard Method Tests", () => {
    test("Calculate the total number of pending orders", () => {
        const dashboardWrapper = mount(DashboardComponent)
        var orders = [{status: "Preparing"}, {status: "Preparing"}, {status: "Cancelled"}, {status: "Completed"}, {status: "Completed"}, {status: "Completed"}]
        
        expect(dashboardWrapper.vm.totalPending).toBe(0)
        dashboardWrapper.vm.calculatePending(orders)
        expect(dashboardWrapper.vm.totalPending).toBe(2)
    })
    test("Calculate the total number of cancelled orders", () => {
        const dashboardWrapper = mount(DashboardComponent)
        var orders = [{status: "Preparing"}, {status: "Preparing"}, {status: "Cancelled"}, {status: "Completed"}, {status: "Completed"}, {status: "Completed"}]
        
        expect(dashboardWrapper.vm.totalCancelled).toBe(0)
        dashboardWrapper.vm.calculateCancelled(orders)
        expect(dashboardWrapper.vm.totalCancelled).toBe(1)
    })
    test("Calculate the total number of completed orders", () => {
        const dashboardWrapper = mount(DashboardComponent)
        var orders = [{status: "Preparing"}, {status: "Preparing"}, {status: "Cancelled"}, {status: "Completed"}, {status: "Completed"}, {status: "Completed"}]
        
        expect(dashboardWrapper.vm.totalCompleted).toBe(0)
        dashboardWrapper.vm.calculateCompleted(orders)
        expect(dashboardWrapper.vm.totalCompleted).toBe(3)
    })
    test("Calculate the total revenue", () => {
        const dashboardWrapper = mount(DashboardComponent)
        var orders = [{subtotal: "30.50"}, {subtotal: "20.10"}, {subtotal: "5.50"}]
        
        expect(dashboardWrapper.vm.totalRevenue).toBe(0)
        dashboardWrapper.vm.calculateRevenue(orders)
        expect(dashboardWrapper.vm.totalRevenue).toBe(56.10)
    })
})