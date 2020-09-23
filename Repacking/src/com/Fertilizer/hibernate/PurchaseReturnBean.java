package com.Fertilizer.hibernate;

import java.io.Serializable;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Date;

public class PurchaseReturnBean implements Serializable{
	
	
	private Long pkPurchaseReturnId;
	public Long getPkPurchaseReturnId() {
		return pkPurchaseReturnId;
	}

	public void setPkPurchaseReturnId(Long pkPurchaseReturnId) {
		this.pkPurchaseReturnId = pkPurchaseReturnId;
	}

	private Long fk_goods_receive_id;
	private String supplier_name;
	private Double dc_number;
	private String product_name;
	
	private Long pk_goods_receive_id;
	public Long getPk_goods_receive_id() {
		return pk_goods_receive_id;
	}

	public void setPk_goods_receive_id(Long pk_goods_receive_id) {
		this.pk_goods_receive_id = pk_goods_receive_id;
	}

	public Double getQuantity1() {
		return quantity1;
	}

	public void setQuantity1(Double quantity1) {
		this.quantity1 = quantity1;
	}

	public Long getFk_goods_receive_id() {
		return fk_goods_receive_id;
	}

	public void setFk_goods_receive_id(Long fk_goods_receive_id) {
		this.fk_goods_receive_id = fk_goods_receive_id;
	}

	public String getSupplier_name() {
		return supplier_name;
	}

	public void setSupplier_name(String supplier_name) {
		this.supplier_name = supplier_name;
	}

	public Double getDc_number() {
		return dc_number;
	}

	public void setDc_number(Double dc_number) {
		this.dc_number = dc_number;
	}

	public String getProduct_name() {
		return product_name;
	}

	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}

	public Double getBuy_price() {
		return buy_price;
	}

	public void setBuy_price(Double buy_price) {
		this.buy_price = buy_price;
	}

	public Double getSale_price() {
		return sale_price;
	}

	public void setSale_price(Double sale_price) {
		this.sale_price = sale_price;
	}

	public Double getWeight() {
		return weight;
	}

	public void setWeight(Double weight) {
		this.weight = weight;
	}

	public Double getQuantity() {
		return quantity1;
	}

	public void setQuantity(Double quantity1) {
		this.quantity1 = quantity1;
	}

	public String getBatch_no() {
		return batch_no;
	}

	public void setBatch_no(String batch_no) {
		this.batch_no = batch_no;
	}

	public Double getFkCategoryId() {
		return fkCategoryId;
	}

	public void setFkCategoryId(Double fkCategoryId) {
		this.fkCategoryId = fkCategoryId;
	}

	

	public Double getMrp() {
		return mrp;
	}

	public void setMrp(Double mrp) {
		this.mrp = mrp;
	}

	public Double getTax_percentage() {
		return tax_percentage;
	}

	public void setTax_percentage(Double tax_percentage) {
		this.tax_percentage = tax_percentage;
	}

	public Double getBarcodeNo() {
		return barcodeNo;
	}

	public void setBarcodeNo(Double barcodeNo) {
		this.barcodeNo = barcodeNo;
	}

	public String getCompany_Name() {
		return company_Name;
	}

	public void setCompany_Name(String company_Name) {
		this.company_Name = company_Name;
	}

	public Double getDupQuantity() {
		return dupQuantity;
	}

	public void setDupQuantity(Double dupQuantity) {
		this.dupQuantity = dupQuantity;
	}

	public Double getDupQuantity1() {
		return dupQuantity1;
	}

	public void setDupQuantity1(Double dupQuantity1) {
		this.dupQuantity1 = dupQuantity1;
	}

	public String getCatName() {
		return catName;
	}

	public void setCatName(String catName) {
		this.catName = catName;
	}

	private Double buy_price;
	private Double sale_price;
	private Double weight;
	private Double quantity1;
	private String batch_no;
	private Double fkCategoryId;
	private String purchaseDate;
	private Long bill_no;
	
	

	public Long getBill_no() {
		return bill_no;
	}

	public void setBill_no(Long bill_no) {
		this.bill_no = bill_no;
	}

	public String getPurchaseDate() {
		return purchaseDate;
	}

	public void setPurchaseDate(String purchaseDate) {
		this.purchaseDate = purchaseDate;
	}

	private Double mrp;
	private Double tax_percentage;
	private Double barcodeNo;
	private String company_Name;
	private Double dupQuantity;
	private Double dupQuantity1;
	
	private String catName;
	private Double return_amount;
	
	public Double getReturn_amount() {
		return return_amount;
	}

	public void setReturn_amount(Double return_amount) {
		this.return_amount = return_amount;
	}

	private Date returnDate;
	public Date getReturnDate() {
		return returnDate;
	}

	public void setReturnDate(Date returnDate) {
		this.returnDate = returnDate;
	}
}
