package com.Fertilizer.hibernate;

public class CategoryDetailsBean {

				private long catId;
				private long tempvr;
				private String categoryName;
				/*private String subCategoryName;*/
			
				public CategoryDetailsBean(long catId, String categoryName,
						String subCategoryName) {
					super();
					this.catId = catId;
					this.categoryName = categoryName;
					/*this.subCategoryName = subCategoryName;*/
				}

				public long getCatId() {
					return catId;
				}

				public void setCatId(long catId) {
					this.catId = catId;
				}

				public String getCategoryName() {
					return categoryName;
				}
			
				public void setCategoryName(String categoryName) {
					this.categoryName = categoryName;
				}

				/*public String getSubCategoryName() {
					return subCategoryName;
				}

				public void setSubCategoryName(String subCategoryName) {
					this.subCategoryName = subCategoryName;
				}*/

				public Long getTempvr() {
					return tempvr;
				}
				public void setTempvr(Long tempvr) {
					this.tempvr = tempvr;
				}
				public CategoryDetailsBean() {
					super();
					// TODO Auto-generated constructor stub
				}
			
				
				
				

				
				
				
				
}
