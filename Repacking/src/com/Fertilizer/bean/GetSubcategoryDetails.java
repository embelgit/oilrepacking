package com.Fertilizer.bean;

public class GetSubcategoryDetails {
	private Long fk_cat_id;
	private Long subcatId;
	private String subcategoryName;
	private String categoryName;
	public Long getFk_cat_id() {
		return fk_cat_id;
	}
	public void setFk_cat_id(Long fk_cat_id) {
		this.fk_cat_id = fk_cat_id;
	}
	public Long getSubcatId() {
		return subcatId;
	}
	public void setSubcatId(Long subcatId) {
		this.subcatId = subcatId;
	}
	public String getSubcategoryName() {
		return subcategoryName;
	}
	public void setSubcategoryName(String subcategoryName) {
		this.subcategoryName = subcategoryName;
	}
	public String getCategoryName() {
		return categoryName;
	}
	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
}
