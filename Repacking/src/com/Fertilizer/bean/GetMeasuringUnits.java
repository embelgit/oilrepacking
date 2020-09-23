package com.Fertilizer.bean;

import java.util.Date;

public class GetMeasuringUnits {
	private Long pkUnitId;
	private String unitName;
	private Date insertDate;
	private String unitDescription;
	public Long getPkUnitId() {
		return pkUnitId;
	}
	public void setPkUnitId(Long pkUnitId) {
		this.pkUnitId = pkUnitId;
	}
	public String getUnitName() {
		return unitName;
	}
	public void setUnitName(String unitName) {
		this.unitName = unitName;
	}
	public Date getInsertDate() {
		return insertDate;
	}
	public void setInsertDate(Date insertDate) {
		this.insertDate = insertDate;
	}
	public String getUnitDescription() {
		return unitDescription;
	}
	public void setUnitDescription(String unitDescription) {
		this.unitDescription = unitDescription;
	}
}
