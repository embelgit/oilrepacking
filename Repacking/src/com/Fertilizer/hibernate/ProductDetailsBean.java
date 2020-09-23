package com.Fertilizer.hibernate;

import java.io.Serializable;
import java.util.Date;

public class ProductDetailsBean implements Serializable {

				private Long prodctId;
				private Long fk_cat_id;
				
				private Long fk_supplier_id;
				private Long fk_unit_id;
				private Long poNumber;
				private String productName;
	/* private String product_name; */
				private String updateDate;
				private String manufacturingCompany;
				private Long fk_subCat_id;
				private Long fk_shop_id;
				private String unit;
	/*
	 * public String getProduct_name() { return product_name; } public void
	 * setProduct_name(String product_name) { this.product_name = product_name; }
	 */





				private Double buyPrice;
				private Double salePrice;
				/*private Double creditSalePrice;*/
				private Double weight;
				private Date insertDate;
				private Long status;
				//private Long fkTaxId;
				private Long fkTaxId;
				public Long getFkTaxId() {
					return fkTaxId;
				}
				public void setFkTaxId(Long fkTaxId) {
					this.fkTaxId = fkTaxId;
				}





				private Double taxPercentage;
				private Double mrp;
				private Double quantity;
				private Double unpackedQuantity;
				private Double packedQuantity;
				public Double getQuantity() {
					return quantity;
				}
				public void setQuantity(Double quantity) {
					this.quantity = quantity;
				}
				public Double getUnpackedQuantity() {
					return unpackedQuantity;
				}
				public void setUnpackedQuantity(Double unpackedQuantity) {
					this.unpackedQuantity = unpackedQuantity;
				}
				public Double getPackedQuantity() {
					return packedQuantity;
				}
				public void setPackedQuantity(Double packedQuantity) {
					this.packedQuantity = packedQuantity;
				}





				private String hsn;
				//for mapping 
				private CategoryDetailsBean categoryDetailsBean;
				private SupplierDetailsBean supplierDetailsBean;
				private MeasuringUnitsBean measuringUnitsBean;
				private TaxCreationBean taxCreationBean;
				//private SubCategoryDetailsBean subcategoryDetailsBean;
				
				



	/*
	 * public Long getFkTaxId() { return fkTaxId; }
	 */
				public ProductDetailsBean() {
					super();
					// TODO Auto-generated constructor stub
				}
				public ProductDetailsBean(Long prodctId, Long fk_cat_id,
						Long fk_supplier_id, Long fk_unit_id, Long poNumber,
						String productName, String manufacturingCompany,
						Long fk_subCat_id, Long fk_shop_id, Double buyPrice,
						Double salePrice, Double weight, Date insertDate,
						Long status, Long fkTaxId, Double taxPercentage,
						Double mrp, String hsn, String unit,
						CategoryDetailsBean categoryDetailsBean,
						SupplierDetailsBean supplierDetailsBean,
						TaxCreationBean taxCreationBean) {
					super();
					this.prodctId = prodctId;
					this.fk_cat_id = fk_cat_id;
					this.fk_supplier_id = fk_supplier_id;
					this.fk_unit_id = fk_unit_id;
					this.poNumber = poNumber;
					this.productName = productName;
					this.manufacturingCompany = manufacturingCompany;
					this.fk_subCat_id = fk_subCat_id;
					this.fk_shop_id = fk_shop_id;
					this.buyPrice = buyPrice;
					this.salePrice = salePrice;
					this.weight = weight;
					this.insertDate = insertDate;
					this.status = status;
					this.unit = unit;
					//this.fkTaxId = fkTaxId;
					this.fkTaxId = fkTaxId;
					this.taxPercentage = taxPercentage;
					this.mrp = mrp;
					this.hsn = hsn;
					this.categoryDetailsBean = categoryDetailsBean;
					this.supplierDetailsBean = supplierDetailsBean;
					this.taxCreationBean = taxCreationBean;
				}

	/*
	 * public void setFkTaxId(Long fkTaxId) { this.fkTaxId = fkTaxId; }
	 */
				public Double getTaxPercentage() {
					return taxPercentage;
				}
				public void setTaxPercentage(Double taxPercentage) {
					this.taxPercentage = taxPercentage;
				}
				public Double getMrp() {
					return mrp;
				}
				public void setMrp(Double mrp) {
					this.mrp = mrp;
				}
				public TaxCreationBean getTaxCreationBean() {
					return taxCreationBean;
				}
				public void setTaxCreationBean(TaxCreationBean taxCreationBean) {
					this.taxCreationBean = taxCreationBean;
				}
				/*public Double getCreditSalePrice() {
					return creditSalePrice;
				}
				public void setCreditSalePrice(Double creditSalePrice) {
					this.creditSalePrice = creditSalePrice;
				}*/
				public Long getProdctId() {
					return prodctId;
				}
				public void setProdctId(Long prodctId) {
					this.prodctId = prodctId;
				}
				public Long getFk_cat_id() {
					return fk_cat_id;
				}
				public void setFk_cat_id(Long fk_cat_id) {
					this.fk_cat_id = fk_cat_id;
				}
				public Long getFk_supplier_id() {
					return fk_supplier_id;
				}
				public void setFk_supplier_id(Long fk_supplier_id) {
					this.fk_supplier_id = fk_supplier_id;
				}
				public Long getFk_unit_id() {
					return fk_unit_id;
				}
				public void setFk_unit_id(Long fk_unit_id) {
					this.fk_unit_id = fk_unit_id;
				}
				public Long getPoNumber() {
					return poNumber;
				}
				public void setPoNumber(Long poNumber) {
					this.poNumber = poNumber;
				}
				public String getProductName() {
					return productName;
				}
				public void setProductName(String productName) {
					this.productName = productName;
				}
				public String getManufacturingCompany() {
					return manufacturingCompany;
				}
				public void setManufacturingCompany(String manufacturingCompany) {
					this.manufacturingCompany = manufacturingCompany;
				}
				public Double getBuyPrice() {
					return buyPrice;
				}
				public void setBuyPrice(Double buyPrice) {
					this.buyPrice = buyPrice;
				}
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
				public Date getInsertDate() {
					return insertDate;
				}
				public void setInsertDate(Date insertDate) {
					this.insertDate = insertDate;
				}
				public Long getStatus() {
					return status;
				}
				public void setStatus(Long status) {
					this.status = status;
				}
				public MeasuringUnitsBean getMeasuringUnitsBean() {
					return measuringUnitsBean;
				}
				public void setMeasuringUnitsBean(MeasuringUnitsBean measuringUnitsBean) {
					this.measuringUnitsBean = measuringUnitsBean;
				}
				public CategoryDetailsBean getCategoryDetailsBean() {
					return categoryDetailsBean;
				}
				public void setCategoryDetailsBean(CategoryDetailsBean categoryDetailsBean) {
					this.categoryDetailsBean = categoryDetailsBean;
				}
				public SupplierDetailsBean getSupplierDetailsBean() {
					return supplierDetailsBean;
				}
				public void setSupplierDetailsBean(SupplierDetailsBean supplierDetailsBean) {
					this.supplierDetailsBean = supplierDetailsBean;
				}
				/*public MeasuringUnitsBean getMeasuringUnitsBean() {
					return measuringUnitsBean;
				}
				public void setMeasuringUnitsBean(MeasuringUnitsBean measuringUnitsBean) {
					MeasuringUnitsBean = measuringUnitsBean;
				}*/
				public Long getFk_subCat_id() {
					return fk_subCat_id;
				}
				public void setFk_subCat_id(Long fk_subCat_id) {
					this.fk_subCat_id = fk_subCat_id;
				}
			/*	public SubCategoryDetailsBean getSubcategoryDetailsBean() {
					return subcategoryDetailsBean;
				}
				public void setSubcategoryDetailsBean(
						SubCategoryDetailsBean subcategoryDetailsBean) {
					this.subcategoryDetailsBean = subcategoryDetailsBean;
				}*/


				public Long getFk_shop_id() {
					return fk_shop_id;
				}


				public void setFk_shop_id(Long fk_shop_id) {
					this.fk_shop_id = fk_shop_id;
				}





				public String getHsn() {
					return hsn;
				}





				public void setHsn(String hsn) {
					this.hsn = hsn;
				}
				public String getUpdateDate() {
					return updateDate;
				}
				public void setUpdateDate(String updateDate) {
					this.updateDate = updateDate;
				}
				public String getUnit() {
					return unit;
				}
				public void setUnit(String unit) {
					this.unit = unit;
				}





				
				
				
			


}
