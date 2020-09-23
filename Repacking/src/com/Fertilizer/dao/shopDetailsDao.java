package com.Fertilizer.dao;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.jfree.util.Log;

import com.Fertilizer.hibernate.CategoryDetailsBean;
import com.Fertilizer.hibernate.Packing_InfoBean;
import com.Fertilizer.hibernate.Stock;
import com.Fertilizer.hibernate.SubCategoryDetailsBean;
import com.Fertilizer.hibernate.TaxCreationBean;
import com.Fertilizer.hibernate.shopDetailsBean;
import com.Fertilizer.utility.HibernateUtility;

public class shopDetailsDao {

	public void addShop(shopDetailsBean sdb) {
		
			System.out.println("In DAO");
			//MiddlegenTask
			HibernateUtility hbu=null;
			Session session = null;
			Transaction transaction = null;
			try{
			 hbu = HibernateUtility.getInstance();
			session = hbu.getHibernateSession();
			 transaction = session.beginTransaction();
		
			 System.out.println("Tx started");
			session.save(sdb);
			transaction.commit();
			System.out.println("Successful");
			}
			catch(RuntimeException e){
				try{
					transaction.rollback();
				}catch(RuntimeException rbe)
				{
					Log.error("Couldn't roll back tranaction",rbe);
				}	
			}finally{
			hbu.closeSession(session);
			}
		
		
	}
	
	
			public List getAllShop()
			{
				HibernateUtility hbu = null;
				Session session =  null;
				Query query = null;
				 List list = null;
				 try {
					 hbu = HibernateUtility.getInstance();
					 session = hbu.getHibernateSession();
					 query = session.createQuery("from shopDetailsBean");
					 list = query.list(); 
				} catch (RuntimeException e) {
					Log.error("Error in getAllShops", e);
				}
				 
				 finally
				 {
					 if (session!=null) {
						hbu.closeSession(session);
					}
				 }
						return list;
				
			}
			
			
//get all  product name from stock_details table
			
			public List getProductNames()
			{
				HibernateUtility hbu = null;
				Session session =  null;
				Query query = null;
				 List list = null;
				 try {
					 hbu = HibernateUtility.getInstance();
					 session = hbu.getHibernateSession();
					 query = session.createQuery("from Stock");
					 list = query.list(); 
				} catch (RuntimeException e) {
					Log.error("Error in getAllMainCat", e);
				}
				 
				 finally
				 {
					 if (session!=null) {
						hbu.closeSession(session);
					}
				 }
						return list;
				
			}
			
//get all  Company Name of products from stock_details table
			
			public List getCompanyNames()
			{
				HibernateUtility hbu = null;
				Session session =  null;
				Query query = null;
				// List list = null;
				 List<Stock> stockList = null;
				 
				 
				 try {
					 hbu = HibernateUtility.getInstance();
					 session = hbu.getHibernateSession();
					 query = session.createSQLQuery("select CompanyName, ProductName from stock_detail group by CompanyName");
					 List<Object[]> list = query.list(); 
					 stockList = new ArrayList<Stock>(0);
					 
					 for (Object[] object : list) {
							System.out.println(Arrays.toString(object));
						 	Stock reports = new Stock();
							reports.setCompanyName(object[0].toString());
							reports.setProductName(object[1].toString());
							stockList.add(reports); 
					
						}
					 
				} catch (RuntimeException e) {
					Log.error("Error in getAllMainCat", e);
				}
				 
				 finally
				 {
					 if (session!=null) {
						hbu.closeSession(session);
					}
				 }
						return stockList;
				
			}
			
			
			public List getShopName()
			{
				System.out.println("IN DAO");
				HibernateUtility hbu = null;
				Session session =  null;
				Query query = null;
				 List list = null;
				 try {
					 hbu = HibernateUtility.getInstance();
					 session = hbu.getHibernateSession();
					 query = session.createSQLQuery("SELECT pk_shop_id,shop_name from shop_details");
					 list = query.list(); 
					 System.out.println("=== list ===="+list.size());
					 System.out.println("List size of product detail = ="+list.size());
					 
				} catch (RuntimeException e) {
					Log.error("Error in getAllMainCat", e);
				}
				 
				 finally
				 {
					 if (session!=null) {
						hbu.closeSession(session);
					}
				 }
						return list;
				
			}
			
			public List getAllShops()
			{
				HibernateUtility hbu = null;
				Session session =  null;
				Query query = null;
				 List list = null;
			 try {
					 hbu = HibernateUtility.getInstance();
					 session = hbu.getHibernateSession();
					 query = session.createQuery("from shopDetailsBean");
					 list = query.list(); 
				} catch (RuntimeException e) {
					Log.error("Error in getAllSupllier", e);
				}
				 
				 finally
				 {
					 if (session!=null) {
						hbu.closeSession(session);
					}
				 }
						return list;
				
			}
			//get shop to edit
			public List<shopDetailsBean> getAllshop()
			{
				HibernateUtility hbu = null;
				Session session =  null;
				Query query = null;
				 List<shopDetailsBean> list = null;
				 try {
					 hbu = HibernateUtility.getInstance();
					 session = hbu.getHibernateSession();
					query = session.createQuery("from shopDetailsBean");
					
					 list = query.list(); 
				} catch (Exception e) {
					Log.error("Error in getAllshop", e);
				}
				 
				 finally
				 {
					 if (session!=null) {
						hbu.closeSession(session);
					}
				 }
					
						return list;
				
			}
			//edit shop
			public List getshopEdit(Long shopid) {

				System.out.println("into dao shop edit shopid - "+shopid);
				HibernateUtility hbu = null;
				Session session =  null;
				Query query = null;
				 List list = null;
				 try {
					 hbu = HibernateUtility.getInstance();
					 session = hbu.getHibernateSession();
					 query = session.createSQLQuery("select pk_shop_id, shop_name from shop_details where pk_shop_id ='"+shopid+"'");
				//	 query.setParameter("containerId", containerId);
					 list = query.list(); 
				} catch (RuntimeException e) {
					e.printStackTrace();
				}
				 
				 finally
				 {
					 if (session!=null) {
						hbu.closeSession(session);
					}
				 }
				 System.out.println("out of dao - return shop List : "+list);
						return list;

			}
			
			
			//shop list
			public List getshopList(){
				
				HibernateUtility hbu=null;
				Session session=null;
				List<shopDetailsBean> productList=null;
			try{	

				hbu = HibernateUtility.getInstance();
				session = hbu.getHibernateSession();
				Query query=session.createSQLQuery("select pk_shop_id, shop_name from shop_details");
				
				List<Object[]> list = query.list();

				System.out.println("List in  dao"+list.size());
				

				productList= new ArrayList<shopDetailsBean>(0);


			for (Object[] object : list) {	
				shopDetailsBean p = new shopDetailsBean();
				p.setShopId(Long.parseLong(object[0].toString()));
				p.setShopName(object[1].toString());
				productList.add(p);

			}}catch(RuntimeException e){	

			}
			finally{

			hbu.closeSession(session);	
			}
			return productList;
			}
	//get shp to delete
			public List getAllshopdel()
			{
				HibernateUtility hbu = null;
				Session session =  null;
				Query query = null;
				 List list = null;
			 try {
					 hbu = HibernateUtility.getInstance();
					 session = hbu.getHibernateSession();
					 query = session.createQuery("from shopDetailsBean");
					 list = query.list(); 
					 System.out.println("to get all cont - list size - "+query.list().size());
				} catch (RuntimeException e) {
					Log.error("Error in getAllshopdel", e);
				}
				 
				 finally
				 {
					 if (session!=null) {
						hbu.closeSession(session);
					}
				 }
						return list;
				
			}
			//del shop
			public void deleteshop(String shopid) {
				System.out.println("cont id in dao - "+shopid);
				HibernateUtility hbu = null ;
				Transaction tx = null;
				 Session session = null;
				 List list  = null;
				 try {
					 hbu = HibernateUtility.getInstance();
					 session = hbu.getHibernateSession();
					 tx = session.beginTransaction();
					 Query query = session.createSQLQuery("DELETE from shop_details where pk_shop_id ='"+shopid+"'");
						int seletedRecords = query.executeUpdate();
						tx.commit();
					System.out.println("tx commit");	
						System.out.println("Number of credit Cusr deleted == + = "+seletedRecords);
						//list = query.list();
						
				} catch (Exception e) {
					e.printStackTrace();
					// TODO: handle exception
				}
					
				 finally
				 {
					 if (session!=null) {
						hbu.closeSession(session);
					//	tx.commit();
					}
				 }
				
			}
			
}
