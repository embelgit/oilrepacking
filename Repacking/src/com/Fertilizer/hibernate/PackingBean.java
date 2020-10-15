package com.Fertilizer.hibernate;

public class PackingBean {

	private long packing_Id;
	private long proId;
	private String proName;
	private long fkCatId;
	private long fkSubCatId;
	private Double Weight;
	private long fkShopId;
	private long fk_type_id;
	private long packingQuantity;
	private String container;
	private String unitName;
	private double quantity;
	
	
	
	
	public long getFkCatId() {
		return fkCatId;
	}


	public void setFkCatId(long fkCatId) {
		this.fkCatId = fkCatId;
	}


	public Double getWeight() {
		return Weight;
	}


	public void setWeight(Double weight) {
		Weight = weight;
	}


	public long getFkShopId() {
		return fkShopId;
	}


	public void setFkShopId(long fkShopId) {
		this.fkShopId = fkShopId;
	}


	


	public PackingBean(long packing_Id, long proId, String proName, long fkCatId, long fkSubCatId, Double weight,
			long fkShopId, long fk_type_id, long packingQuantity, String container, String unitName, double quantity) {
		super();
		this.packing_Id = packing_Id;
		this.proId = proId;
		this.proName = proName;
		this.fkCatId = fkCatId;
		this.fkSubCatId = fkSubCatId;
		Weight = weight;
		this.fkShopId = fkShopId;
		this.fk_type_id = fk_type_id;
		this.packingQuantity = packingQuantity;
		this.container = container;
		this.unitName = unitName;
		this.quantity = quantity;
	}


	public PackingBean(long packing_Id, long proId, String proName,
			long fkCatId, long fkSubCatId, Double weight, long fkShopId,
			long fk_type_id, long packingQuantity, String container) {
		super();
		this.packing_Id = packing_Id;
		this.proId = proId;
		this.proName = proName;
		this.fkCatId = fkCatId;
		this.fkSubCatId = fkSubCatId;
		Weight = weight;
		this.fkShopId = fkShopId;
		this.fk_type_id = fk_type_id;
		this.packingQuantity = packingQuantity;
		this.container = container;
		this.unitName = unitName;
	}


	public long getPacking_Id() {
		return packing_Id;
	}


	public void setPacking_Id(long packing_Id) {
		this.packing_Id = packing_Id;
	}


	

	public long getFk_type_id() {
		return fk_type_id;
	}


	public void setFk_type_id(long fk_type_id) {
		this.fk_type_id = fk_type_id;
	}


	public String getContainer() {
		return container;
	}


	public void setContainer(String container) {
		this.container = container;
	}


	public PackingBean() {
		super();
		// TODO Auto-generated constructor stub
	}


	


	public long getPackingQuantity() {
		return packingQuantity;
	}


	public void setPackingQuantity(long packingQuantity) {
		this.packingQuantity = packingQuantity;
	}


	public long getProId() {
		return proId;
	}


	public void setProId(long proId) {
		this.proId = proId;
	}


	public String getProName() {
		return proName;
	}


	public void setProName(String proName) {
		this.proName = proName;
	}


	public long getFkSubCatId() {
		return fkSubCatId;
	}


	public void setFkSubCatId(long fkSubCatId) {
		this.fkSubCatId = fkSubCatId;
	}


	public String getUnitName() {
		return unitName;
	}


	public void setUnitName(String unitName) {
		this.unitName = unitName;
	}


	public double getQuantity() {
		return quantity;
	}


	public void setQuantity(double quantity) {
		this.quantity = quantity;
	}
	
	
	
	
}