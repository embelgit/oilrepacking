package com.Fertilizer.bean;

public class CustomerBean {
	
	private String itemName;
	private String taxName;
	private Double vatPercentage;
	private Double gst;
	private Double igst;
	private Double salePrice;
	private Double weight;
	private Long cat_id;
	private Long sub_cat_id;
	private Long supplier_id;
	private Long PkGoodreceiveId;
	private Double quantity;
	private String companyName;
	private Long barcodeNo;
	private Double mrp;
	private String expiryDate;
	private String unitName;
	private String batchNumber;
	private String hsn;
	
	
	
	public String getBatchNumber() {
		return batchNumber;
	}
	public void setBatchNumber(String batchNumber) {
		this.batchNumber = batchNumber;
	}
	public String getUnitName() {
		return unitName;
	}
	public void setUnitName(String unitName) {
		this.unitName = unitName;
	}
	public String getExpiryDate() {
		return expiryDate;
	}
	public void setExpiryDate(String expiryDate) {
		this.expiryDate = expiryDate;
	}
	public String getItemName() {
		return itemName;
	}
	public void setItemName(String itemName) {
		this.itemName = itemName;
	}
	/*public Double getVatPercentage() {
		return vatPercentage;
	}
	public void setVatPercentage(Double vatPercentage) {
		this.vatPercentage = vatPercentage;
	}*/
	public Double getSalePrice() {
		return salePrice;
	}
	public void setSalePrice(Double salePrice) {
		this.salePrice = salePrice;
	}
	public Double getWeight() {
		return weight;
	}
	public void setWeight(Double weight) {
		this.weight = weight;
	}
	public Long getCat_id() {
		return cat_id;
	}
	public void setCat_id(Long cat_id) {
		this.cat_id = cat_id;
	}
	public Long getSupplier_id() {
		return supplier_id;
	}
	public void setSupplier_id(Long supplier_id) {
		this.supplier_id = supplier_id;
	}
	public Long getPkGoodreceiveId() {
		return PkGoodreceiveId;
	}
	public void setPkGoodreceiveId(Long pkGoodreceiveId) {
		PkGoodreceiveId = pkGoodreceiveId;
	}
	public Double getQuantity() {
		return quantity;
	}
	public void setQuantity(Double quantity) {
		this.quantity = quantity;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public Long getBarcodeNo() {
		return barcodeNo;
	}
	public void setBarcodeNo(Long barcodeNo) {
		this.barcodeNo = barcodeNo;
	}
	
	public Double getMrp() {
		return mrp;
	}
	public void setMrp(Double mrp) {
		this.mrp = mrp;
	}
	public Long getSub_cat_id() {
		return sub_cat_id;
	}
	public void setSub_cat_id(Long sub_cat_id) {
		this.sub_cat_id = sub_cat_id;
	}
	
	public String getTaxName() {
		return taxName;
	}
	public void setTaxName(String taxName) {
		this.taxName = taxName;
	}
	public Double getVatPercentage() {
		return vatPercentage;
	}
	public void setVatPercentage(Double vatPercentage) {
		this.vatPercentage = vatPercentage;
	}
	public Double getIgst() {
		return igst;
	}
	public void setIgst(Double igst) {
		this.igst = igst;
	}
	public Double getGst() {
		return gst;
	}
	public void setGst(Double gst) {
		this.gst = gst;
	}
	public String getHsn() {
		return hsn;
	}
	public void setHsn(String hsn) {
		this.hsn = hsn;
	}

	
	

}
