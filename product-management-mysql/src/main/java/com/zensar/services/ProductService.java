package com.zensar.services;

import com.zensar.entities.Product;

public interface ProductService {
	public Iterable<Product> getAllProducts();
	public Product insertProduct(Product product);
	public void deleteProduct(int productId);
	public void updateProduct(Product product);
	public Product getProductById(int productId);
}
