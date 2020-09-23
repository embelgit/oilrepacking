package com.Fertilizer.bean;

import java.math.BigDecimal;
import java.math.BigInteger;

public class CreditCustPaymentDetail {

	private String creditCustomerFirstName;
	private String creditCustomerLastName;
	private Double totalAmount;
	private Double balanceAmount;
	private Double credit;
	private String paymentMode;
	private String billNo;
	private Double paymentAmount;
	private Double creditPaymentAmount;
	private Double debitPaymentAmount;
	private String PaymentType;
	private String paymentDate;
	private String catName;
	private String accountantName;
	
	
	
	public String getAccountantName() {
		return accountantName;
	}
	public void setAccountantName(String accountantName) {
		this.accountantName = accountantName;
	}
	public String getCatName() {
		return catName;
	}
	public void setCatName(String catName) {
		this.catName = catName;
	}
	public String getPaymentDate() {
		return paymentDate;
	}
	public void setPaymentDate(String paymentDate) {
		this.paymentDate = paymentDate;
	}
	public Double getPaymentAmount() {
		return paymentAmount;
	}
	public void setPaymentAmount(Double paymentAmount) {
		this.paymentAmount = paymentAmount;
	}
	public String getPaymentType() {
		return PaymentType;
	}
	public void setPaymentType(String paymentType) {
		PaymentType = paymentType;
	}
	public String getCreditCustomerFirstName() {
		return creditCustomerFirstName;
	}
	public void setCreditCustomerFirstName(String creditCustomerFirstName) {
		this.creditCustomerFirstName = creditCustomerFirstName;
	}
	public String getCreditCustomerLastName() {
		return creditCustomerLastName;
	}
	public void setCreditCustomerLastName(String creditCustomerLastName) {
		this.creditCustomerLastName = creditCustomerLastName;
	}
	public Double getTotalAmount() {
		return totalAmount;
	}
	public void setTotalAmount(Double totalAmount) {
		this.totalAmount = totalAmount;
	}
	public Double getBalanceAmount() {
		return balanceAmount;
	}
	public void setBalanceAmount(Double balanceAmount) {
		this.balanceAmount = balanceAmount;
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
	public String getBillNo() {
		return billNo;
	}
	public void setBillNo(String billNo) {
		this.billNo = billNo;
	}
	
	
	
	
	
}
