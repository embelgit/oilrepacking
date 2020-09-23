package com.Fertilizer.helper;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.hibernate.Query;
import org.hibernate.Session;

import org.hibernate.Transaction;
import com.Fertilizer.bean.CreditCustPaymentDetail;
import com.Fertilizer.bean.SaleReports;
import com.Fertilizer.dao.CustomerPaymentDao;
import com.Fertilizer.dao.FertilizerBillDao;
import com.Fertilizer.dao.SupplierPaymentDao;
import com.Fertilizer.hibernate.CustomerPaymentBean;
import com.Fertilizer.hibernate.FertilizerBillBean;
import com.Fertilizer.hibernate.SupplierPaymentBean;
import com.Fertilizer.utility.HibernateUtility;

public class CustomerPaymentHelper {

	Double bal  ;
	Long transid;
	public void regCreditCustomerCashBank(HttpServletRequest request,
			HttpServletResponse response) {



		System.out.println("In helper");
			
			String customer = request.getParameter("customer");
			
			String billNo = request.getParameter("billNo");
			Long Lbill = Long.parseLong(billNo);
			String totalAmount = request.getParameter("totalAmount");
			
			String bankName = request.getParameter("bankName");
			
			String custPay = request.getParameter("custPay");
			
			String paymentMode = request.getParameter("paymentMode");
			
			String chequeNum = request.getParameter("chequeNum");
			
			String cardNum = request.getParameter("cardNum");
			
			String accNum = request.getParameter("accNum");
			
			/*String personname = request.getParameter("personname");*/
			
			String nameOnCheck = request.getParameter("nameOnCheck");
			
			String paymentType = request.getParameter("paymentType");
			String catId = request.getParameter("catId");
			
			
			CustomerPaymentBean bean = new CustomerPaymentBean();
			
		//	bean.setCatId(Long.parseLong(catId));
			bean.setCatId(0l);
			bean.setCustomer(Long.parseLong(customer));
			/*bean.setBillNo(Long.parseLong(billNo));*/
			
			/*bean.setPersonname(personname);*/
			
			System.out.println("paymentMode "+paymentMode);
			
			//payment details
			if(paymentMode==null){
				bean.setPaymentMode("N/A");
			}
			else{
				bean.setPaymentMode(paymentMode);
			}
		 
		if(paymentMode.equals("cheque1")){
			
			 if(chequeNum==null){
					bean.setChequeNum("N/A");
				}
				else{
					bean.setChequeNum(chequeNum);
				}
			 
			 if(nameOnCheck==null){
					bean.setNameOnCheck("N/A");
				}
				else{
					bean.setNameOnCheck(nameOnCheck);
				}
			 }
		else if(paymentMode.equals("card1")){
			
				int cardNumLength = cardNum.length();
				 if(cardNumLength > 0){
						
						bean.setCardNum(Long.parseLong(cardNum));
					}
					else{
						bean.setCardNum(null);
					}
		}
	
		else if(paymentMode.equals("neft1")){
			 if(bankName==null){
					bean.setBankName("N/A");
				}
				else{
					bean.setBankName(bankName);
				}
			 
		 int accNumLength = accNum.length();
		 if(accNumLength > 0){
			 bean.setAccNum(Long.parseLong(accNum));	
			
			}
			else{
				 bean.setAccNum(null);
			}
		}	
		 
		SimpleDateFormat dateFormat1 = new SimpleDateFormat("yyyy-MM-dd");
			Date dateobj = new Date();
			System.out.println(dateFormat1.format(dateobj));
		
			bean.setInsertDate(dateobj);
			HibernateUtility hbu = HibernateUtility.getInstance();
			Session session = hbu.getHibernateSession();
			
			//Query to get latest paid amount
			Query query = session
					.createSQLQuery("SELECT balance ,bill_no from credit_customer_payment WHERE fk_customer_id =:customer ORDER BY  pk_credit_customer_id  DESC LIMIT 1 ;");
			
			query.setParameter("customer",customer);
			List<Object[]> list = query.list();
			
			System.out.println("Calc total");
			
			for (Iterator iterator = list.iterator(); iterator.hasNext();) {
				Object[] objects = (Object[]) iterator.next();
				String newBal = objects[0].toString();
					//BigDecimal bigDecimal = new BigDecimal(newBal);
	                bal= Double.valueOf(newBal);
				System.out.println(bal+"  bal");
				System.out.println("Calc balance");
			}
			
	
		
			if (bal==null) {
				
                Double balance = Double.parseDouble(totalAmount);
				
				if(paymentType.equals("credit"))
				{
					Double newBal = balance - Double.parseDouble(custPay);
					
					bean.setBalance(newBal);
					bean.setPaymentType(paymentType);
					bean.setCredit(Double.parseDouble(custPay));
				}
				
				else{
					if(paymentType.equals("debit"))
					{
						Double newBal = balance + Double.parseDouble(custPay);
						
						bean.setBalance(newBal);
						bean.setPaymentType(paymentType);
						bean.setCredit(Double.parseDouble(custPay));
					}
					else{
					
					bean.setCredit(0.0);
					}
				}
					bean.setTotalAmount(Double.parseDouble(totalAmount));
					
					CustomerPaymentDao data = new CustomerPaymentDao();
					List stkListt  = data.gettransID();
					
					for(int i=0; i<stkListt.size(); i++){
						
						CustomerPaymentBean st = (CustomerPaymentBean)stkListt.get(i);
						transid = st.getTransacid();
						
						transid++;
						
						}
					if(transid != null) {
						bean.setTransacid(transid);
					}
					else
					{
						bean.setTransacid(1l);
					}	
					
					
					
			CustomerPaymentDao dao = new CustomerPaymentDao();
			dao.regCustomerPayment(bean);
			}
			
			else{
				
                Double balance = Double.parseDouble(totalAmount);
				
				
				
				if(paymentType.equals("credit"))
				{
					Double newBal = bal - Double.parseDouble(custPay);
					
					bean.setBalance(newBal);
					bean.setPaymentType(paymentType);
					bean.setCredit(Double.parseDouble(custPay));
				}
				
				else{
					if(paymentType.equals("debit"))
					{
						Double newBal = bal + Double.parseDouble(custPay);
						/*System.out.println("debit balance = "+supPay);
						System.out.println("current balace = "+balance);
						System.out.println("debit balance = " +newBal);*/
						bean.setBalance(newBal);
						bean.setPaymentType(paymentType);
						bean.setCredit(Double.parseDouble(custPay));
					}
					else{
					
					bean.setCredit(0.0);
					}
				}

				bean.setTotalAmount(Double.parseDouble(totalAmount));
				
				CustomerPaymentDao data = new CustomerPaymentDao();
				List stkListt  = data.gettransID();
				
				for(int i=0; i<stkListt.size(); i++){
					
					CustomerPaymentBean st = (CustomerPaymentBean)stkListt.get(i);
					transid = st.getTransacid();
					
					transid++;
					
					}
				if(transid != null) {
					bean.setTransacid(transid);
				}
				else
				{
					bean.setTransacid(1l);
				}	
				
				CustomerPaymentDao dao = new CustomerPaymentDao();
				dao.regCustomerPayment(bean);
				
			}
			com.Fertilizer.dao.CustomerPaymentDao dao = new com.Fertilizer.dao.CustomerPaymentDao();
			List listt = dao.getAllfertilizer(billNo);
		//	FertilizerBillBean ft = new FertilizerBillBean();		
			
							
			
			for(int i=0; i<listt.size(); i++) {
				com.Fertilizer.hibernate.FertilizerBillBean ft = (com.Fertilizer.hibernate.FertilizerBillBean)listt.get(i);
				
				Long pkID = ft.getPkfertilizerBillId();
				Long bill = ft.getBillNo();
				System.out.println("pk id - "+pkID+" billl  - "+bill);
				System.out.println("bill no from ui - "+Lbill);
				//	if(bill == Lbill) {
				
				Double remain = ft.getBalance();
				Double updatedremain = (double)(remain - Double.parseDouble(custPay));
				System.out.println("when bill no equals n remain - "+remain+" custpay - "+custPay+" updated remain - "+updatedremain);
				com.Fertilizer.utility.HibernateUtility hbuu = com.Fertilizer.utility.HibernateUtility.getInstance();
        		 Session sessionn = hbuu.getHibernateSession();
        		 Transaction transactionn = session.beginTransaction();
        	
        		 com.Fertilizer.hibernate.FertilizerBillBean up = (com.Fertilizer.hibernate.FertilizerBillBean) session.get(com.Fertilizer.hibernate.FertilizerBillBean.class, new Long(pkID));

        		 up.setBalance(updatedremain);

        		 sessionn.saveOrUpdate(up);
        		System.out.println("sset bal - "+up.getBalance());
        		 transactionn.commit();
        		 break;
        	//	 }
        	
			}		
        		 
			
			
		
	}
	
	// ----------- -------------- --------------------------------------------------
	public List getCustDetailsByDate(HttpServletRequest request,
			HttpServletResponse response) {
		
		String fDate = request.getParameter("fisDate");
        String tDate = request.getParameter("endDate");
        String fkCustomerId = request.getParameter("fkCustomerId");
		
        Map<Long,CreditCustPaymentDetail> map = new HashMap<Long,CreditCustPaymentDetail>();
		
        CustomerPaymentDao dao = new CustomerPaymentDao();
		List<CreditCustPaymentDetail> custList = dao.getCreditCustomerDetailsDateWise(fDate,tDate,fkCustomerId);
		
		
		return custList;
	}
	public List getCustPaymentDetailsBySingleDate(HttpServletRequest request,
			HttpServletResponse response) {
	
			String fDate = request.getParameter("fDate");
			
	         Map<Long,CreditCustPaymentDetail> map = new HashMap<Long,CreditCustPaymentDetail>();
	 		
	         CustomerPaymentDao dao = new CustomerPaymentDao();
	 		List<CreditCustPaymentDetail> cust1List = dao.getCreditCustPaymentDetailsForSingleDate(fDate);
	 		
	 		
	 		return cust1List;
	}
	public List getCustPaymentDetailsByBill(HttpServletRequest request,
			HttpServletResponse response) {

		
		String fkCustomerId = request.getParameter("fkCustomerId");
		String fkCustomerId1 = request.getParameter("fkCustomerId1");
		
         Map<Long,CreditCustPaymentDetail> map = new HashMap<Long,CreditCustPaymentDetail>();
 		
         CustomerPaymentDao dao = new CustomerPaymentDao();
 		List<CreditCustPaymentDetail> cust1List = dao.getCreditCustPaymentDetailsAsPerBillNum(fkCustomerId,fkCustomerId1);
 		
 		
 		return cust1List;

	}
	public List getCustPaymentDetailsByNames(HttpServletRequest request,
			HttpServletResponse response) {
		String fkCustomerId = request.getParameter("fkCustomerId");
		
        Map<Long,CreditCustPaymentDetail> map = new HashMap<Long,CreditCustPaymentDetail>();
		
        CustomerPaymentDao dao = new CustomerPaymentDao();
		List<CreditCustPaymentDetail> cust1List = dao.getCreditCustPaymentDetailsAsPerName(fkCustomerId);
		
		
		return cust1List;
	}

}
