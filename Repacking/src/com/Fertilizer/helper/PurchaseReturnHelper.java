package com.Fertilizer.helper;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.jfree.util.Log;

import com.Fertilizer.dao.PurchaseReturnDao;
import com.Fertilizer.hibernate.PurchaseReturnBean;
import com.Fertilizer.utility.HibernateUtility;

public class PurchaseReturnHelper {

	
	public void PurchaseReturn(HttpServletRequest request,HttpServletResponse
			  response) { // TODO Auto-generated method stub 
				  Integer count = Integer.parseInt(request.getParameter("count")); 
				  for(int i =0 ; i<count;i++)
			  { 
					  
			  String bill_no = request.getParameter("bill_no"); 
			  System.out.println("Bill no is : "+bill_no);
			  String pk_goods_receive_id = request.getParameter("pk_goods_receive_id"+i); 
			  String dupQuantity1 = request.getParameter("dupQuantity1"+i); 
			  String product_name = request.getParameter("product_name"+i); 
			  String company_Name = request.getParameter("company_Name"+i); 
			  String weight = request.getParameter("weight"+i); 
			  String quantity1 = request.getParameter("quantity1"+i); 
			  String tax_percentage = request.getParameter("tax_percentage"+i); 
			  String buy_price = request.getParameter("buy_price"+i); 
			  String supplier_name = request.getParameter("supplier_name"+i);
			  String catName = request.getParameter("catName"+i); 
			  String barcodeNo = request.getParameter("barcodeNo"+i); 
			  String mrp = request.getParameter("mrp"+i); 
			  String purchaseDate = request.getParameter("insertDate"+i);
			  
			  System.out.println("quantity1: "+quantity1);
			  System.out.println("dupQuantity1: "+dupQuantity1);
			  System.out.println("pk_goods_receive_id: "+pk_goods_receive_id);
			  System.out.println("bill_no: "+bill_no);
			  System.out.println("product_name: "+product_name);
			  System.out.println("company_Name: "+company_Name);
			  System.out.println("weight: "+weight);
			  System.out.println("tax_percentage: "+tax_percentage);
			  System.out.println("buy_price: "+buy_price);
			  System.out.println("barcodeNo: "+barcodeNo);
			  System.out.println("supplier_name: "+supplier_name);
			  System.out.println("catName: "+catName);
			  

			   
			  PurchaseReturnBean bean = new PurchaseReturnBean(); 
			
			  //bean.setFk_supplier_id(Long.parseLong(fk_supplier_id));
			  bean.setPk_goods_receive_id(Long.parseLong(pk_goods_receive_id));
			  bean.setSupplier_name(supplier_name); 
			  bean.setProduct_name(product_name);
			  bean.setCompany_Name(company_Name); 
			  bean.setBatch_no("NA");
			  bean.setBill_no(Long.parseLong(bill_no));
			  bean.setBarcodeNo(Double.parseDouble(barcodeNo)); 
			  bean.setPurchaseDate(purchaseDate);
			  bean.setBuy_price(Double.parseDouble(buy_price)); 
			  bean.setCatName(catName);
			  bean.setDupQuantity1(Double.parseDouble(dupQuantity1));
			  bean.setQuantity(Double.parseDouble(quantity1));    
			  bean.setTax_percentage(Double.parseDouble(tax_percentage));
			  bean.setWeight(Double.parseDouble(weight));
			  bean.setMrp(Double.parseDouble(mrp));
			  
			  SimpleDateFormat dateFormat1 = new SimpleDateFormat("yyyy-MM-dd"); 
			  Date dateobj = new Date();
			  System.out.println(dateFormat1.format(dateobj)); 
			  bean.setReturnDate(dateobj);
			  
			  
			  PurchaseReturnDao dao = new PurchaseReturnDao();
			  dao.purchaseDetails(bean);
			  
			  }
			  
			  }
	
	
}
