package com.Fertilizer.hibernate;

public class shopDetailsBean {

				private long shopId;
				private String shopName;
				public shopDetailsBean() {
					super();
					// TODO Auto-generated constructor stub
				}
				public shopDetailsBean(long shopId, String shopName) {
					super();
					this.shopId = shopId;
					this.shopName = shopName;
				}
				public long getShopId() {
					return shopId;
				}
				public void setShopId(long shopId) {
					this.shopId = shopId;
				}
				public String getShopName() {
					return shopName;
				}
				public void setShopName(String shopName) {
					this.shopName = shopName;
				}
				
				
				
}		
				