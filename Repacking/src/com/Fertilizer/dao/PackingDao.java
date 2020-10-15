package com.Fertilizer.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.jfree.util.Log;

import com.Fertilizer.hibernate.PackingBean;
import com.Fertilizer.hibernate.containerStock;
import com.Fertilizer.utility.HibernateUtility;

public class PackingDao {
	
	public void addpacking(PackingBean pb) {
		
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
		session.save(pb);
		System.out.println("Successful1");
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
	
	public List getAllProductBypacking() {
		HibernateUtility hbu = null ;
		 Session session = null;
		 List list  = null;
		 try {
			 hbu = HibernateUtility.getInstance();
			 session = hbu.getHibernateSession();
	     /* 			Query query = session.createSQLQuery("select p.product_name,p.insert_date from product_details p where p.fk_supplier_id="+supplierId );*/
	Query query = session.createSQLQuery("SELECT ProductName, unpacked_Quantity, FkCatId,FkSubCatId, fk_shop_id, cat_name, sub_cat_name FROM oil.stock_detail where unpacked_Quantity>0");
		//Query query = session.createSQLQuery("select A.ProductName,A.unpacked_Quantity, A.FkCatId,FkSubCatId, A.fk_shop_id, A.cat_name, A.sub_cat_name,B.quantity from oil.stock_detail as A left join oil.container_stock_detail as B on A.PkStockId = B.pk_container_stock_id where A.unpacked_Quantity>0");
			//	Query query = session.createSQLQuery("SELECT ProductName, unpacked_Quantity, cat_name, sub_cat_name FROM oil.stock_detail");
				list = query.list();
				
		} catch (Exception e) {
			e.printStackTrace();
			// TODO: handle exception
		}
			
		 finally
		 {
			 if (session!=null) {
				hbu.closeSession(session);
			}
		 }
			return list;

	}
	
	/*To Fetch ItemName From packing Table */
	public List getAllPackingEntry()
	{
		HibernateUtility hbu=null;
		Session session=null;
		List list=null;
		try{
		 hbu = HibernateUtility.getInstance();
		 session = hbu.getHibernateSession();
		 Query query = session.createQuery("from PackingBean");
		 list = query.list();
		}
			catch(Exception e){	
				e.printStackTrace();
		}
			finally
			{
					if(session!=null){
			 		hbu.closeSession(session);
				}
			}
		
	return list;
	}
//get unit
	
	public List getunit(String unitid) 
	{
		
		System.out.println("unit id - in dao - "+unitid);
		 HibernateUtility hbu = null ;
		 Session session = null;
		 List list  = null;

		 try 
		 {
			 hbu = HibernateUtility.getInstance();
			 session = hbu.getHibernateSession();
			
//			 Query query = session.createSQLQuery("SELECT pk_type_id,Unit_Name from packing_type WHERE pk_type_id ='"+unitid+"'");
			 Query query = session.createSQLQuery("SELECT pk_container_stock_id, unit,quantity from oil.container_stock_detail WHERE pk_container_stock_id = '"+unitid+"'");
			 list = query.list();
			System.out.println("in query list size - "+query.list().size());
		//	System.out.println("Result got for total amount is ----  "+list.toString()); 
			 
			} catch (Exception e) {
				e.printStackTrace();
				
			}
			
		   finally
		   {
			  if (session!=null)  
			  {
			 	hbu.closeSession(session);
			  }
		   }
		 	
		 return list;
	}
	
	//get quantity
	
	public List getquantity(String id) 
	{
		 HibernateUtility hbu = null ;
		 Session session = null;
		 List list  = null;

		 try 
		 {
			 hbu = HibernateUtility.getInstance();
			 session = hbu.getHibernateSession();
			
 Query query = session.createSQLQuery("SELECT pk_container_stock_id,container_name, Quantity from oil.container_stock_detail where pk_container_stock_id='"+id+"' ");
			
			 list = query.list();			 
			System.out.println("in query list size - "+query.list().size());
			
			 
			} catch (Exception e) {
				Log.error("Error in getQuantity",e);
				
			}
			
		   finally
		   {
			  if (session!=null)  
			  {
			 	hbu.closeSession(session);
			  }
		   }
		 	
		 return list;
	}










/*
public List<containerStock> checkQuantity() 
{
	
	
	
	 HibernateUtility hbu = null ;
	 Session session = null;
	 List<containerStock> pib  = null;

	 try 
	 {
		 hbu = HibernateUtility.getInstance();
		 session = hbu.getHibernateSession();
		
		 
		//Query query = session.createSQLQuery(" SELECT COUNT(pk_container_stock_id), container_name,quantity FROM container_stock_detail GROUP BY container_name" );
		Query query = session.createSQLQuery("SELECT pk_container_stock_id,container_name,  Quantity from oil.container_stock_detail where quantity>0");
		 List<Object[]> list = query.list();
		 pib = new ArrayList<containerStock>(0);
		 
		 for(Object[] object : list)
		 {
			 containerStock bean = new containerStock();
			 bean.setPkContainerStockId(Long.parseLong(object[0].toString()));
			 bean.setContainerName(object[1].toString());
			 bean.setQuantity(Double.parseDouble(object[2].toString()));
			pib.add(bean);
			
			
			System.out.println("container quantity:-"+bean.getQuantity());
		 }
		 
		 
		 
		System.out.println("in query list size - "+query.list().size());
		
		 
		} catch (Exception e) {
			e.printStackTrace();
			
		}
		
	   finally
	   {
		  if (session!=null)  
		  {
		 	hbu.closeSession(session);
		  }
	   }
	 	
	 return pib;
}

*/








public List getAllContainer()
{
	HibernateUtility hbu = null;
	Session session =  null;
	Query query = null;
	 List list = null;
 try {
		 hbu = HibernateUtility.getInstance();
		 session = hbu.getHibernateSession();
		 query = session.createQuery("from containerStock");
		 list = query.list(); 
	} catch (RuntimeException e) {
		Log.error("Error in getAllUnits", e);
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