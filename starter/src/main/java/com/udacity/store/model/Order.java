package com.udacity.store.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "orders")
@Data
public class Order {
    //TODO: Add the details of the order class

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

    @Column(name = "name")
    String name;

    @Column(name = "total")
    double total;

    @Column(name = "address")
    String address;

    @Column(name = "creditCart")
    String creditCart;


    public Order(String name, double total, String address, String creditCart) {
        this.name = name;
        this.total = total;
        this.address = address;
        this.creditCart = creditCart;
    }

    public Order() {
    }


}
