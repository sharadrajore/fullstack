package com.zensar.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zensar.entities.Product;
import com.zensar.services.ProductService;

@RestController
@RequestMapping("/api/v1/products")
@CrossOrigin("*")
//@CrossOrigin(value = "http://ec2-13-233-150-191.ap-south-1.compute.amazonaws.com:8080")
public class ProductController {

	@Autowired
	private ProductService service;
	
	@GetMapping("/{productId}")
	public Product getProductById(@PathVariable("productId")int productId) {
		return service.getProductById(productId);
	}

	@GetMapping()
	public Iterable<Product> getAllProducts() {
		return service.getAllProducts();
	}

	@PostMapping
	public Product insertProduct(@RequestBody Product product) {
		return service.insertProduct(product);
	}

	@DeleteMapping("/{productId}")
	public void deleteProduct(@PathVariable("productId") int productId) {
		service.deleteProduct(productId);
	}

	@PutMapping("/{productId}")
	public void updateProduct(@PathVariable("productId")int productId ,@RequestBody Product product) {
		Product temp = service.getProductById(productId);
		if(temp!=null) {
		service.updateProduct(product);
		}else {
			System.out.println("Product Not Found ....");
		}
		
	}
}
