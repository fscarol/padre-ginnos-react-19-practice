import { expect, test, vi } from "vitest";
import { render, renderHook, waitFor } from "@testing-library/react";
import createFetchMock from "vitest-fetch-mock";
import { usePizzaOfTheDay } from "../usePizzaOfTheDay";

const fecthMocker = createFetchMock(vi);
fecthMocker.enableMocks();

const testPizza = {
    id: "calabrese",
    name: "The Calabrese Pizza",
    category: "Supreme",
    description: "A pizza with a spicy kick",
    image: "api/public/pizzas/calabrese.webp",
    size: { S: 12.25, M: 16.25, L: 20.25 },
}

// Explanation of how renderHook function works under the hood
// function getPizzaOfTheDay() {
//     let pizza;

//     function TestComponent() {
//         pizza = usePizzaOfTheDay();
//         return null;
//     }

//     render(<TestComponent />);
//     return pizza;
// }

test("gives null when first pizza is called", async () => {
    fetch.mockResponseOnce(JSON.stringify(testPizza));
    // const pizza = getPizzaOfTheDay();
    // expect(pizza).toBe(null);
    const { result } = renderHook(() => usePizzaOfTheDay());
    expect(result.current).toBeNull();
})

test("to call the API and give back the pizza of the day", async () => {
    fetch.mockResponseOnce(JSON.stringify(testPizza));
    const { result } = renderHook(() => usePizzaOfTheDay());
    await waitFor(() => { expect(result.current).toEqual(testPizza) });
    expect(fecthMocker).toBeCalledWith("api/pizza-of-the-day");
})