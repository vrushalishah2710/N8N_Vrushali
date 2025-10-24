package com.example;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculatorTest {

    @Test
    void testAdd() {
        Calculator calc = new Calculator();
        // Test case: 5 + 5 should equal 10
        assertEquals(10, calc.add(5, 5), "5 + 5 should equal 10");
    }
}
