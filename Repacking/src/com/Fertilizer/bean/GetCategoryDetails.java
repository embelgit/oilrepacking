package com.Fertilizer.bean;

import java.math.BigDecimal;
import java.math.BigInteger;

public class GetCategoryDetails {
	
	private Long catId;
	private long tempvr;
	private String catType;
	private String categoryName;
	public String getCategoryName() {
		return categoryName;
	}
	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
	
	
	public Long getCatId() {
		return catId;
	}
	public void setCatId(Long catId) {
		this.catId = catId;
	}
	public String getCatType() {
		return catType;
	}
	public void setCatType(String catType) {
		this.catType = catType;
	}
	public Long getTempvr() {
		return tempvr;
	}
	public void setTempvr(Long tempvr) {
		this.tempvr = tempvr;
	}
}
