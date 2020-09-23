package com.Fertilizer.helper;

import java.text.SimpleDateFormat;
import java.util.Arrays;
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
import com.Fertilizer.bean.SupplierPaymentDetail;
import com.Fertilizer.dao.CustomerPaymentDao;
import com.Fertilizer.dao.GoodsReceiveDao;
import com.Fertilizer.dao.StockDao;
import com.Fertilizer.dao.SupplierPaymentDao;
import com.Fertilizer.hibernate.FertilizerBillBean;
import com.Fertilizer.hibernate.GoodsReceiveBean;
import com.Fertilizer.hibernate.Stock;
import com.Fertilizer.hibernate.SupplierPaymentBean;
import com.Fertilizer.utility.HibernateUtility;
import com.Fertilizer.hibernate.CotainerGoodsReceiveBean;

public class SupplierCashBankHelper {

	Double bal  ;
	Double newBal;
	
	Long TransID1;
	public void regSupplierCashBank(HttpServletRequest request,
			HttpServletResponse response) {

		System.out.println("In helper");
			
			String supplier = request.getParameter("supplier");
			
			String billNo = request.getParameter("billNo");
			
			String totalAmount = request.getParameter("totalAmount");
			
			String bankName = request.getParameter("bankName");
			
			String paymentType = request.getParameter("paymentType");
			
			String paymentMode = request.getParameter("paymentMode");
			
			String chequeNum = request.getParameter("chequeNum");
			
			String cardNum = request.getParameter("cardNum");
			
			String accNum = request.getParameter("accNum");
			
			String personname = request.getParameter("personname");
			
			String nameOnCheck = request.getParameter("nameOnCheck");
			
			String supPay = request.getParameter("supPay");
			
			
			SupplierPaymentBean bean = new SupplierPaymentBean();
			
			
			bean.setSupplier(Long.parseLong(supplier));
			bean.setBillNo(Long.parseLong(billNo));
			
			bean.setPersonname(personname);
			
			System.out.println("paymentMode "+paymentMode);
			
			//payment details
			if(paymentMode==null){
				bean.setPaymentMode("N/A");
			}
			else{
				bean.setPaymentMode(paymentMode);
			}
		 
		if(paymentMode.equals("cheque")){
			
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
		else if(paymentMode.equals("card")){
			
				int cardNumLength = cardNum.length();
				 if(cardNumLength > 0){
						
						bean.setCardNum(Long.parseLong(cardNum));
					}
					else{
						bean.setCardNum(null);
					}
		}
	
		else if(paymentMode.equals("neft")){
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
			Query query = session.createSQLQuery("SELECT balance ,bill_no from supplier_payment WHERE bill_no =:billNo ORDER BY  pk_supplier_payment_id  DESC LIMIT 1 ;");
			query.setParameter("billNo",billNo);
			List<Object[]> list = query.list();
			
			for (Iterator iterator = list.iterator(); iterator.hasNext();) {
				Object[] objects = (Object[]) iterator.next();
				String newBal = objects[0].toString();
					//BigDecimal bigDecimal = new BigDecimal(newBal);
	                bal= Double.valueOf(newBal);
				System.out.println(bal);
			}
			
	
		
			if (bal==null) {
				
				Double balance = Double.parseDouble(totalAmount);
				
				if(paymentType.equals("credit"))
				{
					Double newBal = balance - Double.parseDouble(supPay);
					
            		 Transaction transaction = session.beginTransaction();
            		 
					
					bean.setBalance(newBal);
					bean.setPaymentType(paymentType);
					bean.setCredit(Double.parseDouble(supPay));
					
					GoodsReceiveDao dao1 = new GoodsReceiveDao();
			        List stkList2  = dao1.getAllPurschaseEntry();
			        
			        System.out.println("List size"+stkList2.size());
					
			        for(int j=0;j<stkList2.size();j++){
			        	
			        GoodsReceiveBean st = (GoodsReceiveBean)stkList2.get(j);
					String bill=st.getBillNum();
					Long pk_goods_receive_id=st.getPkGoodsReceiveId();
					
					if(billNo.equals(bill))
					{
					
						System.out.println("inside if");
							
						GoodsReceiveBean updateStock = (GoodsReceiveBean) session.get(GoodsReceiveBean.class, new Long(pk_goods_receive_id));
						updateStock.setBillPaymentPending(newBal);
	            		 
						session.saveOrUpdate(updateStock); 
						
						if(transaction.wasCommitted())
						{}
						else
						{
		            		transaction.commit();
						}
					}
					}
				}	
				else{
					if(paymentType.equals("debit"))
					{
						Double newBal = balance + Double.parseDouble(supPay);
						
						 Transaction transaction = session.beginTransaction();
						
						bean.setBalance(newBal);
						bean.setPaymentType(paymentType);
						bean.setCredit(Double.parseDouble(supPay));
						
						GoodsReceiveDao dao1 = new GoodsReceiveDao();
				        List stkList2  = dao1.getAllPurschaseEntry();
				        
				        System.out.println("List size"+stkList2.size());
						
				        for(int j=0;j<stkList2.size();j++){
				        	
				        GoodsReceiveBean st = (GoodsReceiveBean)stkList2.get(j);
						String bill=st.getBillNum();
						Long pk_goods_receive_id=st.getPkGoodsReceiveId();
						
						if(billNo.equals(bill)){
						
						System.out.println("inside if");
							
						GoodsReceiveBean updateStock = (GoodsReceiveBean) session.get(GoodsReceiveBean.class, new Long(pk_goods_receive_id));
						updateStock.setBillPaymentPending(newBal);
	            		 
						session.saveOrUpdate(updateStock);
	            		transaction.commit();
						}
				        }
					}
					else{
					
					bean.setCredit(0.0);
					}
				}
				
				
				
					bean.setTotalAmount(Double.parseDouble(totalAmount));
					
					SupplierPaymentDao data = new SupplierPaymentDao();
					List stkList  = data.gettransID();
					
					for(int i=0; i<stkList.size(); i++){
						
						SupplierPaymentBean st = (SupplierPaymentBean)stkList.get(i);
						TransID1 = st.getTransId();
						
						TransID1++;
						
						}
					if(TransID1 != null) {
						bean.setTransId(TransID1);
					}
					else
					{
						bean.setTransId(1l);
					}
					
			SupplierPaymentDao dao = new SupplierPaymentDao();
			dao.regSupPayment(bean);
			}
			
			else{
				
				Double balance = Double.parseDouble(totalAmount);
				
				
				
				if(paymentType.equals("credit"))
				{
					Double newBal = bal - Double.parseDouble(supPay);
					
					bean.setBalance(newBal);
					bean.setPaymentType(paymentType);
					bean.setCredit(Double.parseDouble(supPay));
					
					 Transaction transaction = session.beginTransaction();
					
					GoodsReceiveDao dao1 = new GoodsReceiveDao();
			        List stkList2  = dao1.getAllPurschaseEntry();
			        
			        System.out.println("List size"+stkList2.size());
					
			        for(int j=0;j<stkList2.size();j++){
			        	
			        GoodsReceiveBean st = (GoodsReceiveBean)stkList2.get(j);
					String bill=st.getBillNum();
					Long pk_goods_receive_id=st.getPkGoodsReceiveId();
					
					if(billNo.equals(bill)){
					
					System.out.println("inside if");
						
					GoodsReceiveBean updateStock = (GoodsReceiveBean) session.get(GoodsReceiveBean.class, new Long(pk_goods_receive_id));
					updateStock.setBillPaymentPending(newBal);
            		 
            		session.saveOrUpdate(updateStock);
            		if(transaction.wasCommitted())
					{}
					else
					{
	            		transaction.commit();
					}
            		//transaction.commit();
					}
			       }
				}
				else{
					if(paymentType.equals("debit"))
					{
						Double newBal = bal + Double.parseDouble(supPay);
						/*System.out.println("debit balance = "+supPay);
						System.out.println("current balace = "+balance);
						System.out.println("debit balance = " +newBal);*/
						bean.setBalance(newBal);
						bean.setPaymentType(paymentType);
						bean.setCredit(Double.parseDouble(supPay));
						
						Transaction transaction = session.beginTransaction();
						
						GoodsReceiveDao dao1 = new GoodsReceiveDao();
				        List stkList2  = dao1.getAllPurschaseEntry();
				        
				        System.out.println("List size"+stkList2.size());
						
				        for(int j=0;j<stkList2.size();j++){
				        	
				        GoodsReceiveBean st = (GoodsReceiveBean)stkList2.get(j);
						String bill=st.getBillNum();
						Long pk_goods_receive_id=st.getPkGoodsReceiveId();
						
						if(billNo.equals(bill)){
						
						System.out.println("inside if");
							
						GoodsReceiveBean updateStock = (GoodsReceiveBean) session.get(GoodsReceiveBean.class, new Long(pk_goods_receive_id));
						updateStock.setBillPaymentPending(newBal);
	            		 
	            		session.saveOrUpdate(updateStock);
	            		transaction.commit();
						}
				        }
				       }
					else{
					
					bean.setCredit(0.0);
					}
				}

				bean.setTotalAmount(Double.parseDouble(totalAmount));
				
				/*if(newBal == 0.0){
				//Query to get latest paid amount
				Query query1 = session
						.createSQLQuery("SELECT Pay_Status ,bill_no from fertilizer_billing WHERE bill_no =:billNo ORDER BY  pk_supplier_payment_id  DESC LIMIT 1 ;");
				query.setParameter("billNo",billNo);
				List<Object[]> list1 = query.list();
				
				for (Iterator iterator = list1.iterator(); iterator.hasNext();) {
					Object[] objects = (Object[]) iterator.next();
					String payStatus = objects[0].toString();
					
					FertilizerBillBean fbb=new FertilizerBillBean();
					fbb.setPayStatus("Y");
					
						
				}
				
				}*/
				SupplierPaymentDao data = new SupplierPaymentDao();
				List stkList  = data.gettransID();
				
				for(int i=0; i<stkList.size(); i++){
					
					SupplierPaymentBean st = (SupplierPaymentBean)stkList.get(i);
					TransID1 = st.getTransId();
					
					TransID1++;
					
					}
				if(TransID1 != null) {
					bean.setTransId(TransID1);
				}
				else
				{
					bean.setTransId(1l);
				}
				
				SupplierPaymentDao dao = new SupplierPaymentDao();
				dao.regSupPayment(bean);
				
			}
			
		}
// for container 
	Long tranId;
	public void regSupplierCashBankk(HttpServletRequest request, HttpServletResponse response) {

		System.out.println("In helper");
			
			String supplier = request.getParameter("supplier");
			
			String billNo = request.getParameter("billNo");
			
			String totalAmount = request.getParameter("totalAmount");
			
			String bankName = request.getParameter("bankName");
			
			String paymentType = request.getParameter("paymentType");
			
			String paymentMode = request.getParameter("paymentMode");
			
			String chequeNum = request.getParameter("chequeNum");
			
			String cardNum = request.getParameter("cardNum");
			
			String accNum = request.getParameter("accNum");
			
			String personname = request.getParameter("personname");
			
			String nameOnCheck = request.getParameter("nameOnCheck");
			
			String supPay = request.getParameter("supPay");
			System.out.println("supp - "+supplier+" , billno - "+billNo+", totalamt - "+totalAmount+", bal amt -  "+bankName+", paymnt type -"+paymentType+", paymnt mode - "+paymentMode+", chque no- "+chequeNum+" card num - "+cardNum+", acc num - "+accNum+", prsn nme- "+personname+", name on chck - "+nameOnCheck+" supp pay - "+supPay);
			
			SupplierPaymentBean bean = new SupplierPaymentBean();
			
			
			bean.setSupplier(Long.parseLong(supplier));
			bean.setBillNo(Long.parseLong(billNo));
			
			bean.setPersonname(personname);
			
			System.out.println("paymentMode "+paymentMode);
			
			//payment details
			if(paymentMode==null){
				bean.setPaymentMode("N/A");
			}
			else{
				bean.setPaymentMode(paymentMode);
			}
		 
		if(paymentMode.equals("cheque")){
			
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
		else if(paymentMode.equals("card")){
			
				int cardNumLength = cardNum.length();
				 if(cardNumLength > 0){
						
						bean.setCardNum(Long.parseLong(cardNum));
					}
					else{
						bean.setCardNum(null);
					}
		}
	
		else if(paymentMode.equals("neft")){
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
			Query query = session.createSQLQuery("SELECT balance ,bill_no from supplier_payment WHERE bill_no =:billNo ORDER BY  pk_supplier_payment_id  DESC LIMIT 1 ;");
			query.setParameter("billNo",billNo);
			List<Object[]> list = query.list();
			
			for (Iterator iterator = list.iterator(); iterator.hasNext();) {
				Object[] objects = (Object[]) iterator.next();
				System.out.println("result getting frm supppaymnt - "+Arrays.toString(objects));
				String newBal = objects[0].toString();
					//BigDecimal bigDecimal = new BigDecimal(newBal);
	                bal= Double.valueOf(newBal);
				System.out.println(bal);
			}
			
	
		
			if (bal==null) {
				
				Double balance = Double.parseDouble(totalAmount);
				
				if(paymentType.equals("credit"))
				{
					Double newBal = balance - Double.parseDouble(supPay);
					
            		 Transaction transaction = session.beginTransaction();
            		 
					
					bean.setBalance(newBal);
					bean.setPaymentType(paymentType);
					bean.setCredit(Double.parseDouble(supPay));
					
					GoodsReceiveDao dao1 = new GoodsReceiveDao();
			        List stkList2  = dao1.getAllContainerEntry();
			        
			        
			        
			        System.out.println("List size -- "+stkList2.size());
					
			        for(int j=0;j<stkList2.size();j++){
			        	
			        	CotainerGoodsReceiveBean st = (CotainerGoodsReceiveBean)stkList2.get(j);
					String bill=st.getBillNum();
					Long pk_goods_receive_id=st.getPkContainerGoodsReceiveId();
					
					if(billNo.equals(bill))
					{
					
						System.out.println("inside if");
							
						CotainerGoodsReceiveBean updateStock = (CotainerGoodsReceiveBean) session.get(CotainerGoodsReceiveBean.class, new Long(pk_goods_receive_id));
						updateStock.setBillPaymentPending(newBal);
	            		 
						session.saveOrUpdate(updateStock); 
						
						if(transaction.wasCommitted())
						{}
						else
						{
		            		transaction.commit();
						}
					}
					}
				}	
				else{
					if(paymentType.equals("debit"))
					{
						Double newBal = balance + Double.parseDouble(supPay);
						
						 Transaction transaction = session.beginTransaction();
						
						bean.setBalance(newBal);
						bean.setPaymentType(paymentType);
						bean.setCredit(Double.parseDouble(supPay));
						
						GoodsReceiveDao dao1 = new GoodsReceiveDao();
				        List stkList2  = dao1.getAllContainerEntry();
				        
				        System.out.println("List size"+stkList2.size());
						
				        for(int j=0;j<stkList2.size();j++){
				        	
				        	CotainerGoodsReceiveBean st = (CotainerGoodsReceiveBean)stkList2.get(j);
						String bill=st.getBillNum();
						Long pk_goods_receive_id=st.getPkContainerGoodsReceiveId();
						
						if(billNo.equals(bill)){
						
						System.out.println("inside if");
							
						CotainerGoodsReceiveBean updateStock = (CotainerGoodsReceiveBean) session.get(CotainerGoodsReceiveBean.class, new Long(pk_goods_receive_id));
						updateStock.setBillPaymentPending(newBal);
	            		 
						session.saveOrUpdate(updateStock);
	            		transaction.commit();
						}
				        }
					}
					else{
					
					bean.setCredit(0.0);
					}
				}
				
				
				
					bean.setTotalAmount(Double.parseDouble(totalAmount));
					
					SupplierPaymentDao data = new SupplierPaymentDao();
					List stkList  = data.gettransID();
					
					for(int i=0; i<stkList.size(); i++){
						
						SupplierPaymentBean st = (SupplierPaymentBean)stkList.get(i);
						tranId = st.getTransId();
						
						tranId++;
						
						}
					if(tranId != null) {
						bean.setTransId(tranId);
					}
					else
					{
						bean.setTransId(1l);
					}
					
					
			SupplierPaymentDao dao = new SupplierPaymentDao();
			dao.regSupPaymentt(bean);
			}
			
			else{
				
				Double balance = Double.parseDouble(totalAmount);
				
				
				
				if(paymentType.equals("credit"))
				{
					Double newBal = bal - Double.parseDouble(supPay);
					
					bean.setBalance(newBal);
					bean.setPaymentType(paymentType);
					bean.setCredit(Double.parseDouble(supPay));
					
					 Transaction transaction = session.beginTransaction();
					
					GoodsReceiveDao dao1 = new GoodsReceiveDao();
			        List stkList2  = dao1.getAllContainerEntry();
			        
			        System.out.println("List size   "+stkList2.size());
					
			        for(int j=0;j<stkList2.size();j++){
			        	
			        	CotainerGoodsReceiveBean st = (CotainerGoodsReceiveBean)stkList2.get(j);
					String bill=st.getBillNum();
					Long pk_goods_receive_id=st.getPkContainerGoodsReceiveId();
					
					if(billNo.equals(bill)){
					
					System.out.println("inside if");
						
					CotainerGoodsReceiveBean updateStock = (CotainerGoodsReceiveBean) session.get(CotainerGoodsReceiveBean.class, new Long(pk_goods_receive_id));
					updateStock.setBillPaymentPending(newBal);
            		 
            		session.saveOrUpdate(updateStock);
            		if(transaction.wasCommitted())
					{}
					else
					{
	            		transaction.commit();
					}
            		//transaction.commit();
					}
			       }
				}
				else{
					if(paymentType.equals("debit"))
					{
						Double newBal = bal + Double.parseDouble(supPay);
						/*System.out.println("debit balance = "+supPay);
						System.out.println("current balace = "+balance);
						System.out.println("debit balance = " +newBal);*/
						bean.setBalance(newBal);
						bean.setPaymentType(paymentType);
						bean.setCredit(Double.parseDouble(supPay));
						
						Transaction transaction = session.beginTransaction();
						
						GoodsReceiveDao dao1 = new GoodsReceiveDao();
				        List stkList2  = dao1.getAllContainerEntry();
				        
				        System.out.println("List size   "+stkList2.size());
						
				        for(int j=0;j<stkList2.size();j++){
				        	
				        	CotainerGoodsReceiveBean st = (CotainerGoodsReceiveBean)stkList2.get(j);
						String bill=st.getBillNum();
						Long pk_goods_receive_id=st.getPkContainerGoodsReceiveId();
						
						if(billNo.equals(bill)){
						
						System.out.println("inside if");
							
						CotainerGoodsReceiveBean updateStock = (CotainerGoodsReceiveBean) session.get(CotainerGoodsReceiveBean.class, new Long(pk_goods_receive_id));
						updateStock.setBillPaymentPending(newBal);
	            		 
	            		session.saveOrUpdate(updateStock);
	            		transaction.commit();
						}
				        }
				       }
					else{
					
					bean.setCredit(0.0);
					}
				}

				bean.setTotalAmount(Double.parseDouble(totalAmount));
				
				/*if(newBal == 0.0){
				//Query to get latest paid amount
				Query query1 = session
						.createSQLQuery("SELECT Pay_Status ,bill_no from fertilizer_billing WHERE bill_no =:billNo ORDER BY  pk_supplier_payment_id  DESC LIMIT 1 ;");
				query.setParameter("billNo",billNo);
				List<Object[]> list1 = query.list();
				
				for (Iterator iterator = list1.iterator(); iterator.hasNext();) {
					Object[] objects = (Object[]) iterator.next();
					String payStatus = objects[0].toString();
					
					FertilizerBillBean fbb=new FertilizerBillBean();
					fbb.setPayStatus("Y");
					
						
				}
				
				}*/
				SupplierPaymentDao data = new SupplierPaymentDao();
				List stkList  = data.gettransID();
				
				for(int i=0; i<stkList.size(); i++){
					
					SupplierPaymentBean st = (SupplierPaymentBean)stkList.get(i);
					tranId = st.getTransId();
					
					tranId++;
					
					}
				if(tranId != null) {
					bean.setTransId(tranId);
				}
				else
				{
					bean.setTransId(1l);
				}
				
				SupplierPaymentDao dao = new SupplierPaymentDao();
				dao.regSupPaymentt(bean);
				
			}
			
		}
	
	// --
	public List getSupplierPaymentDetailsBySingleDate(
			HttpServletRequest request, HttpServletResponse response) {
		String fDate = request.getParameter("fDate");
		System.out.println(fDate+"Single Date");
		
         Map<Long,SupplierPaymentDetail> map = new HashMap<Long,SupplierPaymentDetail>();
 		
         SupplierPaymentDao dao = new SupplierPaymentDao();
 		List<SupplierPaymentDetail> supList = dao.getCreditCustPaymentDetailsForSingleDate(fDate);
 		
 		
 		return supList;

	}

	public List getSupplierPaymentByTwoDate(HttpServletRequest request,
			HttpServletResponse response) {

		
		String fDate = request.getParameter("fisDate");
        String tDate = request.getParameter("endDate");
        String fkSupplierId = request.getParameter("fkSupplierId");
		
        Map<Long,SupplierPaymentDetail> map = new HashMap<Long,SupplierPaymentDetail>();
		
        SupplierPaymentDao dao = new SupplierPaymentDao();
		List<SupplierPaymentDetail> sup1List = dao.getSupplierDetailsDateWise(fDate,tDate,fkSupplierId);
		
		
		return sup1List;
	
	}

	public List getSupplierPaymentDetailsByBillNumber(
			HttpServletRequest request, HttpServletResponse response) {

		String billNo = request.getParameter("billNo");
		String fkSupplierId = request.getParameter("fkSupplierId");
		
         Map<Long,SupplierPaymentDetail> map = new HashMap<Long,SupplierPaymentDetail>();
 		
         SupplierPaymentDao dao = new SupplierPaymentDao();
 		List<SupplierPaymentDetail> supList = dao.getCreditCustPaymentDetailsAsBill(billNo,fkSupplierId);
 		
 		
 		return supList;

	
	}

	public List getSupplierPaymentDetailsByNames(HttpServletRequest request,
			HttpServletResponse response) {
		String fkSupplierId = request.getParameter("fkSupplierId");
		
        Map<Long,SupplierPaymentDetail> map = new HashMap<Long,SupplierPaymentDetail>();
		
        SupplierPaymentDao dao = new SupplierPaymentDao();
		List<SupplierPaymentDetail> supList = dao.getCreditCustPaymentDetailsAsBill(fkSupplierId);
		
		
		return supList;
	}
		
	
	}


