package com.Fertilizer.dao;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.jfree.util.Log;

import com.Fertilizer.bean.GetCategoryDetails;
import com.Fertilizer.bean.GetTaxDetails;
import com.Fertilizer.hibernate.CategoryDetailsBean;
import com.Fertilizer.hibernate.ProductDetailsBean;
import com.Fertilizer.hibernate.Stock;
import com.Fertilizer.hibernate.SubCategoryDetailsBean;
import com.Fertilizer.hibernate.TaxCreationBean;
import com.Fertilizer.utility.HibernateUtility;

public class CategoryDetailsDao {

	public void addCategory(CategoryDetailsBean cdb) {
		
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
			session.save(cdb);
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
	
	
	public void addSubCategory(SubCategoryDetailsBean scdb) {
		
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
		 Long fkCatd =  scdb.getFk_cat_id();
		 CategoryDetailsBean catDetails = (CategoryDetailsBean) session.load(CategoryDetailsBean.class, fkCatd);
		 scdb.setCategoryDetailsBean(catDetails);
		 
		session.save(scdb);
		
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
	
	public List getSubCategoryName()
	{
		HibernateUtility hbu=null;
		Session session=null;
		
		List<SubCategoryDetailsBean> itemlist=null;
		 List<Object[]> list = null;
		
		try
		{
				hbu = HibernateUtility.getInstance();
				session = hbu.getHibernateSession();
				//Query query=session.createQuery("select invoiceNo , toPay  from ProfarmaDetail  group by invoiceNo order by invoiceNo DESC");
				Query query=session.createSQLQuery("select s.pk_subcat_id,s.sub_cat_name,c.cat_name from sub_categories s LEFT Join categories c on c.pk_cat_id=s.fk_cat_id;");
			
				list = query.list();
				itemlist = new ArrayList<SubCategoryDetailsBean>(0);
				
		 for (Object[] objects : list) {
			 SubCategoryDetailsBean bean = new SubCategoryDetailsBean();
			
			bean.setSubcatId(Long.parseLong(objects[0].toString()));;
			bean.setSubcategoryName((String)objects[1]);
			bean.setCategoryName(((String)objects[2]));
			 
			itemlist.add(bean);
			}
		 }
		catch(RuntimeException  e)
		{
				
		}finally
		{if(session!=null){
			hbu.closeSession(session);	
		}
		}
		return itemlist;
	}
	
	

	
	
			public List getAllMainCat()
			{
				HibernateUtility hbu = null;
				Session session =  null;
				Query query = null;
				 List list = null;
				 try {
					 hbu = HibernateUtility.getInstance();
					 session = hbu.getHibernateSession();
					 query = session.createQuery("from CategoryDetailsBean");
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
			
			//Category details for Category list
			
			public List getCatDetails(){
				
				HibernateUtility hbu=null;
				Session session=null;
				List<GetCategoryDetails> catList=null;
			try{	

				hbu = HibernateUtility.getInstance();
				session = hbu.getHibernateSession();

				Query query=session.createSQLQuery("select pk_cat_id, cat_name from categories");
				//Query query=session.createSQLQuery("select s.pk_cat_id,c.sub_cat_name,s.cat_name from categories  s LEFT Join sub_categories c on s.pk_cat_id=c.fk_cat_id;");
				//Query query=session.createSQLQuery("select pt.cat_name,su.sub_cat_name from categories pt JOIN sub_categories su ");
				//Query query=session.createSQLQuery("select cat_name,sub_cat_name from categories JOIN sub_categories");
				//Query query = session.createQuery("from PurchaseBill2");
				List<Object[]> list = query.list();


				catList= new ArrayList<GetCategoryDetails>(0);


			for (Object[] o : list) {	
				GetCategoryDetails p = new GetCategoryDetails();
				p.setCatId(Long.parseLong(o[0].toString()));
				//p.setTempvr(Long.parseLong(o[0].toString()));
				//p.setCatType(o[0].toString());
				p.setCategoryName(o[1].toString());
				System.out.println(p.getCategoryName());
				catList.add(p);

			}}catch(RuntimeException e){	

			}
			finally{

			hbu.closeSession(session);	
			}
			return catList;
			}
	
			// get all cat
			public List getAllCat()
			{
					HibernateUtility hbu = null;
					Session session =  null;
					Query query = null;
					 List<ProductDetailsBean> list = null; 
					 try {
						 hbu = HibernateUtility.getInstance();
						 session = hbu.getHibernateSession();
						query = session.createQuery("from CategoryDetailsBean");
						 /*query = session.createQuery("from CustomerDetailsBean");*/
						 list = query.list(); 
					} catch (Exception e) {
						Log.error("Error in getAllPriduct", e);
					}
					 
					 finally
					 {
						 if (session!=null) {
							hbu.closeSession(session);
						}
					 }
						
							return list;
					
				}
			
	public void deleteCat(String delcat) {
				
				System.out.println("delete unit id - "+delcat);
					HibernateUtility hbu = null ;
					 Session session = null;
					 Transaction tx = null;
					 List list  = null;
					 try {
						 hbu = HibernateUtility.getInstance();
						 session = hbu.getHibernateSession();
						  tx = session.beginTransaction();
						  
						  Query query1 = session.createSQLQuery("delete from goods_receive where fkCategoryId = "+delcat);
						  Query query2 = session.createSQLQuery("delete from product_details where fk_cat_id = "+delcat);
						  Query query3 = session.createSQLQuery("delete from sub_categories where fk_cat_id = "+delcat);						  
						  	Query query4 = session.createSQLQuery("delete from stock_detail where FkCatId = "+delcat);						  
							Query query5 = session.createSQLQuery("delete from categories where pk_cat_id = "+delcat);
							int seletedRecords1 = query1.executeUpdate();
							int seletedRecords2 = query2.executeUpdate();
							int seletedRecords3 = query3.executeUpdate();
							int seletedRecords4 = query4.executeUpdate();
							int seletedRecords5 = query5.executeUpdate();
							tx.commit();
							System.out.println("Number of credit Cusr goods receive deleted = = "+seletedRecords1);
							System.out.println("Number of credit Cusr product details deleted = = "+seletedRecords2);
							System.out.println("Number of credit Cusr subcategory deleted = = "+seletedRecords3);
							System.out.println("Number of credit Cusr stock details deleted = = "+seletedRecords4);
							System.out.println("Number of credit Cusr catgory deleted = = "+seletedRecords5);
							
					} catch (Exception e) {
						e.printStackTrace();
						
						
					}
						
					 finally
					 {
						 if (session!=null) {
							hbu.closeSession(session);
						}
					 }
					
				}
	
	
	//subccat
	public List getAllsubCat()
	{
			HibernateUtility hbu = null;
			Session session =  null;
			Query query = null;
			 List<ProductDetailsBean> list = null; 
			 try {
				 hbu = HibernateUtility.getInstance();
				 session = hbu.getHibernateSession();
				query = session.createQuery("from SubCategoryDetailsBean");
			
				 list = query.list(); 
			} catch (Exception e) {
				Log.error("Error in getAllPriduct", e);
			}
			 
			 finally
			 {
				 if (session!=null) {
					hbu.closeSession(session);
				}
			 }
				
					return list;
			
		}
	
}
