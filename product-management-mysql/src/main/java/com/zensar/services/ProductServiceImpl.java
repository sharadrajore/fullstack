package com.zensar.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zensar.entities.Product;
import com.zensar.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductRepository repository;

	@Override
	public Iterable<Product> getAllProducts() {
		return repository.findAll();
	}

	@Override
	public Product insertProduct(Product product) {
		System.out.println(repository.save(product));
		return repository.save(product);
	}

	@Override
	public void deleteProduct(int productId) {
			repository.deleteById(productId);
	}

	@Override
	public void updateProduct(Product product) {
		repository.save(product);
	}

	@Override
	public Product getProductById(int productId) {
		return repository.findById(productId).get();
	}

}
