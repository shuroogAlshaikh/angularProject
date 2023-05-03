package com.udacity.store;

import com.udacity.store.model.Product;
import com.udacity.store.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;

import java.nio.file.Files;


@SpringBootApplication
public class StoreApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(StoreApplication.class, args);
    }

    @Autowired
     ProductRepository productRepository;

    @Override
    public void run(String... args) throws Exception {
        // TODO: Populate the database with products
        productRepository.save(new Product("Book", "The Power of Now", "https://m.media-amazon.com/images/I/417VRErnKPL._SX313_BO1,204,203,200_.jpg", 32));
        //log.info("adddddd");
        productRepository.save(new Product("Pen", "Black Pen", "https://www.montblanc.com/variants/images/22527730565448096/A/w2500.jpg", 5));

    }
}
