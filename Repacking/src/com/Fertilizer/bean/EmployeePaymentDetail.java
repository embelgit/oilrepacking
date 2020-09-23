package com.Fertilizer.bean;

import java.util.Date;

public class EmployeePaymentDetail {

	private String firstName;
	private String lastName;
	private Double credit;
	private String paymentMode;
	private String accountantName;
	private String insertDate;
	private Double paymentAmount;
	private Double creditPaymentAmount;
	private Double debitPaymentAmount;
	private String paymentType;
	private String reason;
	
	
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	public Double getPaymentAmount() {
		return paymentAmount;
	}
	public void setPaymentAmount(Double paymentAmount) {
		this.paymentAmount = paymentAmount;
	}
	public String getPaymentType() {
		return paymentType;
	}
	public void setPaymentType(String paymentType) {
		this.paymentType = paymentType;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public Double getCredit() {
		return credit;
	}
	public void setCredit(Double credit) {
		this.credit = credit;
	}
	public String getPaymentMode() {
		return paymentMode;
	}
	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}
	public String getAccountantName() {
		return accountantName;
	}
	public void setAccountantName(String accountantName) {
		this.accountantName = accountantName;
	}
	public String getInsertDate() {
		return insertDate;
	}
	public void setInsertDate(String insertDate) {
		this.insertDate = insertDate;
	}

	public Double getCreditPaymentAmount() {
		return creditPaymentAmount;
	}
	public void setCreditPaymentAmount(Double creditPaymentAmount) {
		this.creditPaymentAmount = creditPaymentAmount;
	}
	public Double getDebitPaymentAmount() {
		return debitPaymentAmount;
	}
	public void setDebitPaymentAmount(Double debitPaymentAmount) {
		this.debitPaymentAmount = debitPaymentAmount;
	}
	
	
	
}
