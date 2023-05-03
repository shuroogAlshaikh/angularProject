package com.udacity.store.controller;

import com.udacity.store.model.Order;
import com.udacity.store.model.Product;
import com.udacity.store.repository.OrderRepository;
import com.udacity.store.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("orders/")
@CrossOrigin(origins = "http://localhost:4200")

public class OrderController {
    // TODO: Use the mapping submit to add an API endpoint to fetch the products from the OrderRepository
    @Autowired
    OrderRepository orderRepository;

    @GetMapping("order/{Id}")
    public Order getOrder(@PathVariable long Id) {
        return orderRepository.findById(Id).get();
    }

    @GetMapping("getOrders")
    public List<Order> getOrders() {
        return orderRepository.findAll();
    }

    @PostMapping("addOrder")
    public Order addOrder(@RequestBody Order order) {
        return orderRepository.save(order);
    }
}
