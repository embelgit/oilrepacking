package com.Fertilizer.hibernate;

import java.util.Date;


public class Stock {

	
	public long PkStockId;
	public long catID;
	public long subCatId;
	public long fk_shop_id;
	public String productName;
	public String companyName;
	public double weight;
	private double quantity;
	private double unpackedQuantity;
	//private String batchNum;
	private java.util.Date UpdateDate;
	private String catname;
	private String subcatname;
	private Long billNo;
	

	public Stock() {
		super();
		// TODO Auto-generated constructor stub
	}


	
	
	




	public Stock(long pkStockId, long catID, long subCatId, long fk_shop_id,
			String productName, String companyName, double weight,
			double quantity, double unpackedQuantity, Date updateDate, String subcatname, String catname, Long billNo) {
		super();
		PkStockId = pkStockId;
		this.catID = catID;
		this.subCatId = subCatId;
		this.fk_shop_id = fk_shop_id;
		this.productName = productName;
		this.companyName = companyName;
		this.weight = weight;
		this.quantity = quantity;
		this.unpackedQuantity = unpackedQuantity;
		UpdateDate = updateDate;
		this.catname = catname;
		this.subcatname = subcatname;
		this.billNo = billNo;
	}

	/*public String getBatchNum() {
		return batchNum;
	}


	public void setBatchNum(String batchNum) {
		this.batchNum = batchNum;
	}
*/

	public Long getBillNo() {
		return billNo;
	}

	public void setBillNo(Long billNo) {
		this.billNo = billNo;
	}

	public long getPkStockId() {
		return PkStockId;
	}


	public void setPkStockId(long pkStockId) {
		PkStockId = pkStockId;
	}


	public long getCatID() {
		return catID;
	}


	public void setCatID(long catID) {
		this.catID = catID;
	}


	public String getProductName() {
		return productName;
	}


	public void setProductName(String productName) {
		this.productName = productName;
	}


	public String getCompanyName() {
		return companyName;
	}


	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}


	public double getWeight() {
		return weight;
	}


	public void setWeight(double weight) {
		this.weight = weight;
	}


	public double getQuantity() {
		return quantity;
	}


	public void setQuantity(double quantity) {
		this.quantity = quantity;
	}


	public java.util.Date getUpdateDate() {
		return UpdateDate;
	}


	public void setUpdateDate(java.util.Date updateDate) {
		UpdateDate = updateDate;
	}
	
	public long getSubCatId() {
		return subCatId;
	}


	public void setSubCatId(long subCatId) {
		this.subCatId = subCatId;
	}




	public long getFk_shop_id() {
		return fk_shop_id;
	}




	public void setFk_shop_id(long fk_shop_id) {
		this.fk_shop_id = fk_shop_id;
	}




	public double getUnpackedQuantity() {
		return unpackedQuantity;
	}




	public void setUnpackedQuantity(double unpackedQuantity) {
		this.unpackedQuantity = unpackedQuantity;
	}









	public String getCatname() {
		return catname;
	}









	public void setCatname(String catname) {
		this.catname = catname;
	}









	public String getSubcatname() {
		return subcatname;
	}









	public void setSubcatname(String subcatname) {
		this.subcatname = subcatname;
	}
	
	
	
	
}
