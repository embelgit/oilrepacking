package com.Fertilizer.bean;

import java.math.BigDecimal;

public class StockDetail {

	private String productName;
	private BigDecimal stock;
	private String godownName;
	private String categoryName;
	private String batchNo;
	private String companyName;
	private Double weight;
	private Double quantity;
	private Double packedQuantity;
	private Double unpackedQuantity;
	
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public Double getWeight() {
		return weight;
	}
	public void setWeight(Double weight) {
		this.weight = weight;
	}
	public Double getQuantity() {
		return quantity;
	}
	public void setQuantity(Double quantity) {
		this.quantity = quantity;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}

	public BigDecimal getStock() {
		return stock;
	}
	public void setStock(BigDecimal stock) {
		this.stock = stock;
	}
	public String getGodownName() {
		return godownName;
	}
	public void setGodownName(String godownName) {
		this.godownName = godownName;
	}
	public String getCategoryName() {
		return categoryName;
	}
	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
	public String getBatchNo() {
		return batchNo;
	}
	public void setBatchNo(String batchNo) {
		this.batchNo = batchNo;
	}
	
	public double getPackedQuantity() {
		return packedQuantity;
	}

	public void setPackedQuantity(Double packedQuantity) {
		this.packedQuantity = packedQuantity;
	}
	

	public double getUnpackedQuantity() {
		return unpackedQuantity;
	}




	public void setUnpackedQuantity(double unpackedQuantity) {
		this.unpackedQuantity = unpackedQuantity;
	}
	
}
